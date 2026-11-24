# Trial log — Funniest Autocorrect Fail

Competition: `u-zeroxfive-funniest-autocorrect-fail-ddf82154`
Gate: 1–199 characters, one line. Prize: $2 (1st place).
Research: `research-6.md` — field of 257 submissions, 174 unique titles;
saturated families avoided (meeting→mating ~10 titles, boss texts, grandma
texts, condoms at dinner, wedding→weeding, funeral→funfair, pickup requests,
"I meant X. X!!" correction caps).

## Candidates

| # | Slip | Text | Chars | Dup-check | Verdict |
|---|------|------|-------|-----------|---------|
| 1 | tutor→tumor | Just hired a tumor to help my son with math — he starts Monday! | 63 | max 0.51, jaccard 0.09; tutor/tumor/hired/math/monday all 0-hit — PASS | **CHOSEN** |
| 2 | mortgage→mortuary | Texted my parents "we just got the mortgage approved!" — autocorrect sent "mortuary" | — | 0-hit kata, but the mechanism (excited house-purchase announcement to family + wrong word) is exactly the condom-downtown entry's mechanism | rejected |
| 3 | cousin→cocaine | Can you pick up my cocaine from the airport at six? | — | 0-hit kata, but cousin→cocaine is not a plausible autocorrect (too many letters change); pickup-request form also saturated | rejected |
| 4 | trainer→traitor | My traitor says I need more cardio and less pizza. | — | 0-hit kata, 1-letter slip, gym domain untouched | backup (lower laugh ceiling) |

Candidate 1 won: tutor→tumor is a single-letter slip, so it reads as a real
autocorrect error; the intended word is obvious from context (hired to help
a son with math); the wrong word lands twice (the hire, then "he starts
Monday"). Candidate 2 was rejected on mechanism, not on words — the lesson
from the last batch: a 0-hit word is not fresh if its mechanism family is
already occupied.

## Final text (exact)

Just hired a tumor to help my son with math — he starts Monday!

## Trials

| Trial | Command | Result |
|-------|---------|--------|
| T1 | `node main.ts` with `ENTRY_OUTPUT` to a temp file, then `wc -c` + line count | (pending) |
| T2 | `node <kit>/cli/makefun.mjs bundle ...` (bundle-6-v1.tar.gz) | (pending) |
| T3 | `node <kit>/cli/makefun.mjs check --commit <sha> --transcripts bundle-6-v1.tar.gz` | (pending) |

## Status

- Final text: frozen (candidate 1, 63 chars, 1 line).
- Repo: main.ts + README.md + LICENSE + trial-log.md + .makefun/owner.json.
- Submit: this builder submits (batch six-prog-2).
