// one-emoji-vacation
// One original emoji (1 code point): a volcano at dawn — the dream vacation
// is not a generic beach but a trek to watch the earth breathe fire, then
// breakfast above the clouds. Vivid at a glance, specific, and surprising.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters, and for this
// bounty exactly one emoji.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const emoji = "🌋";
const encoder = new TextEncoder();
const bytes = encoder.encode(emoji);
if (Array.from(emoji).length !== 1 || bytes.length === 0) {
  throw new Error("entry must be exactly one emoji");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, emoji, "utf8");

// Read back what was written and confirm it is exactly the entry.
if (readFileSync(`${outDir}/entry.txt`, "utf8") !== emoji) {
  throw new Error("read-back mismatch: entry.txt does not hold the entry");
}
