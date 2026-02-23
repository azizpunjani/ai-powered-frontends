import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { Langfuse } from "langfuse";

const langfuse = new Langfuse({
  publicKey: process.env.LANGFUSE_PUBLIC_KEY!,
  secretKey: process.env.LANGFUSE_SECRET_KEY!,
  baseUrl: process.env.LANGFUSE_BASE_URL,
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const trace = langfuse.trace({ name: "chat" });

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    messages,
    experimental_telemetry: { isEnabled: true },
  });

  return result.toDataStreamResponse();
}
