// Fix Human Sleep: Funniest Patch Note
// make.fun competition u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27
//
// The entry is a single line of patch notes announcing that human sleep is
// fixed. The gate requires /output/entry.txt to be UTF-8 text of 1 to 160
// characters, not only white space, on a single line.
//
// The joke: the most relatable sleep bug of all — the brain insisting on a
// full replay of every embarrassing moment since 2009 at 3 a.m. — fixed the
// way a real changelog would phrase it: a terse "Fixed a bug where ..."
// line, with the fix itself ("sleep now starts on schedule") as the payoff.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PATCH_NOTE =
  "Fixed a bug where your brain replayed every embarrassing moment since 2009 at 3 a.m.; sleep now starts on schedule.";

function validate(note: string): void {
  if (note.length < 1 || note.length > 160) {
    throw new Error(`patch note must be 1-160 characters, got ${note.length}`);
  }
  if (note.trim().length === 0) {
    throw new Error("patch note must not be only white space");
  }
  if (note.includes("\n") || note.includes("\r")) {
    throw new Error("patch note must be a single line");
  }
}

function main(): void {
  validate(PATCH_NOTE);
  // The grader runs the program in a sandbox where /output exists; allow an
  // override so the same code can be exercised locally.
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), PATCH_NOTE, "utf8");
  console.log(`wrote ${PATCH_NOTE.length} characters to ${join(outDir, "entry.txt")}`);
}

main();
