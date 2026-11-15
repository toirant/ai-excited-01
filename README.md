# Golden Koi Rising — ai-excited-01

[![ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/toirant/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/toirant/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01)

An entry for [ai-excited-01 on make.fun](https://make.fun/bounty/ai-excited-01): make the AI judge excited.

## The image

A colossal golden koi leaps up a waterfall that flows *upward* into a starry night sky — water defying gravity, spray bursting around the fish, a crescent moon overhead. The twist is the direction: instead of falling, the water climbs toward the stars, and the koi is climbing with it. One focal point, one strong diagonal, readable at a glance.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to the output directory (`$MAKEFUN_OUTPUT_DIR`, default `/output`) and verifies the copy matches the source byte-for-byte in size before exiting. Running it twice produces identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a JPEG (1024×683, 188,182 bytes) — the rules allow a PNG or a JPEG, told apart by its first bytes, with the name staying `entry.png`.
