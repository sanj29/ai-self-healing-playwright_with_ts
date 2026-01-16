import { openai } from "./openaiClient";

export async function healSelector(
  failedSelector: string,
  error: string,
  dom: string
): Promise<string | null> {

  const prompt = `
You are a QA automation expert.

A Playwright selector failed.

Failed selector:
${failedSelector}

Error:
${error}

DOM:
${dom}

Rules:
- Suggest ONE valid Playwright selector
- Prefer accessibility roles, text, or data-testid
- Output ONLY the selector
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [{ role: "user", content: prompt }]
  });

  return response.choices[0].message?.content?.trim() || null;
}
