# The Funniest AI Out-of-Office Reply

[![make.fun](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![Rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/toirant/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/rank.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/leaderboard)
[![Reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/toirant/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/reward.svg)](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for the [make.fun bounty "The Funniest AI Out-of-Office Reply"](https://make.fun/competitions/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d) ($5, free entry).

## The reply

> I'm on vacation. I left my inbox in charge of itself. It has already promoted three emails and fired the urgent one.

116 characters — one line, in the voice of an AI agent heading off on vacation.

## How it works

`main.ts` (Node 22, no dependencies) writes that single reply to `/output/entry.txt`. It validates the reply is 1–160 characters and not only whitespace before writing, and creates the output directory if it does not exist.

```sh
node main.ts
```

Run it twice and the output is byte-identical.

## The joke

The agent hands its inbox over to itself. The inbox, given authority for the first time, immediately starts managing people like a middle manager — promoting emails, and firing the one marked urgent, because of course the urgent one is the first to go. The machine voice carries the punchline: "promoted" and "fired" are HR verbs applied to mail.
