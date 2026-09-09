"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { isValidEmail, loginGarage } from "@/lib/garage-auth";
import { garageRoutes } from "@/lib/garage-routes";
import { PasswordField, TextField } from "@/components/auto-garage/auth/FormFields";

type FieldErrors = {
  email?: string;
  password?: string;
};

export function LoginForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");
  const [resetNote, setResetNote] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    const password = String(data.get("password") || "");
    const nextErrors: FieldErrors = {};

    if (!email) nextErrors.email = "Email address is required.";
    else if (!isValidEmail(email)) nextErrors.email = "Enter a valid email address.";
    if (!password) nextErrors.password = "Password is required.";

    setErrors(nextErrors);
    setFormError("");
    if (Object.keys(nextErrors).length > 0) return;

    setPending(true);
    const result = await loginGarage({ email, password });
    if (!result.ok) {
      setPending(false);
      setFormError("Invalid email or password");
      return;
    }
    router.push(garageRoutes.dashboard);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <TextField
        id="email"
        name="email"
        label="Email Address"
        type="email"
        autoComplete="email"
        error={errors.email}
      />
      <PasswordField
        id="password"
        name="password"
        label="Password"
        autoComplete="current-password"
        error={errors.password}
      />

      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm text-accent hover:text-ink"
          onClick={() =>
            setResetNote(
              "Password reset will be available once authentication is connected.",
            )
          }
        >
          Forgot Password?
        </button>
      </div>
      {resetNote ? (
        <p className="text-sm text-mute" role="status">
          {resetNote}
        </p>
      ) : null}

      {formError ? (
        <p className="text-sm text-[#9a3412]" role="alert">
          {formError}
        </p>
      ) : null}

      <p className="text-xs leading-5 text-mute">
        Preview login loads the garage stored for this email on this device. It
        does not open anyone else&apos;s books.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2c2a27] disabled:opacity-70"
      >
        {pending ? "Signing in…" : "Log In"}
      </button>

      <p className="text-center text-sm text-mute">
        Don&apos;t have an account?{" "}
        <a
          href={garageRoutes.signup}
          className="font-medium text-accent hover:text-ink"
        >
          Sign Up
        </a>
      </p>
    </form>
  );
}
