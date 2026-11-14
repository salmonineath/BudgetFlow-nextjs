import Link from "next/link";

import { Logo } from "@/components/ui/logo";

export default function PwaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh bg-background-soft text-foreground">
      <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col bg-background">
        <header className="border-b border-border px-5 py-4">
          <Link href="/home" aria-label="SansamApp home" className="text-lg">
            <Logo />
          </Link>
        </header>

        <main className="flex-1 px-5 py-6">{children}</main>

        <nav className="sticky bottom-0 border-t border-border bg-background">
          <div className="grid grid-cols-4 px-2 py-2 text-center text-sm">
            <Link href="/home" className="rounded-lg px-2 py-3">
              Home
            </Link>

            <Link href="/expenses" className="rounded-lg px-2 py-3">
              Expenses
            </Link>

            <Link href="/budget" className="rounded-lg px-2 py-3">
              Budget
            </Link>

            <Link href="/profile" className="rounded-lg px-2 py-3">
              Profile
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
