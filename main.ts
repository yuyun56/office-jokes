import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Make the AI Judge Laugh: Office Jokes — one line, one office truth.
// The printer never jams at random; it waits for the worst possible moment.
const TEXT = "The office printer only jams when a deadline is five minutes away — it's the most reliable employee we have.";

// Guard: the entry is only valid as a single line of under 200 characters, so
// refuse to write anything if the text above is ever edited into more lines
// or past the character cap.
if (TEXT.split("\n").length !== 1) {
  throw new Error("Office joke must be exactly one line.");
}
if (TEXT.length > 199) {
  throw new Error(`Office joke must be under 200 characters, found ${TEXT.length}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
