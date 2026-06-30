# The Cage Padel Tribe — Homepage Redesign (Cinematic Dark)

**Date:** 2026-06-25
**Status:** Approved for planning
**Scope:** Homepage first. Other pages follow after approval.

## Goal

Transform the homepage into a high-converting, cinematic, premium experience for
Singapore's premier padel venue. Primary conversion action: **book a court**
(Playtomic, embedded on-site). Secondary: merchandise interest, community/lead capture.

## Design System

### Palette
| Token | Hex | Use |
|-------|-----|-----|
| Base black | `#0A0A0B` | Page background |
| Surface | `#141417` | Cards, panels |
| Signature red | `#E11D2A` | All CTAs, energy, active states |
| Red glow | `#FF4655` | Hover, focus glow |
| Text | `#F5F5F4` | Primary text |
| Muted | `#8A8A8F` | Secondary text, labels |
| Gold (optional) | `#D4AF37` | Fine detail lines, accents |

### Typography
- **Display:** Syne (700/800) — headlines, section titles.
- **Body + mono:** Space Grotesk — paragraphs, stats, coordinates, court labels.
- **Alternate (A/B later):** Fraunces — kept as a comparison option, not shipped initially.

### Motion
- Cinematic and restrained. No bounce.
- One orchestrated load reveal (staggered fade-up).
- Parallax on hero video, scroll-triggered section reveals.
- Magnetic red buttons with subtle glow on hover.
- Respect `prefers-reduced-motion` (disable parallax/auto-motion).

## Homepage Section Flow

1. **Hero** — full-screen autoplay background video (muted, loop, playsinline, poster).
   Headline "PLAY FEARLESS", subline, single red **Book Your Court** CTA, scroll hint,
   mono coordinates detail. Dark gradient overlay for legibility.
2. **Intro strip** — one bold establishing line + 3 mono stats (4 courts · 500+ players · Dempsey).
3. **The Courts** — dark cards, video-on-hover per court, name/surface, red Book overlay → Playtomic modal.
4. **Experience** — alternating image/text blocks (community, coaching, social nights). Image-driven.
5. **Membership / Pricing** — 3 dark tiers, middle red-accented, urgency badge on peak slots.
6. **Testimonials** — real member quotes over subtle dark texture.
7. **Shop teaser** — 3 featured products, dark cards.
8. **Lead capture** — WhatsApp community CTA + email "first session" offer.
9. **Final CTA** — full-bleed video/image + large Book Your Court.
10. **Footer** — contact, hours, map, socials.

**Persistent elements:**
- Sticky Book button — floating red pill (mobile), nav button (desktop). One tap from any scroll position.
- Playtomic booking modal — one reusable component opened by every Book button. Deep-link fallback if iframe blocked.

## Conversion Mechanics (approved)

- **Sticky Book button** — always visible primary action.
- **Scarcity / urgency** — peak-hour availability badges, "popular times filling fast" on pricing/courts.
- **Lead capture** — WhatsApp community + email first-session offer for not-ready visitors.
- Real testimonials (no fabricated live counters).

## Media Asset List (Higgsfield)

All assets dark/moody. Drop into `/public/media/` with these exact filenames so the
build wires them automatically. Site works with tasteful placeholders until files exist.

### Videos (silent, looping)
| File | Specs | Direction |
|------|-------|-----------|
| `hero-loop.mp4` | 16:9, 10–20s, 1080p+ | Slow-mo dusk/indoor rally, dramatic side light, dark bg, red glass walls, shallow DoF |
| `hero-loop-mobile.mp4` | 9:16 | Vertical reframe / tighter single-player shot |
| `court-1.mp4`…`court-4.mp4` | 1:1 or 4:5, 4–6s | Ambient per-court moods (smash, volley, footwork, ball bounce), seamless loop |
| `final-cta.mp4` | 16:9, 8–12s | Wide community shot — celebration, fist bumps, lights flaring; warmer |

### Images
| File | Specs | Direction |
|------|-------|-----------|
| `hero-poster.jpg` (+ `-mobile`) | 16:9 + 9:16 | First frame of hero loop — instant load, no black flash |
| `experience-1..3.jpg` | 4:5 | Coaching moment / social night / match point. People-focused, dark grade |
| `court-1..4.jpg` | 4:3 | Clean per-court still (CMC Green, Purple, Terracotta, Blue), architectural, moody |
| `shop-1..3.jpg` | 1:1 | Racket / balls / apparel on dark textured surface, single red light accent |
| `team-1..n.jpg` | 4:5 | (later pages) coaches on black, Rembrandt lighting |
| `og-share.jpg` | 1200×630 | Branded hero still + logo for link previews |

## Technical Approach

- **Video:** native `<video autoplay muted loop playsinline poster preload="metadata">`.
  No video libraries. Poster shows instantly.
- **Mobile / reduced-motion / save-data:** render poster image only; skip video download.
- **Below-fold videos:** lazy-load via IntersectionObserver (court hover clips load on scroll).
- **Playtomic modal:** single reusable component; iframe embed of
  `https://playtomic.com/clubs/the-cage-padel-tribe`; deep-link fallback.
- **Stack:** Next.js 14 + Tailwind + Framer Motion (existing). Extend Tailwind theme
  with dark tokens + Syne/Space Grotesk via next/font.
- **Accessibility:** reduced-motion respected, visible focus states, alt text,
  keyboard-navigable + escapable modal, sufficient contrast on overlays.
- **Performance:** compressed assets, dark poster placeholders, lazy media, metadata-only preload.

## Graceful Placeholder Strategy

Until real Higgsfield assets land, each media slot renders a styled dark placeholder
(gradient + subtle motion + label) at the correct aspect ratio. Swapping in the real
file at the documented path requires no code change.

## Out of Scope (this pass)

- Other 6 pages (redesigned after homepage approval).
- Real e-commerce checkout (shop remains teaser → link).
- Backend for email capture (wire to form endpoint later; capture UI built now).

## Open Items / To Revisit

- Fraunces vs Syne A/B after launch.
- Whether to add live social-proof counters later (currently excluded).
