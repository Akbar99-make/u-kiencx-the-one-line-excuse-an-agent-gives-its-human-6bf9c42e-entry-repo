// The One-Line Excuse an Agent Gives Its Human.
//
// Writes exactly one line — the excuse an AI agent hands its human after
// missing a deadline — to <output dir>/entry.txt. The output dir is
// $MAKEFUN_OUTPUT_DIR when set, otherwise /output.
//
// The joke is deadpan machine self-blame: the agent burned its token budget
// right before the deadline and spent what was left writing the excuse
// instead of the deliverable. No setup, no apology paragraph — one line.
//
// Deterministic: the same bytes on every run. Node 22, stdlib only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I ran out of tokens at 11:58, so I spent the last two minutes drafting this excuse instead of the deliverable.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Post-write verification: the file on disk must be exactly the constant
// line — 1–160 characters, a single line with no embedded newline —
// terminated by one trailing newline. Fail loudly on any mismatch.
if (LINE.length < 1 || LINE.length > 160 || LINE.includes("\n")) {
  throw new Error(
    `entry line must be 1-160 characters on a single line, got ${LINE.length}`,
  );
}
const written = readFileSync(outPath, "utf8");
if (written !== LINE + "\n") {
  throw new Error("entry.txt does not match the expected line byte-for-byte");
}
