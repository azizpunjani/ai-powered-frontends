import { Mastra } from "@mastra/core";
import { anthropic } from "@ai-sdk/anthropic";

const mastra = new Mastra({
  agents: {
    chatAgent: {
      model: anthropic("claude-haiku-4-5-20251001"),
      tools: {
        getCurrentTime: {
          description: "Get the current time",
          execute: async () => new Date().toISOString(),
        },
      },
    },
  },
});

export const chatAgent = mastra.getAgent("chatAgent");
