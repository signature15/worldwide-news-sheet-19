/**
 * entry.png is a cream newsprint broadsheet that compresses the world's news
 * for a single date - Thursday 19 November 2026 - onto one 1024x1024 page.
 *
 * The top of the sheet is dominated by a masthead carrying the paper's
 * nameplate, with a red date tab marking the edition day. Just below it, a
 * day-in-numbers strip presents the figures that defined the news cycle:
 * the ICJ's 9-6 vote on Myanmar's genocide finding, Anthropic pricing its
 * IPO at $81bn, the M5.7 earthquake that hit Kumamoto, and the UK's 3.6%
 * inflation reading.
 *
 * From there the page steps down through three tiers of story cards. Three
 * hero cards lead the paper with the Shenzhen three-way summit, the ICJ's
 * Myanmar ruling, and Anthropic's Nasdaq debut. Beneath them run five
 * secondary cards and then seven tertiary cards, each carrying a further
 * story from around the globe.
 *
 * The lower portion of the sheet holds twenty-four evening briefs, each
 * tagged with its region, giving quick-hit coverage across every continent.
 * A date-check footer closes the page, drawing the line between Wednesday's
 * carryover items and events that genuinely belong to this day.
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
