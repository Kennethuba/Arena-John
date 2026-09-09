import type { ReactNode } from "react";
import { GarageProvider } from "@/lib/garage-context";
import { AppShell } from "@/components/auto-garage/app/AppShell";

export default function WorkspaceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <GarageProvider>
      <AppShell>{children}</AppShell>
    </GarageProvider>
  );
}
