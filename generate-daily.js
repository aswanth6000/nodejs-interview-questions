const fs = require("fs");
const { OpenAI } = require("openai");
const slugify = require("slugify");
const dotenv = require("dotenv");

dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY");
}

const openai = new OpenAI({
  apiKey: GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

const filePath = "README.md";

const getQuestions = async (topic, count = 10) => {
  const prompt = `
    You are a senior technical interviewer.

    Generate exactly ${count} **unique** technical interview questions for the topic: "${topic}".

    ### Guidelines:
    - Questions should be a mix of **medium to advanced** difficulty.
    - Medium-level questions should test practical understanding, usage, and common challenges.
    - Advanced-level questions should test deeper concepts, edge cases, or architecture/design thinking.
    - Avoid very basic or beginner-level questions.
    - Ensure the questions are diverse — some conceptual, some problem-solving or code-based.

    Only return a **clean, numbered list** of the questions. Do NOT include explanations or answers.
`;

  const chat = await openai.chat.completions.create({
    model: "gemini-2.5-flash",
    messages: [{ role: "user", content: prompt }],
  });

  return chat.choices[0].message.content
    .split("\n")
    .map((line) => line.replace(/^\d+[\).]?\s*/, "").trim())
    .filter(Boolean);
};

const getAnswer = async (question) => {
  const prompt = `
    You are an experienced technical interviewer and educator.

    Write a clear, detailed, and beginner-friendly answer in **Markdown format** to the following interview question:

    "${question}"

    ### Guidelines:
    - Explain concepts simply with real-world analogies if helpful.
    - Use **code examples** or diagrams (in markdown) if relevant.
    - Include a brief summary or takeaway at the end.
    - Format the response using proper markdown: use headings, bullet points, bold text, and code blocks.
    - Avoid assuming prior advanced knowledge. Start from first principles if needed.

    Make sure the answer is professional, concise, and educational.
`;

  const chat = await openai.chat.completions.create({
    model: "gemini-2.5-flash",
    messages: [{ role: "user", content: prompt }],
  });

  return chat.choices[0].message.content.trim();
};

const appendDailyQnA = async (topic = "Node.js", count = 10) => {
  const existingContent = fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "";

  // Get current max question number from TOC
  const tocMatch = existingContent.match(/\|\s*(\d+)\s*\|\s*\[.*?\]\(#.*?\)\s*\|/g);
  const currentQuestionNumber = tocMatch
    ? Math.max(...tocMatch.map((line) => parseInt(line.match(/\d+/)?.[0])))
    : 0;

  // Extract existing slugs to prevent duplicates
  const seenSlugs = new Set(
    existingContent.match(/\(#(.+?)\)/g)?.map((m) => m.slice(2, -1)) || []
  );

  let newTOC = "";
  let newQnA = "";

  const questions = await getQuestions(topic, count);
  let appended = 0;
  let qNum = currentQuestionNumber + 1;

  for (const question of questions) {
    const slug = slugify(question, { lower: true });

    if (seenSlugs.has(slug)) {
      console.log(`⚠️ Skipped duplicate: ${question}`);
      continue;
    }

    seenSlugs.add(slug);

    console.log(`🧠 Generating: ${question}`);
    const answer = await getAnswer(question);

    // Append to TOC
    newTOC += `| ${qNum} | [${question}](#${slug}) |\n`;

    // Append formatted QnA
    newQnA += `\n${qNum}. ### ${question}\n\n${answer}\n\n**[⬆ Back to Top](#table-of-contents)**\n\n`;

    appended++;
    qNum++;

    if (appended >= count) break;
  }

  if (appended > 0) {
    // Insert new TOC rows after the last TOC line
    const updatedTOCContent = existingContent.replace(
      /(\|[-|]+\n)((?:\|.*\n)*?)/,
      (_, separator, tocLines) => `${separator}${tocLines}${newTOC}`
    );

    const finalContent = updatedTOCContent + "\n" + newQnA;

    fs.writeFileSync(filePath, finalContent, "utf8");
    console.log(`✅ Appended ${appended} questions`);
  } else {
    console.log("🚫 No new questions added (all were duplicates)");
  }
};


appendDailyQnA("Node.js", 10);
