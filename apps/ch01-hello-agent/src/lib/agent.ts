import { Agent } from "@mastra/core/agent";
import { anthropic } from "@ai-sdk/anthropic";

export const chatAgent = new Agent({
  name: "chat-agent",
  instructions: "You are a helpful assistant.",
  model: anthropic("claude-haiku-4-5-20251001"),
});
