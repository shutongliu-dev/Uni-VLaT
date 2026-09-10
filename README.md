# Uni-VLaT project website

Static academic project page for **Uni-VLaT: Whole-Body Tactile Adaptation of VLA Policies for Humanoid Loco-Manipulation**.

## GitHub Pages

Upload the contents of this directory to a repository, then select **Settings → Pages → Deploy from a branch → main → / (root) → Save**. No build step is needed. `.nojekyll` tells Pages to serve these files directly. All asset paths are relative and work under a project subpath.

## Content

- `index.html`: paper title, abstract summary, method, tasks, preliminary results, provisional BibTeX.
- `style.css`: desktop and mobile layout, print styling, reduced-motion support.
- `script.js`: citation copy with manual-copy fallback.
- `assets/`: overview and architecture figures extracted from the supplied manuscript, the original draft PDF, and an original favicon.

No third-party page source was copied. The academic page organization is inspired by VideoMimic; implementation is original. Paper text and figures come from the supplied Uni-VLaT draft.

## Author checklist

1. Replace Anonymous Authors with the confirmed author order, affiliations, and homepage links when appropriate.
2. Replace `assets/univlat-paper.pdf` with the release-ready paper. The current file is the supplied anonymous draft with TODOs and incomplete results.
3. Confirm the task name: prose says Box Holding, while Table I and Figure 1 say Basket Loading. The website retains the table's label explicitly.
4. Confirm the baseline name: prose says Tactile Prediction, while Table I says HTD Prediction.
5. Add missing Hugging results and verified final evaluation numbers; remove the preliminary label only after confirmation.
6. Add actual task videos, code and arXiv links when available. Current forthcoming labels are text, not broken links or simulated videos.
7. Replace the provisional BibTeX with the final publication record. No venue, author identity, or acceptance status is inferred.

The table is transcribed from Table I of the provided PDF, with unavailable entries kept unavailable. No missing values or aggregate advantage is inferred.
