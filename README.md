# YMCA Soccer Team Website Plan

This repository will be used to build and host a team website on **GitHub Pages**. The site will include team details and complete plans for the first six practices.

## 1) Platform decision (hosting)

We will host the website using **GitHub Pages** ("GitHub website").

### GitHub Pages setup checklist

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your default branch), folder `/root`
4. Save, then wait for deployment.
5. Use the published URL (for example: `https://<org-or-user>.github.io/<repo-name>/`).

> If you later use a static-site generator (Jekyll/Hugo/etc.), keep deployment on Pages and adjust build settings as needed.

---

## 2) Website style direction: anime-inspired

We will use a clean, anime-inspired design style that feels fun for players while still readable for parents and coaches.

### Visual style goals

- Bright, energetic color palette (sky blue, grass green, sunset orange, white)
- Manga/comic section headers with subtle outlines
- Rounded cards with soft shadows for drills and schedules
- Action accents (speed-line dividers, star bursts, diagonal separators)
- Friendly typography with high readability

### UI component style guide

- **Navigation bar:** bold title, high-contrast links, sticky top
- **Practice cards:** large practice number badge + objective + key skills
- **Buttons:** rounded-pill buttons with hover glow
- **Callout boxes:** “Coach Tip” and “Parent Recap” themed blocks
- **Print mode:** remove decorative graphics and keep text-first layout for field use

### Accessibility guardrails

- Maintain WCAG-friendly color contrast for body text
- Never rely on color alone to communicate meaning
- Keep minimum font sizes readable on phones
- Support reduced motion (limit animated effects)

---

## 3) How to use Soccer Practice Coach GPT for content

Use this GPT for each practice draft:
- https://chatgpt.com/g/g-69b8aa747d4c8191b0a3df88eeb19f5b-soccer-practice-coach

### Prompt input to provide each time

- Age group + skill level
- Expected player count
- Practice length
- Available equipment
- Main objective for that session

### Output format to request (copy/paste-ready for the website)

1. Warm-up (10 min)
2. Activity 1 (15 min)
3. Activity 2 (15 min)
4. Small-sided game (15 min)
5. Scrimmage + cooldown (10 min)
6. Coaching points + at-home challenge

---

## 4) Site structure (recommended pages)

- Home
- Team Info
- Schedule
- Practice Plans
  - Practice 1
  - Practice 2
  - Practice 3
  - Practice 4
  - Practice 5
  - Practice 6
- Contact

---

## 5) Build plan

### Phase A — Content planning

1. Create one template for all practice pages:
   - Objective
   - Time blocks
   - Drill setup
   - Coaching points
   - Variations (easier/harder)
   - Parent recap
2. Generate practices 1–6 with Soccer Practice Coach GPT.
3. Review and personalize for your team.

### Phase B — Website implementation

1. Build navigation and core pages.
2. Add a Practice Plans hub page.
3. Publish Practice 1–6 using the same template.
4. Apply anime-inspired design tokens (colors, cards, badges, callouts).
5. Add print-friendly formatting (for field use).

### Phase C — Publish + maintain

1. Deploy to GitHub Pages.
2. Share link with coaches/parents.
3. Weekly workflow:
   - Draft next practice with GPT
   - Review/edit
   - Publish update

---

## 6) First six practice roadmap

### Practice 1 — Ball familiarity and fun
- Objective: Introduce players, team expectations, and ball confidence.
- Key skills: Toe taps, dribble/stop, changing direction.
- Game ideas: Red light/green light, dribble gates.
- Coaching emphasis: Lots of touches, positive energy.

### Practice 2 — Dribbling control
- Objective: Improve close control while moving.
- Key skills: Inside/outside touches, turns, shielding intro.
- Game ideas: Sharks and minnows, cone slalom races.
- Coaching emphasis: Keep ball close, head up, speed changes.

### Practice 3 — Passing and receiving
- Objective: Teach accurate short passing and first touch.
- Key skills: Push pass, receiving with inside of foot.
- Game ideas: Partner gates, 3v1 keep-away.
- Coaching emphasis: Plant foot, pass weight, first touch to space.

### Practice 4 — Shooting fundamentals
- Objective: Improve confidence and mechanics in shooting.
- Key skills: Laces technique, body position, follow-through.
- Game ideas: Shooting lanes, 2v1 to goal.
- Coaching emphasis: Eyes on ball, locked ankle, aim corners.

### Practice 5 — Defending basics
- Objective: Introduce pressure, body shape, and timing.
- Key skills: Angle of approach, jockeying, poke tackle timing.
- Game ideas: 1v1 channels, transition defending game.
- Coaching emphasis: Patience, stay goal-side, controlled pressure.

### Practice 6 — Game application day
- Objective: Combine all core skills in match-like play.
- Key skills: Decision-making, spacing, communication.
- Game ideas: Conditioned 3v3/4v4, final scrimmage.
- Coaching emphasis: Teamwork, effort, smart choices.

---

## 7) Content checklist per practice page

- [ ] Generate draft from Soccer Practice Coach GPT
- [ ] Verify fit for field size and attendance
- [ ] Add one easier and one harder variation
- [ ] Add team-specific coaching notes
- [ ] Add parent recap summary
- [ ] Publish on site

---

## 8) Immediate next repo tasks

- Add `docs/practices/practice-01.md` through `practice-06.md`
- Add `docs/practices/template.md` for future sessions
- Add homepage + navigation files for GitHub Pages
- Add anime theme CSS (`assets/css/theme-anime.css`)
- Add print stylesheet for coaches
