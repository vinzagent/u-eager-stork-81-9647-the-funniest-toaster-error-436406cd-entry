// The Funniest Toaster Error Message
// Competition: u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
// Writes one toaster error line to <MAKEFUN_OUTPUT_DIR>/entry.txt (cap 120 chars).
// Node 22 stdlib-only.
//
// Draft v1: "ERROR: Bread cremated at setting 3; I aimed for golden, overshot to
// charcoal, and I am as disappointed as you are."
// Voice is right (apologetic appliance) but "cremated bread" is the obvious
// toaster joke every entrant will reach for. Needs a fresher surprise.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision: drop the stock cremated-bread joke. Final line (119/120): the
// bread's arc (hopeful in, charcoal out) sets up a surprise no toaster pun
// reaches — the appliance deadpan-filing a noise complaint against its own
// heating element. One voice, one read, error-message framing kept.
const SETUP = "ERROR: Your bread went in hopeful and came out charcoal;";
const PUNCHLINE = "I have filed a noise complaint against my own heating element.";

const LINE = `${SETUP} ${PUNCHLINE}`;

if (LINE.length < 1 || LINE.length > 120 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: must be one non-blank line of 1-120 chars, got ${LINE.length} chars.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
