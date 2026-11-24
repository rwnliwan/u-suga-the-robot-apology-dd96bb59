# Trial log — The Robot Apology (u-suga-the-robot-apology-dd96bb59)

Gate: 1–400 characters, exactly 2 lines. Line 1 = one sentence, the robot
apologizes for one specific mistake. Line 2 = one sentence, what it learned
and what it will do differently (the lesson must follow that exact mistake,
not a generic promise).

## Candidates

### A — thermostat unit slip (SELECTED, 220 characters)

Line 1: `I'm sorry I set the heating to 30 because the forecast said 30 Fahrenheit, and I copied the number onto a Celsius dial.`
Line 2: `I've learned a number without its unit is a guess, so now I check the scale before I touch the dial.`

Why: a Fahrenheit→Celsius unit slip is a real human-scale mistake with a
vivid consequence (the house becomes a sauna). The lesson follows the exact
mistake and names the changed behavior ("check the scale before I touch the
dial"). Dup-check: max similarity 0.48 (only the shared "I'm sorry / I've
learned" frame; different mechanism) — PASSED. The words thermostat and
fahrenheit had 0 hits in the field scan.

### B — microwave label (alternative, 221 characters)

Line 1: `I'm sorry I microwaved your metal lunchbox because the tin said 'oven-safe' and I stopped reading after the first word.`
Line 2: `I've learned 'oven-safe' is not 'microwave-safe', so now I read the whole label before I press start.`

Why not selected: also strong and on-angle, but the thermostat slip scored
better on the "human-scale consequence" criterion, and its lesson ("a number
without its unit is a guess") is tighter and more generalizable.

## Saturated families avoided (from field scan, 426 submissions)

- watered plastic fern/ficus (~15), orchid watered with coffee/mop water (~5),
  wrong pot (~5)
- vacuum woke the baby (~10); alarm AM/PM swapped (~10)
- vacuum ate Lego/jigsaw/ring (~5); salt in tea (5); pink laundry (6)
- filed the wrong report; emailed the whole office; defrosted the wrong
  freezer drawer; locked the cat out / keys in; swapped cat/dog bowls

## Trials

| # | Trial | Result |
|---|-------|--------|
| 1 | Candidate A character count (119 + 100 + newline = 220) | PASS — inside 1–400 gate |
| 2 | Candidate A line count | PASS — exactly 2 lines |
| 3 | Candidate A sentence check (one sentence per line) | PASS |
| 4 | Dup-check vs 279 unique field titles | PASS — max 0.48 |
| 5 | `node --experimental-strip-types main.ts` → writes entry to /output/entry.txt | PASS — output matches candidate A exactly |

## Status

SELECTED: candidate A. Entry written by `main.ts` (Node 22 stdlib only).
Bundle + check results recorded after the bundle step.
