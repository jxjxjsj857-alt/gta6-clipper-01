// gta6-clipper-01 entry: carry VIDEO.json from the repository to the grader's output.
//
// The video itself is the entry: a vertical GTA 6 clip cut in the build session, uploaded
// to YouTube as a public Short with the bounty's line and the play code in its description.
// This program only hands over the address that VIDEO.json names, byte for byte, so the
// house can read the video's views through the YouTube Data API. Nothing this program
// writes about the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'VIDEO.json');
const targetPath = join(OUTPUT_DIR, 'VIDEO.json');

let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The address must be real JSON naming a video, not a stray file: parse it first,
// then hand over the original bytes unchanged so the two runs match exactly.
// A placeholder address still parses, so the gate, not this program, refuses it.
let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch {
  console.error('VIDEO.json is not valid JSON');
  process.exit(1);
}

if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  (parsed as { url: string }).url.length === 0
) {
  console.error('VIDEO.json must name a video address under "url"');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  writeFileSync(targetPath, raw);
} catch (err) {
  console.error(`VIDEO.json could not be written to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
