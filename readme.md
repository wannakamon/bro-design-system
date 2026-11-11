# bro.game — GeForce NOW Referral & Membership Design System

## What this is

A design system reconstructed from the attached Figma file **"Design System GeForce NOW by bro.game.fig"**. bro.game is a Thai-market reseller/membership platform for GeForce NOW cloud gaming — it sells subscription packages, lets members redeem codes and top up playtime, and runs a referral (ชวนเพื่อน) program where members invite friends for rewards ("stamps"). The product is bilingual (Thai-first UI copy, English marketing site) and skins itself as "GeForce NOW by bro."

Two product surfaces are represented in the source file:

- **Membership Dashboard** (`www.bro.game`) — the logged-in member area: overview, packages, payment, redeem code, referral, profile, play history, devices. Dark theme, Thai UI copy, IBM Plex Sans Thai.
- **Marketing site** (`www.bro.game` public pages, captured via html.to.design/Framer exports) — public-facing pages, black background, Inter type, English copy.
- **Mobile app screens** (Referral page) — baked-bitmap reference mockups for the mobile referral/rewards flow (430×932 iPhone frames). These are reference images only, not editable components.

## Sources

- Figma file: **Design System GeForce NOW by bro.game.fig** (attached, mounted read-only). Pages: Cover, Dashboard (30 frames), Referral (45 frames), Claude-Code, Foundations, Color, Typography, Spacing, Radius, Shadows, Icons, Components, Button, Input, Checkbox, Radio, Select, Card, Nav, Patterns, Form-patterns, Page-layouts, Changelog.
- No GitHub repo or codebase was attached — everything here is derived from the Figma file.

## Intentional additions / omissions

- **No logo file exists as a vector mark** — the real product logo is a *bitmap* ("Geforce now by bro logo - White/New/Black 1"), copied verbatim into `assets/` (see Iconography section). No SVG/vector logo was invented.
- **Icon wrapper (`Icon.jsx`)** — added so the \~55 glyphs materialize as one data-driven component instead of 55 files. Not a source component, but a thin renderer over the source's exact SVG paths.
- **12 unnamed "Component 1/2/3" variant sets** (of the 23 component sets Figma's metadata counts) were **not** built as standalone primitives — Figma auto-named them (no designer-given name), and they turned out to be internal icon/hover-state wrappers consumed only inside the imported Framer marketing-site sections, not reusable product components. Building them as top-level primitives would invent an API the source doesn't define.
- Two of the \~56 icon glyphs listed in METADATA were unnamed duplicates of already-materialized icons; not double-counted.
- **`ChoiceboxCheckbox` / `ChoiceboxRadio`** — hand-authored, not sourced from the Figma kit (no Checkbox/Radio family exists there). Added to cover bro.game's payment/package selection UI ("Choicebox" pattern: single-select package cards, multi-select coupon/terms checks). Confirmed intentional.

## Content fundamentals

- **Language:** Thai-first for the membership dashboard and referral flows (เมนูหลัก, ตั้งค่า, ภาพรวม); English for the marketing site and some code-mixed labels ("Referral Campaign (ชวนเพื่อน)"). When writing new UI copy for this product, default to Thai for logged-in product surfaces.
- **Address:** informal "you," never a distant third person — personal greetings by first name: *"สวัสดี Peter"*, *"สวัสดี John Doe"*. Confirmation/empty states speak directly to the member: *"คุณได้ส่งคำขอเปลี่ยนรหัสผ่าน"* (you've requested a password change), *"คุณได้ขอเปลี่ยนอีเมลเป็น"* (you asked to change your email to…).
- **CTAs are imperative and energetic, always verb-first:** *"สมัครเลย"* (sign up now), *"เริ่มเลย"* (start now), *"เริ่มเล่น GeForce NOW"* (start playing GeForce NOW), *"รับสิทธิ์"* (claim it), *"สแกนจ่ายเลย"* (scan to pay now). The "-เลย" suffix (roughly "right now / go ahead") recurs constantly — it's the brand's signature urgency marker.
- **Warmth over formality:** onboarding copy reads like a friend, not a legal notice — *"ยินดีต้อนรับสู่การเป็นสมาชิก bro.game"* (welcome to being a bro.game member), *"อีกนิดเดียวก็ได้เล่นเกมแล้ว"* (just a little more and you're playing already).
- **Plain-spoken warnings, not legalese:** *"ถ้าจะเปลี่ยนแพ็กเกจ อย่ากดยกเลิก"* (if you want to change your plan, don't hit cancel) — advises the user directly instead of a generic disclaimer.
- **Urgency uses countdowns and hard deadlines, not vague scarcity:** *"กรุณาทำรายการภายใน 00:10:00:00"*, *"ลิงก์นี้จะหมดอายุภายใน 24 ชั่วโมง"* (this link expires within 24 hours).
- **No emoji anywhere** in the sampled copy — energy comes from word choice ("-เลย", exclamation-adjacent verbs) and color/glow, not emoji or excessive punctuation.
- **Numbers stay concrete:** *"คงเหลือ 100 จาก 105 ชั่วโมง"* (100 of 105 hours remaining) — always show the real count, not "almost out."

## Visual foundations

- **Palette:** near-black base (`--grey-900-base-bg` `rgb(10,10,10)`, dashboard shell `rgb(18,19,22)`) with a single loud accent — lime/chartreuse green (`--lime-green-600-brand-green` `rgb(118,186,0)`, hover `rgb(148,227,30)`, glow `rgb(177,245,122)`, brightest highlight `rgb(163,255,71)`). Secondary semantic colors are conventional (blue info, red danger, yellow warning, green success) but the brand color is the only one used decoratively. Max one background color per surface — pure black/near-black; no gradients as backgrounds.
- **Signature shadow language — glow, not drop-shadow:** buttons and reward moments use **inset glow on default state** (`inset 3px 3px 10px rgba(179,247,96,0.73)`) and **outer soft glow on hover** (`0 0 25px 10px rgba(177,245,122,0.33)`) — a neon-halo effect in the brand green, not a conventional elevation shadow. Regular UI shadows elsewhere are ordinary soft black (`rgba(0,0,0,0.07–0.1)`), reserved for menus/cards.
- **Type:** IBM Plex Sans Thai is the workhorse UI face (weights 400–700, sizes 12–22px commonly, up to 44px display) for anything Thai. Inter is used for English marketing/dashboard chrome and numerals. Loma appears occasionally as a Thai display alternate. No serif anywhere.
- **Radius:** small and consistent — `xs 4 / sm 6 / md 8 / lg 12 / xl 16 / 2xl 24 / 3xl 32`, plus `full 9999` for pills and the circular reward stamp. Buttons sit at `6px`, cards/modals trend `12–24px`.
- **Spacing:** an 4-based scale but NOT snapped to a clean grid — real values include `sp-10`, `sp-28`, `sp-36`, `sp-44`, `sp-52` alongside the round numbers; copy the exact figure per component rather than rounding to 8px.
- **Borders:** hairline, low-contrast — `1px solid rgb(44,48,58)` on dark surfaces, `0.5px solid rgb(181,181,181)` on light auth cards. Borders define structure quietly; the glow does the emphasis work.
- **Backgrounds/imagery:** full-bleed photographic gaming/lifestyle imagery (see `assets/imagery/`), not illustration — no hand-drawn illustration or repeating pattern/texture was found anywhere in the file. Marketing hero sections sit on pure black.
- **Hover/press states:** hover brightens the fill (`rgb(118,186,0)` → `rgb(148,227,30)`) and adds the outer glow; press/loading states darken back toward the inset-glow default. No scale/shrink transforms observed in the static frames — treat hover as a color+glow swap, not a transform.
- **Transparency/blur:** used sparingly for disabled/scrim surfaces (`rgba(43,43,43,0.55)` disabled bg) and glow shadows themselves (all the signature shadows carry alpha); no backdrop-blur/glassmorphism panels in the source.
- **Cards:** dark surface fill, hairline border, 12–24px radius, no colored left-border accent (avoid that motif — it doesn't appear here).
- **Iconography vibe:** thin-stroke line icons (\~1.5–2px), 16/20/24px sizes (`--icon-sm/md/lg`), monochrome via `currentColor` — Lucide-style, plus a handful of custom brand glyphs (ai-game, block-game, gameboy controller) for gaming-specific concepts. See Iconography below.
- **Animation:** the file is static (no prototype/transition data materialized); treat state changes as instant color/glow swaps unless the user asks for motion — don't invent easing curves not evidenced in the source.

## Iconography

- Source: a Figma icon set of \~55 glyphs (`icon/…`, `alert/…`, `icon24/…` families) — Lucide-style outline icons plus a few bespoke gaming glyphs (ai-game, block-game, gameboy, GameController, ClockCounterClockwise, ShieldCheck, UsersFour, Wallet — mixed casing in the source, kept verbatim as names).
- All materialized verbatim as **real vector path data**, not redrawn — see `assets/icons/icon-data.js` + `assets/icons/Icon.jsx`. Render with `<Icon name="user-circle" size={20} />`; the name index is `assets/icons/Icon.d.ts`.
- Single-color icons paint via `currentColor` — recolor with CSS `color`, don't hardcode fills.
- No icon font, no PNG icon set, no emoji-as-icon usage found. Social brand icons (Facebook, Discord, Line, Twitter/X) are also in the same SVG set, not brand PNG marks.

## Components built (35)

Buttons, alerts, badges, inputs (main 10-state Input + Input2, the referral link-copy field with Copied confirmation state), modal, nav menu, site sidebar nav, social share buttons, stamp (referral reward), user account chip, and the full icon set — see the Components section below and each `.d.ts` for props.

## Index

- `styles.css` — root stylesheet, imports fonts + tokens + typography + component asset CSS.
- `tokens/` — `fonts.css` (Google Fonts import), `base.css` (resets + font stack aliases).
- `components/` — `fig-tokens.css` (426 CSS variables), `fig-typography.css`, `fig-assets.css`, and 34 `<Name>.jsx`/`.d.ts` component pairs.
- `assets/` — `logo-white.png`, `logo-black.png`, `logo-white-alt.png` (real bitmap wordmarks), `bro-mark-white.png` (the "b" brandmark used in the Stamp reward), `icons/` (icon-data.js + Icon.jsx), `imagery/` (2 lifestyle photos), `reference/` (2 baked mobile-screen mockups for context — not editable).
- `ui_kits/referral/` — interactive referral & rewards screen (`index.html` + `App.jsx`): copy-link with Copied confirmation, LINE/Facebook share buttons with toast feedback, Stamp milestone row, stamp history table, reward-unlock progress. Built from the attached Referral PRD + flow diagram + UI mockup.
- `ui_kits/dashboard/` — click-through membership dashboard: `index.html` + `App.jsx`. Sidebar nav (SiteMenuDashboard/NavMenu) switches between Overview, Packages, Payment, Redeem Code, Referral (ชวนเพื่อน — the reward/share panel with Stamp components), Profile, Play History, Devices.
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius, shadow).
- `SKILL.md` — portable skill file for Claude Code.

## Components

AlertBanner, AlertAlert02, AlertCheckmarkCircle02, AlertInformationCircle, AlertOctagonAlert, Badge, Button, ChoiceboxCheckbox, ChoiceboxRadio (intentional additions — not in the Figma kit; built for bro.game's payment/package "Choicebox" selection pattern, see Intentional additions above), Icon (+ 26 individual icon components: Icon24ShoppingCart, IconAiGame, IconBlockGame, IconCheck, IconChevronDown, IconChevronLeft, IconChevronRight, IconDot, IconEye, IconEyeOff, IconGift, IconHistory, IconLoaderCircle, IconMonitorSmartphone, IconSecurityCheck, IconUserCircle, IconUsersFour, IconWallet01, IconX), Input, Modal, NavMenu, SiteMenuDashboard, SocialButton, Stamp, UserAccount, Input2 (referral link-copy field, Default/Copied states).


## Component index

Every built component (exported on the bundle namespace):

- `Alert`
- `AlertAlert02`
- `AlertBanner`
- `AlertCheckmarkCircle02`
- `AlertInformationCircle`
- `AlertOctagonAlert`
- `AntDesign`
- `Badge`
- `BadgeCount`
- `Button`
- `Button2`
- `ButtonGroup`
- `CardHeadLegacy`
- `CardLegacy`
- `CaretDown`
- `CaretUp2`
- `Check`
- `CheckboxInput`
- `ChoiceboxCheckbox`
- `ChoiceboxRadio`
- `ClockCircle`
- `Close`
- `Component13`
- `Component14`
- `Component15`
- `Component16`
- `Component23`
- `Component24`
- `Component25`
- `Component26`
- `Component3`
- `Component32`
- `ComponentTimelineItemHead`
- `ComponentsDropdownMenuItem`
- `ComponentsInputAffix`
- `ComponentsTab`
- `ComponentsTabLegacy`
- `ComponentsTableCellHeader`
- `ComponentsTabsTop`
- `Cursor`
- `Divider`
- `DropdownMenu`
- `Edit`
- `Filter`
- `Hrs15`
- `Hrs30`
- `Icon24ShoppingCart`
- `IconAiGame`
- `IconBlockGame`
- `IconCheck`
- `IconChevronDown`
- `IconChevronLeft`
- `IconChevronRight`
- `IconDot`
- `IconEye`
- `IconEyeOff`
- `IconGift`
- `IconHistory`
- `IconLoaderCircle`
- `IconMonitorSmartphone`
- `IconSecurityCheck`
- `IconUserCircle`
- `IconUsersFour`
- `IconWallet01`
- `IconWrapper`
- `IconX`
- `Image`
- `InfoCircle`
- `Input`
- `Input2`
- `Input3`
- `InputAddonCursor`
- `InputAddonIcon`
- `InputAddonLabel`
- `Internet`
- `LayoutBlocksBase`
- `LayoutBlocksHorizontal3`
- `LayoutBlocksVertical41`
- `Locale`
- `LocaleChange`
- `MenuDashboardMobile`
- `MenuIconMore`
- `Modal`
- `Modal2`
- `NavMenu`
- `ProgressBarType4Show`
- `Right`
- `Scrollbar`
- `Select`
- `SelectionItem`
- `Setting`
- `SiteMenuDashboard`
- `SocialButton`
- `Sorter`
- `Stamp`
- `StampCard`
- `StampCard3`
- `StampStamped`
- `Stampt`
- `Steam`
- `TabsTopLegacy`
- `Tag`
- `TextText`
- `Textarea`
- `Timeline`
- `TimelineItemAlternate`
- `TimelineItemLeft`
- `TimelineItemRight`
- `User`
- `UserAccount`
- `VerticalFormItemTextarea`
- `Xbox`

### Suffix-numbered components (intentional)

The Figma kit contains several separate component sets that share the auto-generated names "Component 1", "Component 2", "Component 3", "Stamp card", "modal" and "Input". Each set was built as its own component with a numeric suffix so the names stay unique: `Component13`, `Component14`, `Component15`, `Component16` (Component 1 sets), `Component23`, `Component24`, `Component25`, `Component26` (Component 2 sets), `Component3`, `Component32` (Component 3 sets), `StampCard3`, `Modal2`, `Input3`. Helper parts extracted alongside them (`InputAddonLabel`, `InputAddonIcon`, `StampStamped`, `TimelineItemLeft`, `TimelineItemRight`, `LayoutBlocks*`) are sub-components of kit families. `ChoiceboxCheckbox` / `ChoiceboxRadio` are intentional hand-authored additions.
