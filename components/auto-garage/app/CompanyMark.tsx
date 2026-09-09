"use client";

import { useGarage } from "@/lib/garage-context";

function initials(name?: string) {
  if (!name?.trim()) return "G";
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function CompanyMark({
  size = "md",
}: {
  size?: "sm" | "md";
}) {
  const { workspace } = useGarage();
  const dim = size === "sm" ? "h-8 w-8 text-[0.65rem]" : "h-10 w-10 text-sm";
  if (workspace.profile.logoDataUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={workspace.profile.logoDataUrl}
        alt=""
        className={`${dim} rounded-lg object-cover`}
      />
    );
  }
  return (
    <span
      className={`inline-flex ${dim} items-center justify-center rounded-lg bg-slate-800 font-medium text-white`}
    >
      {initials(workspace.profile.garageName)}
    </span>
  );
}
