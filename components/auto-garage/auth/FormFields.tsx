"use client";

import { useId, useState, type InputHTMLAttributes } from "react";

const inputBase =
  "w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink outline-none";

function inputClass(error?: string) {
  return `${inputBase} ${error ? "border-[#9a3412]" : "border-line"}`;
}

type TextFieldProps = {
  id: string;
  name: string;
  label: string;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "name">;

export function TextField({
  id,
  name,
  label,
  error,
  ...inputProps
}: TextFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClass(error)}
        {...inputProps}
      />
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-[#9a3412]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type PasswordFieldProps = {
  id: string;
  name: string;
  label: string;
  error?: string;
  autoComplete?: string;
};

export function PasswordField({
  id,
  name,
  label,
  error,
  autoComplete,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);
  const errorId = useId();
  const describedBy = error ? errorId : undefined;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="relative mt-1.5">
        <input
          id={id}
          name={name}
          type={visible ? "text" : "password"}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`${inputClass(error)} pr-12`}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 text-xs font-medium text-mute hover:text-ink"
          onClick={() => setVisible((value) => !value)}
          aria-label={visible ? `Hide ${label}` : `Show ${label}`}
          aria-pressed={visible}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-[#9a3412]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function AuthBackLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center text-sm text-mute transition-colors hover:text-ink"
    >
      ← Back to Auto Garage
    </a>
  );
}
