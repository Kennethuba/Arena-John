import { SimpleModule } from "@/components/auto-garage/app/WorkspaceModules";

export default function Page() {
  return (
    <SimpleModule
      title="Purchases"
      description="Supplier purchases for this garage."
      empty="No purchases yet. A new company has not ordered parts."
    />
  );
}
