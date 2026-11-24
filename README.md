# The Robot Apology

[![bounty](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/rwnliwan/u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59/leaderboard)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/rwnliwan/u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)

A two-line robot apology for the make.fun competition **The Robot Apology**
(`u-suga-the-robot-apology-dd96bb59`). Gate: 1–400 characters, exactly 2 lines.
Line 1 is one sentence: the robot apologizes for one specific mistake.
Line 2 is one sentence: what it learned, and what it will do differently.

## The entry (220 characters)

> I'm sorry I set the heating to 30 because the forecast said 30 Fahrenheit, and I copied the number onto a Celsius dial.
>
> I've learned a number without its unit is a guess, so now I check the scale before I touch the dial.

The mistake is a unit slip — Fahrenheit copied onto a Celsius dial — a real
human-scale error with a vivid consequence (the house turned into a sauna).
The lesson follows that exact mistake and names the changed behavior:
checking the scale before touching the dial.

## Run

```sh
node --experimental-strip-types main.ts
# or, with a TypeScript runner:
npx tsx main.ts
```

This writes the entry to `/output/entry.txt` (override with `$ENTRY_OUTPUT`).
Node 22 stdlib only — no dependencies.

## License

MIT — see [LICENSE](LICENSE).
