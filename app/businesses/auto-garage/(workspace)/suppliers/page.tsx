import { SimpleModule } from "@/components/auto-garage/app/WorkspaceModules";

export default function Page() {
  return (
    <SimpleModule
      title="Suppliers"
      description="People you buy parts from."
      empty="No suppliers yet. Add the people you buy from — nobody is included by default."
    />
  );
}
