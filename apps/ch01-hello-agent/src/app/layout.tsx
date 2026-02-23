import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello Agent",
  description: "A simple AI chat agent powered by Claude",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
