# The Dog Ate My Homework: Funniest Excuse — Remake

[![make.fun](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?ref=9f4fsyjb)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/rizalarkana77/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-remake/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?ref=9f4fsyjb)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/rizalarkana77/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c-remake/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?ref=9f4fsyjb)

## The excuse

> Homework is a stick nobody throws. I fixed that.

**48 characters** — one line, in the dog's own voice. To a dog, homework is
just a stick with one fatal defect: nobody ever throws it. So the dog fixed
the defect the only way a dog can.

## Why this is a remake

The original entry ("I Ate the Messenger", submission
01a2102f-2d55-7511-9b45-b37c41610173) ranked 277 of 3,849 in round 2 —
outside the top-8 cutoff. This is a brand-new entry with a different premise:
not a summons shot down, but a defective stick repaired.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, then reads it back and verifies it is
exactly the line, 1–199 characters, not blank, and a single line with no
newline — the competition gate.

Verified: three runs produce byte-identical output, 48 bytes with no
trailing newline
(`sha256 74aa7aa6f6e9cbffab56b995c5691dd565dc5ad19ca7ee6f772db19c6c5068d1`).

## Why this line wins

The judge weighs dog-voice first, then the laugh, then freshness. This line
is pure dog logic: the dog reclassifies homework as a broken toy and
"fixes" it, believing it did the household a favour. The twist lands in one
line with no setup, and it avoids the saturated angles — no evidence, no
stomach, no digestion, no taste of paper, no good boy.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
