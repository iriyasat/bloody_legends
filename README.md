# BloodyLegends

<p align="center">
	<strong>A modern blood donation and request management platform built with React + Vite.</strong>
</p>

<p align="center">
	<img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
	<img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
	<img alt="React Router" src="https://img.shields.io/badge/Router-v7-CA4245?logo=reactrouter&logoColor=white" />
	<img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white" />
	<img alt="License" src="https://img.shields.io/badge/License-MIT-green.svg" />
</p>

<p align="center">
	<a href="https://github.com/iriyasat/bloody_legends">Repository</a> •
	<a href="#quick-start">Quick Start</a> •
	<a href="#route-overview">Routes</a> •
	<a href="#contribution">Contributing</a>
</p>

<p align="center">
	<img src="src/assets/hero.png" alt="BloodyLegends preview" width="900" />
</p>

---

## Why BloodyLegends?

BloodyLegends is designed to make emergency blood coordination faster and clearer.
It provides role-based experiences for users, donors, and admins to manage requests,
discover eligible donors, and keep donation workflows organized.

## Key Features

- Public authentication flow with dedicated Login and Register screens.
- User dashboard with blood requests, request creation, and personal tracking.
- Donor experience including donor registration and donation history.
- Admin control panel for donor verification and request oversight.
- Route-level separation for regular users and admin users.
- Map-focused components for request and location context.

## Route Overview

### Public

- `/`
- `/login`
- `/register`

### User App (`/app`)

- `/app`
- `/app/find-donors`
- `/app/blood-requests`
- `/app/blood-requests/:id`
- `/app/create-request`
- `/app/donor-registration`
- `/app/donor-dashboard`
- `/app/donation-history`
- `/app/profile`
- `/app/my-requests`

### Admin (`/admin`)

- `/admin`
- `/admin/donor-verifications`
- `/admin/blood-group-reviews`
- `/admin/blood-requests`
- `/admin/completion-approvals`
- `/admin/user-management`

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4 + PostCSS
- Lucide React (icons)
- MapLibre GL (maps)

## Project Structure

```text
src/
	components/        Reusable UI blocks (cards, navbar, sidebar, maps, etc.)
	layouts/           Role-based page shells
	pages/             Route pages for users and admins
	data/              Seed/mock data and chatbot logic
	routes/            Route-specific modules
```

## Quick Start

### 1) Clone

```bash
git clone https://github.com/iriyasat/bloody_legends.git
cd bloody_legends
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run development server

```bash
npm run dev
```

Open the local URL shown in your terminal (typically `http://localhost:5173`).

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Deployment

Build the app:

```bash
npm run build
```

Deploy the generated `dist/` folder on platforms like Netlify, Vercel, GitHub Pages, or any static hosting provider.

## Contribution

Contributions are welcome.

1. Fork this repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request.

## License

This project is licensed under the MIT License.
