# Dinesh Budhathoki — Portfolio

Personal portfolio website built with React, Tailwind CSS, and Gemini AI. Features a live AI chatbot assistant, project showcase, blog posts, and a contact form.

🌐 **Live:** [dineshbudhathoki.com](https://www.dineshbudhathoki.com)

---

## Features

- **AI Chatbot** — Floating assistant powered by Google Gemini that answers questions about skills, projects, and experience
- **Projects showcase** — Six full-stack and frontend projects with live demo and GitHub links
- **Skills section** — Categorised tech stack (Frontend / Backend / Tools)
- **Education timeline** — Academic background with expandable details
- **Contact form** — EmailJS-powered form, no backend required
- **Fully responsive** — Mobile-first design with a slide-in drawer menu

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, React Router 7, Tailwind CSS 4, Framer Motion |
| UI Components | Shadcn UI, Radix UI, Lucide React, React Icons |
| AI | Google Gemini via `@google/generative-ai` |
| Email | EmailJS |
| Build | Vite 7 |
| Deployment | Vercel |

## Getting Started

**Prerequisites:** Node.js 20.19+ or 22.12+, Yarn

```bash
# Install dependencies
yarn

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Environment Variables

Create a `.env` file in the root with the following:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

- **Gemini API key** — [Google AI Studio](https://aistudio.google.com)
- **EmailJS keys** — [EmailJS Dashboard](https://www.emailjs.com)

## Project Structure

```
src/
├── assets/               # Images (profile photo, project screenshots)
├── components/
│   ├── ui/               # Shadcn UI primitives
│   ├── chat.js           # Gemini API logic + system prompt
│   ├── ChatBot.jsx       # Chat panel UI
│   ├── ChatBotPopup.jsx  # Floating trigger button
│   └── ...               # Section components (AboutMe, Skills, Education, etc.)
├── pages/                # HomePage, ProjectsPage, BlogsPage
├── lib/utils.js          # cn() utility
└── App.jsx               # Router setup
```

## Contact

- **Email:** dineshbudhathoki.dev@gmail.com
- **LinkedIn:** [linkedin.com/in/dineshbudhathoki](https://linkedin.com/in/dineshbudhathoki)
- **GitHub:** [github.com/budhathokidinesh](https://github.com/budhathokidinesh)
