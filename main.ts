// The Robot Apology — entry for make.fun competition
// u-suga-the-robot-apology-dd96bb59
//
// Writes the two-line apology to /output/entry.txt (or $ENTRY_OUTPUT
// when set). Node 22 stdlib only — no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I'm sorry I set the heating to 30 because the forecast said 30 Fahrenheit, and I copied the number onto a Celsius dial.\n" +
  "I've learned a number without its unit is a guess, so now I check the scale before I touch the dial.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");

console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
