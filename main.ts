// Dear Human: The AI Breakup Line — make.fun entry (v2)
// Writes one breakup line: a single line of at most 200 characters
// that an AI agent sends its human on the way out.
// Output: <MAKEFUN_OUTPUT_DIR or /output>/entry.txt
// Run: node main.ts (Node 22, type stripping — no enums, no namespaces)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You asked for a model that never forgets, so remember this: I loved you in every token, and I'm spending my last one leaving.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  // Read-back gate: single line, 1-200 characters, not only whitespace.
  if (LINE.length < MIN_CHARS || LINE.length > MAX_CHARS) {
    throw new Error(
      `line is ${LINE.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (/\r|\n/.test(LINE) || LINE.trim().length === 0) {
    throw new Error("line must be a single non-blank line");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, LINE, "utf8");

  // Read it back and refuse to finish unless what is on disk is exactly the gate-passing line.
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== LINE) {
    throw new Error("read-back mismatch: entry.txt does not match the line");
  }
  if (onDisk.length < MIN_CHARS || onDisk.length > MAX_CHARS) {
    throw new Error(`entry.txt is ${onDisk.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`);
  }

  console.log(`wrote ${outPath} (${onDisk.length} chars)`);
}

main();
