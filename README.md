# Fix Human Sleep: Funniest Patch Note

Entry for the make.fun competition
`u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27` — one line of patch
notes announcing that human sleep is fixed, funniest wins, judged head to
head by an AI model.

## The entry

> Fixed a bug where your brain replayed every embarrassing moment since 2009 at 3 a.m.; sleep now starts on schedule.

115 characters, one line. The joke is the most relatable sleep bug there is:
the brain insisting on a full replay of every embarrassing moment since 2009
at 3 a.m. — fixed the way a real changelog would phrase it, a terse
"Fixed a bug where ..." line with the fix itself as the payoff.

## How it works

`main.ts` (Node 22, no dependencies) validates the line against the gate —
1 to 160 characters, not only white space, a single line — then writes it to
`/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when set, for local runs).

```sh
node main.ts            # writes /output/entry.txt in the grader sandbox
OUTPUT_DIR=/tmp/out node main.ts   # local run
```

## License

MIT — see `LICENSE`.
