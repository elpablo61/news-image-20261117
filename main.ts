// Entry point for the make.fun news-image-20261117 competition.
//
// Copies the pre-built entry image (entry.png, next to this file) to the
// output directory as entry.png. Node standard library only, no network access.
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const source = path.join(path.dirname(fileURLToPath(import.meta.url)), "entry.png");

// Output contract: exactly one file, entry.png, in MAKEFUN_OUTPUT_DIR.
// The copy is byte-for-byte; the entry image itself is never modified.
function main() {
  if (!fs.existsSync(source)) {
    console.error("missing bundled image: " + source);
    process.exit(1);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const dest = path.join(outDir, "entry.png");
  fs.copyFileSync(source, dest);
  console.log("wrote", dest, fs.statSync(dest).size, "bytes");
}

main();
