import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ch01: Hello Agent",
  description:
    "Streaming chat with Mastra agent and Langfuse observability — Building AI-Powered Frontends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
