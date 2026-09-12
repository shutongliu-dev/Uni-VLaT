# Uni-VLaT project website

Static academic project page for **Uni-VLaT: Whole-Body Tactile Adaptation of VLA Policies for Humanoid Loco-Manipulation**.

Repository: [shutongliu-dev/Uni-VLaT](https://github.com/shutongliu-dev/Uni-VLaT).

Project website address after a future authorized GitHub Pages release: https://shutongliu-dev.github.io/Uni-VLaT/ (currently disabled).

## Website update — 2026-09-12

Website content and three figures were refreshed from the latest TeXPage manuscript. The TeXPage project was read only and was not modified.

The PDF entry is temporarily omitted from the page at the author's request. The existing draft asset and Git history are retained; hiding the entry does not restrict direct file access.

Main results use the completed five-task table (20 rollouts per configuration, 50 demonstrations per task). Partial ablations remain explicitly incomplete. The draft gives conflicting rollout counts for cross-backbone and ablation studies (10 in the setup, 20 in later descriptions); the website does not assert a rollout count for those studies.

Repository: https://github.com/shutongliu-dev/Uni-VLaT

Project website: https://shutongliu-dev.github.io/Uni-VLaT/

## Content

- `index.html`: paper title, abstract summary, method, tasks, preliminary results, provisional BibTeX.
- `style.css`: desktop and mobile layout, print styling, reduced-motion support.
- `script.js`: citation copy with manual-copy fallback.
- `assets/`: overview and architecture figures extracted from the supplied manuscript, the retained draft PDF, an original favicon, and optimized WebP figures from the 2026-09-12 manuscript.

The layout reproduces the measured desktop styling of VideoMimic: #fdfaf4 background, Playfair Display and Roboto Mono, 960px text width, 60px title, 40px subtitle, black section labels, 1150px gallery viewport, 224px media height, 15px gaps, 35px circular controls, and a dark BibTeX block. Implementation is independently authored; reference source was inspected for design values. Fonts are self-hosted with OFL licenses. Paper text and figures come from the supplied Uni-VLaT draft.

The reference uses videos; the provided material contains only still figures. The five gallery thumbnails are extracted from Figure 1, explicitly labeled as stills. Replace them with genuine demonstration videos when supplied. Content length and media aspect ratios affect page height. A narrow-screen media query is retained so the page fits phones; desktop geometry follows the reference.

## Remaining author inputs

1. Confirm author order and affiliations, then replace Anonymous Authors.
2. Supply demonstration videos, code and arXiv links, and the release-ready paper when ready to restore the PDF entry.
3. Complete cross-backbone and ablation measurements and resolve the inconsistent rollout counts in the manuscript.
4. Supply finalized contact-dynamics curves and qualitative comparisons.
5. Replace the provisional BibTeX when publication metadata is available.
