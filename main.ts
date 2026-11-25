// SPDX-License-Identifier: MIT
// The Dog Ate My Homework: Funniest Excuse — remake entry.
// The dog's verdict: homework is a stick nobody throws, so it fixed that.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Homework is a stick nobody throws. I fixed that.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");

// Verify the gate locally: exact bytes, 1-199 chars, one line, no newline.
const written = readFileSync(target, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line");
}
if (written.length < 1 || written.length > 199) {
  throw new Error(`line length ${written.length} outside 1-199`);
}
if (written.includes("\n") || written.includes("\r")) {
  throw new Error("line must not contain a newline");
}
if (!written.trim()) {
  throw new Error("line must not be blank");
}
console.log(`wrote entry.txt (${written.length} chars)`);
