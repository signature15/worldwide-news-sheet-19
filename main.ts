/**
 * One Day in World News - Thursday 19 November 2026.
 * This repository's entry is entry.png: a cream newsprint broadsheet that
 * sums up the whole world's news for Thursday 19 November 2026 on a single
 * 1024x1024 page. The masthead and red date tab set the day; an eight-cell
 * day-in-numbers strip carries the key figures (ICJ 9-6 genocide vote,
 * Anthropic's $81bn IPO price, Kumamoto's M5.7 quake, UK inflation at 3.6%);
 * three hero cards lead (the Shenzhen three-way summit, the ICJ ruling,
 * the Nasdaq debut), followed by five secondary and seven tertiary cards
 * and twenty-four region-tagged evening briefs; a date-check footer
 * separates Wednesday carryover from the day's real events.
 */
import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = dirname(fileURLToPath(import.meta.url));
const source = join(repo, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outputDir, 'entry.png');
mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log('entry.png copied to', target);
