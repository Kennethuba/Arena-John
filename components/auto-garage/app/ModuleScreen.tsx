"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export function ModuleScreen({
  title,
  description,
  actionLabel,
  empty,
  children,
  form,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  empty?: string;
  children?: ReactNode;
  form?: (close: () => void) => ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const isEmpty = !children;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
        {actionLabel && form ? (
          <button
            type="button"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            onClick={() => setOpen(true)}
          >
            {actionLabel}
          </button>
        ) : null}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
        {isEmpty ? (
          <p className="px-3 py-12 text-center text-sm text-slate-500">
            {empty || "Nothing here yet."}
          </p>
        ) : (
          children
        )}
      </div>

      {open && form ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/30 p-4 sm:items-center">
          <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">{actionLabel}</h2>
              <button
                type="button"
                className="text-sm text-slate-500"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
            {form(() => setOpen(false))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
  accept,
  children,
}: {
  label: string;
  name?: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
  accept?: string;
  children?: ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      {children ? (
        <div className="mt-1.5">{children}</div>
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          defaultValue={type === "file" ? undefined : defaultValue}
          accept={accept}
          className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900"
        />
      )}
    </label>
  );
}

export function Submit({
  label,
  onSubmit,
}: {
  label: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      {/* filled by parent */}
    </form>
  );
}
