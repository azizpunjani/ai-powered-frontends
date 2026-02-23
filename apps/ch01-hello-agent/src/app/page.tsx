"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "2rem" }}>
      <h1>Hello Agent</h1>
      <div
        style={{
          minHeight: 300,
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: "1rem",
          marginBottom: "1rem",
          overflowY: "auto",
        }}
      >
        {messages.map((m) => (
          <div key={m.id} style={{ marginBottom: "1rem" }}>
            <strong>{m.role === "user" ? "You" : "Agent"}:</strong>
            <p style={{ whiteSpace: "pre-wrap", margin: "0.25rem 0" }}>
              {m.content}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
          style={{ flex: 1, padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem", borderRadius: 4 }}>
          Send
        </button>
      </form>
    </div>
  );
}
