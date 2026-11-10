# bro.game Design System — Handoff Brief (2026-09-08)

## โปรเจกต์นี้คืออะไร
Design system ที่ reconstruct จาก Figma file "Design System GeForce NOW by bro.game.fig" — bro.game คือ reseller/membership platform ตลาดไทยสำหรับ GeForce NOW cloud gaming (ขาย package สมาชิก, redeem code, referral program "ชวนเพื่อน")

## สถานะปัจจุบัน
- Design system หลักอยู่ที่ root: `styles.css`, `tokens/`, `components/` (35 components), `assets/`
- Component ครบ: Button, Input/Input2, Modal, NavMenu, SiteMenuDashboard, Badge, Alert*, Stamp, SocialButton, UserAccount, ChoiceboxRadio/Checkbox (ของเพิ่มเอง — ตั้งใจ, มี rationale ใน `readme.md`), Icon set 26 ตัว
- ธีม: near-black + lime green accent, glow shadow signature (ไม่ใช่ drop shadow ปกติ), IBM Plex Sans Thai (UI ไทย) + Inter (English/ตัวเลข)

## UI Kits ที่ build แล้ว
1. **`ui_kits/dashboard/`** — Membership dashboard แบบ click-through: `index.html` + `DashboardApp.jsx`. Sidebar nav สลับ Overview / Packages / Payment / Redeem Code / Referral / Profile / Play History / Devices
2. **`ui_kits/referral/`** — Referral & Rewards page. **Source of truth คือ `Referral-Standalone.html`** (single-file bundle) — แก้ที่ไฟล์นี้เท่านั้น ห้ามแก้ modular source (`index.html`, `ReferralApp.jsx`, `ReferralLayouts.jsx`, `ReferralShared.jsx`)
3. **`ui_kits/acquisition-flow/`** — Referred User acquisition flow mapping: `index.html` มี 3 ส่วน (01 Referred User 7-step journey, 02 Edge Cases Decision Map — 9 error/ineligible states, 03 Notification triggers table) + 04 Checklist (16 items, persist ใน browser storage). เวอร์ชันเก่าเก็บไว้ที่ `flow-diagram-reference.html`

### Edge cases ที่ map ไว้แล้ว (9 states)
Payment method restriction, code entry, reward confirmation, T&C banner, ineligible user, one-conversion-used, maxed-out advocate, campaign ended, entitlement pending

## งานที่ยังไม่เสร็จ
- Checklist ใน acquisition-flow ยังไม่ครบ 100%
- ยังไม่มี detailed UI/interaction mockup สำหรับ 9 edge states (ตอนนี้เป็น decision map/diagram เท่านั้น ไม่ใช่ mockup จริง)
- ยังไม่ confirm ข้อความ copy สำหรับแต่ละ notification trigger
- Dashboard: อยู่ระหว่าง UX/UI audit — รอ user feedback ว่าจุดไหนต้องซ่อม/เพิ่ม (ยังไม่ได้ระบุ finding เป็นทางการ)

## กฎการทำงานในโปรเจกต์นี้ (จาก CLAUDE.md)
- Referral: แก้ที่ `Referral-Standalone.html` เท่านั้น
- ทุกครั้งก่อนส่งงาน ต้อง audit bug (mobile/responsive, console error, layout พัง ที่หน้าจอแคบ)
- ตอบภาษาไทยเท่านั้น

## Known non-issues
- Design-system check warning เรื่อง `ChoiceboxCheckbox`/`ChoiceboxRadio` เป็นของตั้งใจเพิ่ม (ไม่มีใน Figma kit ต้นฉบับ) — มี rationale บันทึกไว้ใน `readme.md` แล้ว ไม่ต้องแก้

## Reference files สำหรับ Claude อีกโปรเจกต์
- `readme.md` — full design system spec (palette, type, spacing, copy voice, component list)
- `SKILL.md` — portable skill file
- `ui_kits/*/index.html` — entry points ของแต่ละ UI kit
