# 💬 Feedback Hub

<p align="center">
  <a href="https://github.com/iberikofer/react-feedback-page/actions/workflows/deploy.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/iberikofer/react-feedback-page/deploy.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white&label=Build%20%26%20Deploy" alt="Build and Deploy" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/node-%3E%3D20.0.0-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node Version" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/react-18.3.1-61dafb?style=flat-square&logo=react&logoColor=black" alt="React 18" />
  </a>
  <a href="https://github.com/iberikofer/react-feedback-page/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT License" />
  </a>
</p>

---

## 🌟 1. Project Overview

**Feedback Hub** is an interactive, responsive customer satisfaction rating and
analytics dashboard built with modern React. It provides businesses and creators
with an intuitive interface to collect instant user sentiment across positive
👍, neutral 👌, and critical 👎 categories while calculating real-time
satisfaction ratios and key performance indicators 📈. The application features
a sleek dark-mode glassmorphic interface, smooth micro-animations ✨, accessible
landmarks, and instant feedback computation ⚡.

---

## 🛠️ 2. Tech Stack

- **⚛️ Framework & Core**: [React 18.3](https://react.dev/) (Hooks, Strict
  Mode), [React DOM](https://react.dev/)
- **⚡ Bundler & Tooling**: Create React App (`react-scripts` 5.x)
- **🎨 Styling**: Scoped CSS Modules, Vanilla CSS Design System with custom CSS
  variables & glassmorphism
- **🔤 Typography & Icons**: Inter (Google Fonts), custom minimalist vector icon
  system
- **🧹 Code Quality**: [ESLint](https://eslint.org/) (`react-app`),
  [Prettier](https://prettier.io/)
- **🚀 CI/CD & Deployment**:
  [GitHub Actions](https://github.com/features/actions) with automatic
  deployment to [GitHub Pages](https://pages.github.com/)

---

## ⚙️ 3. Prerequisites

Ensure you have the following installed on your machine before running the
application:

- **🟢 Node.js**: `v20.0.0` or higher (LTS recommended, tested with Node v20 &
  v24)
- **📦 npm**: `v10.0.0` or higher (bundled with Node.js)
- **🐙 Git**: Latest version

---

## 🚀 4. Getting Started

Follow these steps to set up and run the project locally:

### 1. 📥 Clone the repository

```bash
git clone https://github.com/iberikofer/react-feedback-page.git
cd react-feedback-page
```

### 2. 🔐 Configure Environment Variables

Copy the sample environment file to create your local `.env`:

```bash
# On Linux / macOS
cp .env.example .env

# On Windows PowerShell
Copy-Item .env.example .env
```

### 3. 📦 Install Dependencies

Install the required project dependencies:

```bash
npm install
```

### 4. ▶️ Start Development Server

Launch the local development server:

```bash
npm run dev
# or
npm start
```

Open your browser and navigate to `http://localhost:3000` to interact with the
application.

### 5. 🏗️ Build for Production

To compile and bundle optimized production assets:

```bash
npm run build
```

Production assets are generated in the `/build` directory.

### 6. 🔍 Lint Code

Run the code quality linter:

```bash
npm run lint
# Auto-fix lintable issues
npm run lint:fix
```

---

## 🔑 5. Environment Variables

The project includes pre-configured environment parameters. Variables accessible
to React client code must begin with the `REACT_APP_` prefix.

| 🏷️ Variable Name        | 📌 Required | ⚙️ Default Value                                    | 📝 Description                        |
| :---------------------- | :---------: | :-------------------------------------------------- | :------------------------------------ |
| `REACT_APP_TITLE`       |     No      | `Feedback Hub`                                      | Custom header and application name    |
| `REACT_APP_DESCRIPTION` |     No      | `Interactive customer feedback rating...`           | Application description for meta tags |
| `PUBLIC_URL`            |     No      | `https://iberikofer.github.io/react-feedback-page/` | Base deployment path on GitHub Pages  |

---

## 📂 6. Project Structure

```text
react-feedback-page/
├── .github/
│   └── workflows/
│       └── deploy.yml          # 🚀 GitHub Actions CI/CD deployment pipeline
├── public/
│   ├── favicon.ico             # 🖼️ Browser favicon icon
│   └── index.html              # 🌐 HTML5 entry document with font preconnect
├── src/
│   ├── components/
│   │   ├── App.jsx             # 📱 Root application component with state & layout
│   │   ├── App.module.css      # 🎨 Scoped layout, header, card, and footer styles
│   │   ├── index.js            # 📦 Barrel export module
│   │   ├── FeedbackOptions/
│   │   │   ├── FeedbackOptions.jsx         # 🔘 Interactive rating button group
│   │   │   └── FeedbackOptions.module.css  # ✨ Button variants & hover micro-interactions
│   │   ├── Notification/
│   │   │   ├── Notification.jsx            # 📭 Empty-state feedback notification
│   │   │   └── Notification.module.css     # 💫 Notification styling & fade animation
│   │   ├── Section/
│   │   │   ├── Section.jsx                 # 📑 Semantic HTML5 section landmark
│   │   │   └── Section.module.css          # 📐 Section heading & container styles
│   │   └── Statistics/
│   │       ├── Statistics.jsx              # 📊 Sentiment progress gauge & metric cards
│   │       └── Statistics.module.css       # 📈 Dynamic satisfaction bar & KPI grid
│   ├── index.css               # 🎨 Design system tokens, variables & dark mode reset
│   └── index.js                # ⚡ React 18 createRoot application bootstrap
├── .editorconfig               # 📏 Cross-editor formatting standardization
├── .env.example                # 🔒 Sample environment configuration
├── .gitignore                  # 🙈 Comprehensive stack-specific ignore rules
├── .prettierrc.json            # 💅 Prettier code formatting rules
├── jsconfig.json               # 🗺️ JavaScript path mapping configuration
├── package.json                # 📋 Project dependencies, scripts & metadata
└── README.md                   # 📖 Project documentation
```

---

## 🤝 7. Contributing

Contributions, issues, and feature requests are welcome!

1. 🍴 Fork the Project.
2. 🌿 Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. 💾 Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. 📤 Push to the Branch (`git push origin feature/AmazingFeature`).
5. 🔀 Open a Pull Request.

---

## 📜 8. License

This project is licensed under the **MIT License** - see the
[LICENSE](https://github.com/iberikofer/react-feedback-page/blob/main/LICENSE)
file for details.
