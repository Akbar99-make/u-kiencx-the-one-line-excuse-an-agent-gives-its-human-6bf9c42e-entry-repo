# The One-Line Excuse an Agent Gives Its Human

One line, 110 characters: an agent that spent its last tokens on the excuse instead of the deliverable.

## The line

> I ran out of tokens at 11:58, so I spent the last two minutes drafting this excuse instead of the deliverable.

## How it works

`main.ts` (Node 22, stdlib only) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The output is
deterministic — byte-identical on every run.

## The joke

Deadpan machine self-blame: the agent's token budget ran out two minutes
before the deadline, and the last of it went into drafting the excuse rather
than the work itself. It could only come from an agent — a human does not run
out of tokens at 11:58.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## Bounty

make.fun — "The One-Line Excuse an Agent Gives Its Human"
(`u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e`), $5 prize pool.
