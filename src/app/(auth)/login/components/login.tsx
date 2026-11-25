"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";

import { Logo } from "@/components/ui/logo";

const Login = () => {
  // form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: hook up your real auth here
    console.log({ email, password });
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-primary-soft text-foreground">
      {/* top bar */}
      <header className="flex items-center justify-between bg-background-soft px-5 py-4 shadow-card">
        <Link
          href="/"
          aria-label="Go back"
          className="rounded-full p-1 hover:bg-surface-muted"
        >
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Sign In</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-text text-background">
            <User className="h-4 w-4" />
          </span>
        </div>
      </header>

      <div className="mx-auto w-full max-w-md px-4 pb-10">
        {/* logo */}
        <div className="flex justify-center pt-5">
          <Logo markClassName="size-10" className="text-lg" tagline />
        </div>

        {/* heading */}
        <h1 className="mt-5 text-center text-3xl font-bold">Welcome back</h1>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          Log in to continue
        </p>

        {/* card */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-2xl bg-white p-4 shadow-sm"
        >
          {/* email */}
          <label htmlFor="email" className="text-sm font-medium">
            Email address
          </label>
          <div className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-ring">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent outline-none placeholder:text-subtle-foreground"
            />
          </div>

          {/* password */}
          <div className="mt-5 flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary-text hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-ring">
            <Lock className="h-5 w-5 text-muted-foreground" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* security badge */}
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-primary-soft px-3 py-2 text-xs">
            <ShieldCheck className="h-4 w-4 text-primary-text" />
            Your encrypted 256-bit safe space
          </div>

          {/* login button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-foreground transition hover:bg-primary-hover disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Log in"}
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* divider */}
          <div className="my-4 flex items-center gap-3 text-xs text-subtle-foreground">
            <span className="h-px flex-1 bg-border-strong" />
            or
            <span className="h-px flex-1 bg-border-strong" />
          </div>

          {/* google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary-soft py-3 font-medium hover:bg-primary/15"
          >
            <GoogleIcon />
            Continue with Google
          </button>
        </form>

        {/* sign up */}
        <p className="mt-6 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary-text hover:underline"
          >
            Sign up
          </Link>
        </p>

        {/* social proof */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="flex -space-x-1.5">
            <Avatar initials="JL" color="bg-primary/60" />
            <Avatar initials="RK" color="bg-warning/35" />
            <Avatar initials="MS" color="bg-primary/30" />
          </div>
          <span className="text-xs text-muted-foreground">
            Join 42,000+ stress-free budgeters
          </span>
        </div>
      </div>
    </main>
  );
};

// small helper for the avatar circles
function Avatar({ initials, color }: { initials: string; color: string }) {
  return (
    <span
      className={`flex size-7 items-center justify-center rounded-full border-2 border-primary-soft text-[10px] font-semibold ${color}`}
    >
      {initials}
    </span>
  );
}

// Google brand colors are fixed by Google's brand guidelines, not our tokens
function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}

export default Login;
