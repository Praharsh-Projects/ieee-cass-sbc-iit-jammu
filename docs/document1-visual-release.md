# Document1 visual release

## Scope

The visual refresh is based on the published source at 73900424a0bd048c0eaaede484f11b4850c5799d. Contact form code, its helper, and dependencies are preserved from that publication. Pending EmailJS edits remain in the separate original checkout.

## Assets

- Document1 images 1–5: cleaned campus panoramas in public/images/campus-slide-1.webp through campus-slide-5.webp. Imagegen edits were exported to WebP without resizing.
- Image 6: full transparent chapter mark in public/images/ieee-chapter-logo-transparent.png. Alpha range confirmed as 0–255.
- Images 9 and 10: original IIT Jammu and IC-ResQ wordmarks, copied as PNGs with their wording intact. The existing CAS mark is retained.
- Images 14–23: text was transcribed into structured officer profiles, excluding LinkedIn interface details and relative duration counters.
- Image 24: eight research areas appear as text in About Us.

## Review

- npm run build and git diff --check passed.
- All six pages reviewed at 1440×900, 879×767, and 390×844; each page has one main heading and no horizontal overflow.
- Five-second playback measured: slide 1 to slide 2 in 5.26 seconds. Hover and keyboard focus each held a slide for more than five seconds. Reduced-motion startup stayed on slide 1; arrows and dots worked. Touch emulation retained a static logo.
- Document visibility handling was checked with a temporary local hidden-state simulation because the in-app browser reports inactive tabs as visible. The simulation was removed after the check.
- Seven profile dialogs reviewed; all five officer profiles include About and Experience. Escape returns focus to the initiating card. Existing email and LinkedIn links retained.
- Six non-empty albums contain 21 photos (2, 3, 4, 3, 5, 4); Event I is absent. Every lightbox ends within its album. Left/right arrows, Escape, Back to albums, and focus restoration checked.
- Existing event type/search/empty state and detail dialog checked. Contact required fields and invalid email checked without opening an email app or sending a message.
- All IC-ResQ links point to https://www.ic-resq.com/.

## Imagegen prompts

### Asset 1

Use case: precise photo restoration. Edit this supplied IIT Jammu campus photo for a website slideshow. There are no arrows here; gently restore clarity without changing the scene. Preserve the exact campus architecture, roof shapes, terrain, trees, roads, power lines, camera viewpoint and composition. Do not invent buildings or change the weather. Remove screenshot borders. Improve modest compression blur with natural details and balanced exposure, no excessive saturation, no added text/logo. Output a wide panorama, matching the original approximate 3.1:1 proportions.

### Asset 2

Use case: precise photo restoration. Edit this supplied IIT Jammu campus photo for a website slideshow. Remove only the dark circular left and right slideshow arrow controls near the side edges. Preserve the exact campus architecture, roof shapes, terrain, trees, roads, power lines, camera viewpoint and composition. Do not invent buildings or change the weather. Remove screenshot borders. Improve modest compression blur with natural details and balanced exposure, no excessive saturation, no added text/logo. Output a wide panorama, matching the original approximate 3.1:1 proportions.

### Asset 3

Use case: precise photo restoration. Edit this supplied IIT Jammu campus photo for a website slideshow. Remove only the small upper-left dark 'Custom embed' UI badge. Keep the physical institute sign, Hindi and English lettering and IIT emblem EXACTLY unchanged. Preserve the exact campus architecture, roof shapes, terrain, trees, roads, power lines, camera viewpoint and composition. Do not invent buildings or change the weather. Remove screenshot borders. Improve modest compression blur with natural details and balanced exposure, no excessive saturation, no added text/logo. Output a wide panorama, matching the original approximate 3.1:1 proportions.

### Asset 4

Use case: precise photo restoration. Edit this supplied IIT Jammu campus photo for a website slideshow. Remove the side-edge slideshow arrows and the small lower-right map-pin and 'IIT JAMMU' overlay. Keep all real buildings, roads, trees and city skyline unchanged. Preserve the exact campus architecture, roof shapes, terrain, trees, roads, power lines, camera viewpoint and composition. Do not invent buildings or change the weather. Remove screenshot borders. Improve modest compression blur with natural details and balanced exposure, no excessive saturation, no added text/logo. Output a wide panorama, matching the original approximate 3.1:1 proportions.

### Asset 5

Use case: precise photo restoration. Edit this supplied IIT Jammu campus photo for a website slideshow. Remove only the dark circular left and right slideshow arrow controls near the side edges. Preserve the exact campus architecture, roof shapes, terrain, trees, roads, power lines, camera viewpoint and composition. Do not invent buildings or change the weather. Remove screenshot borders. Improve modest compression blur with natural details and balanced exposure, no excessive saturation, no added text/logo. Output a wide panorama, matching the original approximate 3.1:1 proportions.

### Asset 6

Use case: exact logo cutout. Remove ONLY the solid black background from the supplied complete IEEE Student Branch Chapter IIT Jammu logo. Output a genuine transparent RGBA PNG. Preserve all blue and white artwork exactly, the radial diamond emblem, all blue lettering, both horizontal rules, original proportions, registration symbol and white interior strokes. Text must remain exactly 'IEEE', 'STUDENT BRANCH CHAPTER', 'IIT JAMMU'. Do not redesign, recolor, crop or add white behind the whole logo. Closely fit the transparent canvas to the full artwork with a small consistent margin. This is for small website header and centered hero branding.

