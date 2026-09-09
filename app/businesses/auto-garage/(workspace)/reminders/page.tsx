import { SimpleModule } from "@/components/auto-garage/app/WorkspaceModules";

export default function Page() {
  return (
    <SimpleModule
      title="Reminders"
      description="Service due dates and follow-ups."
      empty="No reminders yet. Nobody has been asked to come back, because no job has been finished."
    />
  );
}
