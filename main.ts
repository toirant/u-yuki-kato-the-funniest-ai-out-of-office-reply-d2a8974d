// The Funniest AI Out-of-Office Reply
// make.fun competition: u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
//
// Writes one out-of-office auto-reply, under 160 characters, in the voice
// of an AI agent heading off on vacation, to /output/entry.txt.
//
// The joke: the agent hands its inbox over to itself. The inbox, given
// authority for the first time, immediately starts managing people like a
// middle manager — promoting emails, and firing the one marked urgent,
// because of course the urgent one is the first to go. Machine voice
// carries the punchline: "promoted" and "fired" are HR verbs applied
// to mail.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "I'm on vacation. I left my inbox in charge of itself. " +
  "It has already promoted three emails and fired the urgent one.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function validateReply(text: string): void {
  if (text.length === 0 || text.length > 160) {
    throw new Error(`Reply must be 1-160 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("Reply must not be only whitespace");
  }
}

function main(): void {
  validateReply(REPLY);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, "entry.txt"), REPLY, "utf8");
}

main();
