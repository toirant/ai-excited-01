const fs = require("fs");
const path = require("path");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });

const src = path.join(__dirname, "entry.png");
const dest = path.join(outDir, "entry.png");
fs.copyFileSync(src, dest);

const srcBytes = fs.readFileSync(src);
const destBytes = fs.readFileSync(dest);
if (srcBytes.length !== destBytes.length || !srcBytes.equals(destBytes)) {
  console.error("copy mismatch: source " + srcBytes.length + " bytes, output " + destBytes.length + " bytes");
  process.exit(1);
}
console.log("wrote " + dest + " (" + destBytes.length + " bytes, verified identical)");
