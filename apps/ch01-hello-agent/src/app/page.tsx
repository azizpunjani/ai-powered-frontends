import { ChatInterface } from "./components/ChatInterface";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl">
      <header className="border-b px-4 py-6">
        <h1 className="text-lg font-semibold">Hello Agent</h1>
        <p className="mt-1 text-sm text-gray-500">
          Chapter 1 — Streaming chat with Mastra agent and Langfuse
          observability.
        </p>
      </header>
      <ChatInterface />
    </main>
  );
}
