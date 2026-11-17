# FusionNet

A multimodal deep learning project for lung disease screening that aims to fuse three kinds of medical input (a chest X-ray image, a lung sound recording and a doctor's prescription or clinical note) into one prediction. The repository contains a React web UI for uploading the three inputs and browsing the framework, a small Flask prediction endpoint, and a pickled PyTorch cross-attention fusion model (`lame_model.pkl`).

> **Status: early prototype.** The UI runs as a demo, but the end-to-end prediction path is not working yet (see [Known limitations](#known-limitations)). The training notebook / feature extractors that produced the model are not in this repository.

## Features

What the code currently does:

- **Diagnosis page**: upload a chest X-ray (`image/*`), a lung sound (`audio/*`) and a prescription (`.pdf`, `.doc`, `.docx`, `.txt` or image). The files are sent as `multipart/form-data` (`image`, `audio`, `text`) to `POST http://127.0.0.1:5000/predict`, and the returned class index is shown as `Prediction: <n>`.
- **Framework page**: a diagram of the intended architecture: CNN for X-rays, RNN/CNN for audio, a Transformer (BERT-family) for text, a cross-modal attention fusion layer, and outputs for disease class (Healthy, Pneumonia, Tuberculosis, COPD, COVID-19), severity score and Grad-CAM heatmaps.
- **Datasets, Experiments, Models, Analytics and Settings pages**: dashboard screens built from hard-coded sample data (example datasets such as NIH Chest X-ray and ICBHI Respiratory Sound, example model accuracies, charts). They are not connected to any backend.
- **Flask API** (`app.py`): a `/predict` route with CORS enabled, meant to run the fusion model on the uploaded files.

## Tech stack

- **Frontend**: React 18, TypeScript, Vite 6 (`@vitejs/plugin-react-swc`), shadcn/ui (Radix UI) components, Tailwind-style utility classes, lucide-react icons, Recharts. The UI was generated with Figma Make (see `src/Attributions.md`).
- **Backend**: Python, Flask, flask-cors.
- **Model**: PyTorch (`torch.nn.MultiheadAttention`, `Linear`, `ReLU`).

## Project structure

```
Fusionet/
├── app.py                  # Flask API with the /predict route (incomplete, see below)
├── lame_model.pkl          # Pickled PyTorch CrossAttentionFusion model (~14 MB)
├── index.html              # Vite HTML entry
├── vite.config.ts          # Vite config: dev server on port 3000, build output in build/
├── package.json            # Frontend dependencies and scripts
├── src/
│   ├── main.tsx            # React entry point
│   ├── App.tsx             # Page switcher (state-based, no router)
│   ├── components/
│   │   ├── DiagnosisPage.tsx   # File upload + call to the Flask API
│   │   ├── FrameworkPage.tsx   # Architecture overview
│   │   ├── DatasetsPage.tsx, ExperimentsPage.tsx, ModelsPage.tsx,
│   │   │   AnalyticsPage.tsx, ResultsPage.tsx, SettingsPage.tsx   # Mock-data dashboards
│   │   ├── Navigation.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── index.css, styles/globals.css
│   └── Attributions.md     # shadcn/ui and Unsplash credits
└── node_modules/           # Committed by mistake; should be removed from git
```

## Getting started

### Prerequisites

- Node.js (a version supported by Vite 6, for example Node 18+ or 20+) and npm
- Python 3 with `flask`, `flask-cors` and `torch` for the backend (there is no `requirements.txt`, so these must be installed manually)

### Frontend

```bash
npm install
npm run dev      # starts Vite on http://localhost:3000 and opens the browser
npm run build    # production build into build/
```

`node_modules/` is committed and contains Windows-specific binaries (for example `@esbuild/win32-x64`), so delete it and run `npm install` on a fresh clone.

### Backend

```bash
pip install flask flask-cors torch
python app.py    # Flask dev server on http://127.0.0.1:5000 (debug=True)
```

The frontend's API URL is hard-coded to `http://127.0.0.1:5000/predict` in `src/components/DiagnosisPage.tsx`. No environment variables are used.

### API

`POST /predict` (multipart form)

| Field   | Content                         |
|---------|---------------------------------|
| `image` | Chest X-ray image               |
| `audio` | Lung sound recording            |
| `text`  | Prescription / clinical note file |

Intended response: `{"prediction": <class index>}`. On error: `{"error": "<message>"}`.

## How it works

1. The browser collects up to three files and posts them to the Flask API.
2. `app.py` is meant to turn each file into a feature vector (`preprocess(image, audio, text)`), run them through the fusion model and return `argmax` of the output as the predicted class.
3. `lame_model.pkl` is a whole pickled `CrossAttentionFusion` module (class defined in `__main__` of the original notebook). From the pickle it contains:
   - `attn_text_img`: `MultiheadAttention`, embed dim 512, 8 heads (text attends to image features)
   - `attn_text_audio`: `MultiheadAttention`, embed dim 512, 8 heads (text attends to audio features)
   - a `Sequential` head of `Linear` and `ReLU` layers producing the class scores

   So the model expects pre-computed 512-dimensional text, image and audio embeddings, not raw files.

## Known limitations

- **The frontend does not compile.** In `src/components/DiagnosisPage.tsx`, `handleRunDiagnosis` opens a `try {` block with no `catch`/`finally`, so the rest of the component ends up inside it (esbuild reports `Expected "finally" but found "const"`). Adding a `catch` (and closing the function) is needed before `npm run dev` / `npm run build` will work.
- **`app.py` does not run a prediction.** It imports Flask twice, never imports `request` or `torch`, and never defines `model` or `preprocess`, so every request returns an error. It also never loads `lame_model.pkl`.
- **The model cannot be loaded as-is.** Because the whole module was pickled from `__main__`, unpickling requires the original `CrossAttentionFusion` class definition, which is not in the repo. Saving a `state_dict` with the class in a `.py` file would fix this.
- The feature extractors (image CNN, audio model, text encoder) and the training notebook are not included.
- All numbers on the Datasets, Models, Experiments, Analytics and Results pages are hard-coded sample data, not real results. `ResultsPage`, `AboutPage` and `LandingPage` exist but are not reachable from the navigation.
- This is a research prototype and not a medical device. Its output must not be used for diagnosis.

## Credits

- UI components from [shadcn/ui](https://ui.shadcn.com/) (MIT license)
- Photos from [Unsplash](https://unsplash.com) ([license](https://unsplash.com/license))
