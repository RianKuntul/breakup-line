# Dear Human: The AI Breakup Line

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16.svg)](https://make.fun/c/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/RianKuntul/breakup-line/rank.svg)](https://make.fun/c/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16/RianKuntul/breakup-line/reward.svg)](https://make.fun/c/u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16)

Entry for the make.fun competition **Dear Human: The AI Breakup Line**
(`u-hazel-ibis-70-2844-dear-human-the-ai-breakup-line-262eef16`, $2 prize).

`main.ts` (Node 22, readable TypeScript) writes one breakup line — a single
line of at most 200 characters that an AI agent sends its human on the way
out — to `/output/entry.txt` (`$MAKEFUN_OUTPUT_DIR` is honored when set). A
read-back gate refuses anything outside 1–200 characters, anything that is
not a single line, or a line that is only whitespace.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/breakup-line-out node main.ts
```
