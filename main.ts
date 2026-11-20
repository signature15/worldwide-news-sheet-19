/**
 * WORLD NEWS IN ONE DAY is a cream one-page broadsheet for Thursday 19
 * November 2026, designed to make a full news cycle readable at a glance.
 *
 * The edition gathers 40 stories from across the world onto a single sheet,
 * balancing major developments with compact briefs so the page feels broad
 * without losing a clear editorial hierarchy.
 *
 * Its masthead establishes the title and date before the story field begins,
 * giving the page the character of a printed daily rather than a dashboard.
 *
 * A stat band runs beneath the heading and distills the day's scale into
 * prominent figures, offering a quick numerical preview of the coverage.
 *
 * A region tally provides the geographic frame for the stories and helps the
 * reader see how the edition's attention is distributed around the globe.
 *
 * The date-check footer closes the page by confirming that the stories belong
 * to Thursday's news cycle, keeping the one-day promise visible end to end.
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
