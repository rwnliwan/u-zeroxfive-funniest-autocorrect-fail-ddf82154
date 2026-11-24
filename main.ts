import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Final entry text — one line, 63 characters.
// A parent texts about hiring a tutor for their son; autocorrect turns
// "tutor" into "tumor" (one letter), and the hire now starts Monday.
const ENTRY =
  "Just hired a tumor to help my son with math — he starts Monday!";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
