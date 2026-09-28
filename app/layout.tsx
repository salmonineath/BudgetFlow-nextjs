import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BudgetFlow",
  description: "Smart budgeting without the complexity.",
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