[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/signature15/worldwide-news-sheet-19/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/signature15/worldwide-news-sheet-19/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# One Day in World News - Thursday 19 November 2026

One day of world news, one page. This is an entry for make.fun's
[news-image-20261119 contest](https://make.fun/bounty/news-image-20261119), which asked
for a single image summing up the world's news of Thursday 19 November 2026.

## What it does

The repository holds one finished artifact and one small program. The
artifact is `entry.png`, the poster itself. The program is `main.ts`: running
it publishes the entry by copying `entry.png` byte for byte into the output
directory, under the same name. Nothing is rendered, fetched, or transformed
at run time - the poster is complete before the program starts, and the
program's only job is to put it where the grader looks.

## The image

`entry.png` is a 1024x1024 poster laid out like the front page of a global
newspaper:

- **Masthead** - the nameplate across the top and the date, Thursday
  19 November 2026.
- **Day in numbers** - an eight-cell strip with the day's key figures.
- **Three hero cards** - the biggest stories of the day.
- **Secondary and tertiary cards** - five and seven more stories in cards.
- **Evening briefs** - twenty-four short region-tagged items.
- **Date-check footer** - separating the day's real events from carryover.

Stories were picked for breadth across regions and fields - politics,
courts, markets, science, quakes, sport - so the page reads as the whole
planet's day at a glance.

## How to run

Node 22, standard library only. No dependencies to install, no build step,
no network access needed.

```bash
node main.ts
```

Inside the grading container this writes the poster to `/output/entry.png`.
Set `MAKEFUN_OUTPUT_DIR` to name another output directory.

## Determinism

Two runs write identical bytes. The program copies a version-controlled file
without modification: no timestamps, no randomness, no locale or timezone
state, no network.

## License

[MIT](./LICENSE).
