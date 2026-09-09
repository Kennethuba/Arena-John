"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  isValidEmail,
  isValidPhone,
  registerGarage,
} from "@/lib/garage-auth";
import { garageRoutes } from "@/lib/garage-routes";
import { PasswordField, TextField } from "@/components/auto-garage/auth/FormFields";

type FieldErrors = {
  garageName?: string;
  companyName?: string;
  phone?: string;
  email?: string;
  fullName?: string;
  password?: string;
  confirm?: string;
  terms?: string;
};

function validate(data: FormData): FieldErrors {
  const garageName = String(data.get("garageName") || "").trim();
  const companyName = String(data.get("companyName") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const email = String(data.get("email") || "").trim();
  const fullName = String(data.get("fullName") || "").trim();
  const password = String(data.get("password") || "");
  const confirm = String(data.get("confirm") || "");
  const terms = data.get("terms") === "on";
  const errors: FieldErrors = {};

  if (!garageName) errors.garageName = "Enter your garage name.";
  if (!companyName) errors.companyName = "Enter your business or company name.";
  if (!phone) errors.phone = "Enter a phone number.";
  else if (!isValidPhone(phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!email) errors.email = "Enter an email address.";
  else if (!isValidEmail(email)) errors.email = "Enter a valid email address.";
  if (!fullName) errors.fullName = "Enter your full name.";
  if (!password) errors.password = "Create a password.";
  else if (password.length < 8) {
    errors.password = "Use at least 8 characters.";
  }
  if (!confirm) errors.confirm = "Confirm your password.";
  else if (password !== confirm) errors.confirm = "The passwords do not match.";
  if (!terms) errors.terms = "Accept the Terms & Conditions to continue.";

  return errors;
}

export function SignupForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<FieldErrors>({});
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setPending(true);
    const result = await registerGarage({
      garageName: String(data.get("garageName") || "").trim(),
      companyName: String(data.get("companyName") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      fullName: String(data.get("fullName") || "").trim(),
      password: String(data.get("password") || ""),
    });
    if (!result.ok) {
      setPending(false);
      setErrors({ terms: result.error });
      return;
    }
    router.push(garageRoutes.dashboard);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <fieldset className="space-y-4">
        <legend className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-mute">
          Garage Information
        </legend>
        <TextField
          id="garageName"
          name="garageName"
          label="Garage Name"
          autoComplete="organization"
          error={errors.garageName}
        />
        <TextField
          id="companyName"
          name="companyName"
          label="Business/Company Name"
          autoComplete="organization"
          error={errors.companyName}
        />
        <TextField
          id="phone"
          name="phone"
          label="Phone Number"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          error={errors.phone}
        />
        <TextField
          id="email"
          name="email"
          label="Email Address"
          type="email"
          autoComplete="email"
          error={errors.email}
        />
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-mute">
          Account Information
        </legend>
        <TextField
          id="fullName"
          name="fullName"
          label="Full Name"
          autoComplete="name"
          error={errors.fullName}
        />
        <PasswordField
          id="password"
          name="password"
          label="Password"
          autoComplete="new-password"
          error={errors.password}
        />
        <PasswordField
          id="confirm"
          name="confirm"
          label="Confirm Password"
          autoComplete="new-password"
          error={errors.confirm}
        />
      </fieldset>

      <div>
        <label className="flex items-start gap-2.5 text-sm text-ink">
          <input
            type="checkbox"
            name="terms"
            className="mt-0.5 h-4 w-4 rounded border-line"
            aria-invalid={errors.terms ? true : undefined}
          />
          <span>
            I agree to the{" "}
            <a href="/terms" className="font-medium text-accent hover:text-ink">
              Terms & Conditions
            </a>
          </span>
        </label>
        {errors.terms ? (
          <p className="mt-1 text-sm text-[#9a3412]" role="alert">
            {errors.terms}
          </p>
        ) : null}
      </div>

      <p className="text-xs leading-5 text-mute">
        This preview keeps the garage on this device, under this email. It
        starts empty. A billed account connects later.
      </p>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-ink px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2c2a27] disabled:opacity-70"
      >
        {pending ? "Opening your garage…" : "Open my garage"}
      </button>

      <p className="text-center text-sm text-mute">
        Already have an account?{" "}
        <a
          href={garageRoutes.login}
          className="font-medium text-accent hover:text-ink"
        >
          Log In
        </a>
      </p>
    </form>
  );
}
