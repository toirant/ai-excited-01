// ai-excited-01: "Golden Koi Rising".
// Copies the entry image to the output directory. The judge sees exactly
// the bytes in /output/entry.png, so the copy must be byte-identical and
// deterministic: same input, same output, every run.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const source = new URL("./entry.png", import.meta.url);
const target = join(outDir, "entry.png");
copyFileSync(source, target);
// Self-check: a partial copy would break the byte-identical-runs rule,
// so refuse to exit cleanly unless the copy matches the source size.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  throw new Error(`entry.png copy mismatch: ${targetBytes} of ${sourceBytes} bytes`);
}
console.log(`entry.png written to ${target} (${targetBytes} bytes)`);
