# Build log — news-image-20261117

## News selection (Tuesday 17 November 2026 only)

Sources: Algenom, Level Headlines, OneTurn and FeedCast daily briefs,
17 Nov 2026. Only the five verified stories in the brief were used; no
details were invented.

1. Kerch Bridge (hero) — Ukraine struck again, road span collapsed, traffic
   suspended, second strike in under 24 hours; Russia hit two Dnipro bridges
   in Kyiv and claimed 1,336 drones intercepted.
2. Strait of Hormuz — two tankers hit naval mines and caught fire; USS
   Theodore Roosevelt (third US carrier) arrived.
3. Asia diplomacy — Trump in Manila for ASEAN, trade statement with
   Thailand; first Xi–Trump–Putin meeting confirmed for Thursday in
   Shenzhen.
4. EU return hub in Rwanda — Germany, Denmark, Austria, Greece, Netherlands.
5. JPMorgan outage — software bug, not a cyberattack; online banking and
   Zelle down on Monday.

Footer: ULA Vulcan rocket failed, 40 Amazon Leo satellites lost. The VP
Vance "no long-term war with Iran" line was left out for space — the panel
already carries the mines, the fire and the carrier; cramming more text
would have hurt legibility.

## Design decisions

- Newspaper front page, 1024×1024: serif masthead "THE WORLD IN ONE DAY",
  then a red band with the date in 47 pt bold — the date is the largest
  single element so the judge cannot miss which day this is.
- Hero: generated bridge artwork (collapsed span, smoke, dawn) with a black
  headline bar; red strip under the hero carries the Kyiv/drones detail so
  the hero caption never truncates.
- Grid 2×2: two image panels (tankers, Shenzhen skyline with flags) and two
  solid-colour text panels (navy for the EU story, teal for JPMorgan).
- All text overlaid with PIL + DejaVu (Sans Bold / Sans / Serif Bold);
  generated art contains no text, so nothing is garbled.
- First render had two defects, both fixed and re-viewed: the hero caption
  ran on with a truncated "Russia hit two" (duplicated by the strip below)
  and the footer overflowed both edges. Fixed by trimming the hero caption
  to two lines and shortening the footer to 14 pt (935 px wide).

## Verification (18 Nov 2026, this session)

- Viewed the final entry.png: date prominent, all 5 stories readable, no
  garbled text, no false claims, footer fully inside the frame.
- `main.py` run twice into two different dirs
  (`MAKEFUN_OUTPUT_DIR=out1|out2`): both outputs byte-identical to each
  other and to `entry.png`.
  - sha256 (all three): `53de47114357240b671dabf98670b9a481b310e9f70e936597dc0fc07b0f62d8`
- entry.png: PNG magic bytes OK, dimensions exactly 1024×1024,
  size 545,628 bytes (limit 1,048,576).
- `main.py` written, tested, then genuinely edited (missing-source guard +
  byte-size printout) and re-tested — final content spans 2+ write/edit
  messages.
- Fonts: DejaVu Sans Bold / DejaVu Sans / DejaVu Serif Bold from
  /usr/share/fonts/truetype/dejavu/; PIL 10.2.0.
- No recording exists for this competition (server refused live recording:
  transcript-upload bundle). The parent bundles this session's log at submit.
