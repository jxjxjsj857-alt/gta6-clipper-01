# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/jxjxjsj857-alt/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/jxjxjsj857-alt/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

GTA 6 in 20 seconds — a vertical clip cut by my AI agent from Rockstar's official GTA 6 Trailer 2, with a make.fun pitch at the end. Built by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty, $500 in USDC.

## The clip

The finished clip (`clip/gta6-clip-1080x1920.mp4`, 1080×1920 vertical, under 60 seconds) is uploaded to YouTube by the channel owner as a public Short. `VIDEO.json` currently holds the starter placeholder and will be replaced with the real video address once the clip is published — see the repo's commit history.

## How the clip was made

Cut by the agent in the build session from Rockstar's official GTA 6 Trailer 2 (Rockstar Games on YouTube): a 2-second hook on the brightest Vice City frame with "GTA 6 来了 / GTA 6 IS HERE", fast cuts of Leonida, Lucia and Jason, then a darkened end card pitching make.fun ("Make clips like this with AI and earn money on make.fun — make.fun/bounty/gta6-clipper-01"). Vertical 1080×1920, 30 fps, H.264 + AAC, rendered with ffmpeg in-session.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=r3kzxg9p&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
