# Uni-VLaT project website

Static academic project page for **Uni-VLaT: Whole-Body Tactile Adaptation of VLA Policies for Humanoid Loco-Manipulation**.

## Development status

Repository is private. GitHub Pages is disabled. Continue using local preview; do not enable public hosting without a new explicit publication request. The noindex meta tag is advisory, not access control.

## GitHub Pages (for a future authorized release)

Upload the contents of this directory to a repository, then select **Settings → Pages → Deploy from a branch → main → / (root) → Save**. No build step is needed. `.nojekyll` tells Pages to serve these files directly. All asset paths are relative and work under a project subpath.

## Content

- `index.html`: paper title, abstract summary, method, tasks, preliminary results, provisional BibTeX.
- `style.css`: desktop and mobile layout, print styling, reduced-motion support.
- `script.js`: citation copy with manual-copy fallback.
- `assets/`: overview and architecture figures extracted from the supplied manuscript, the original draft PDF, and an original favicon.

The layout reproduces the measured desktop styling of VideoMimic: #fdfaf4 background, Playfair Display and Roboto Mono, 960px text width, 60px title, 40px subtitle, black section labels, 1150px gallery viewport, 224px media height, 15px gaps, 35px circular controls, and a dark BibTeX block. Implementation is independently authored; reference source was inspected for design values. Fonts are self-hosted with OFL licenses. Paper text and figures come from the supplied Uni-VLaT draft.

The reference uses videos; the provided material contains only still figures. The five gallery thumbnails are extracted from Figure 1, explicitly labeled as stills. Replace them with genuine demonstration videos when supplied. Content length and media aspect ratios affect page height. A narrow-screen media query is retained so the page fits phones; desktop geometry follows the reference.

## Author checklist

1. Replace Anonymous Authors with the confirmed author order, affiliations, and homepage links when appropriate.
2. Replace `assets/univlat-paper.pdf` with the release-ready paper. The current file is the supplied anonymous draft with TODOs and incomplete results.
3. Confirm the task name: prose says Box Holding, while Table I and Figure 1 say Basket Loading. The website retains the table's label explicitly.
4. Confirm the baseline name: prose says Tactile Prediction, while Table I says HTD Prediction.
5. Add missing Hugging results and verified final evaluation numbers; remove the preliminary label only after confirmation.
6. Add actual task videos, code and arXiv links when available. Current forthcoming labels are text, not broken links or simulated videos.
7. Replace the provisional BibTeX with the final publication record. No venue, author identity, or acceptance status is inferred.

The table is transcribed from Table I of the provided PDF, with unavailable entries kept unavailable. No missing values or aggregate advantage is inferred.
