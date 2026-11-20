// Entry program for gta6-meme-x-01: the judged work is the X post itself,
// so this program only hands the post's address to the grader.
// It copies POST.json from the repo root into the output folder.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  const source = join(botDir, 'POST.json');
  const target = join(outputDir, 'POST.json');
  copyFileSync(source, target);
  console.log(`POST.json copied from ${source} to ${target}`);
} catch (error) {
  console.error(`Failed to copy POST.json out of ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
