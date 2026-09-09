"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useGarage } from "@/lib/garage-context";
import { isFreshWorkspace } from "@/lib/garage-store";
import {
  answerGuide,
  suggestedPrompts,
  welcomeCopy,
  type GuideTurn,
} from "@/lib/garage-guide";

export function GarageGuide() {
  const pathname = usePathname();
  const { workspace } = useGarage();
  const fresh = isFreshWorkspace(workspace);
  const name = workspace.profile.garageName;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [turns, setTurns] = useState<GuideTurn[]>([]);
  const endRef = useRef<HTMLDivElement>(null);
  const prompts = useMemo(
    () => suggestedPrompts(pathname, fresh),
    [pathname, fresh],
  );

  useEffect(() => {
    setTurns([{ role: "guide", text: welcomeCopy(name, fresh) }]);
  }, [name, fresh]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [turns, open]);

  function ask(text: string) {
    const question = text.trim();
    if (!question) return;
    setTurns((current) => [
      ...current,
      { role: "user", text: question },
      { role: "guide", text: answerGuide(question, name) },
    ]);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(22,21,19,0.18)] hover:bg-[#2c2a27]"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-[0.7rem]"
          aria-hidden="true"
        >
          ?
        </span>
        {open ? "Close guide" : "Ask how this works"}
      </button>

      {open ? (
        <div className="fixed bottom-20 right-4 z-40 flex h-[min(32rem,70vh)] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.16)]">
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-sm font-semibold text-slate-900">Workshop guide</p>
            <p className="text-xs text-slate-500">
              How to run {name} — not a chatbot for someone else&apos;s garage.
            </p>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm">
            {turns.map((turn, index) => (
              <p
                key={`${turn.role}-${index}`}
                className={
                  turn.role === "user"
                    ? "ml-8 rounded-2xl bg-slate-900 px-3 py-2 text-white"
                    : "mr-6 rounded-2xl bg-slate-50 px-3 py-2 leading-6 text-slate-700"
                }
              >
                {turn.text}
              </p>
            ))}
            <div ref={endRef} />
          </div>
          <div className="border-t border-slate-100 px-3 py-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-[0.7rem] text-slate-600 hover:bg-slate-50"
                  onClick={() => ask(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                ask(input);
              }}
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about a job, a payment, or Settings…"
                className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="rounded-lg bg-ink px-3 py-2 text-sm font-medium text-white"
              >
                Ask
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
