# Kologic AI Website

A modern, responsive website for Kologic AI built with Next.js, React, TypeScript, and Tailwind CSS. Features include a multi-page structure, dark mode toggle, smooth animations, and an AI-powered chatbot.

## Features

- **Multi-page Architecture**: Separate pages for Home, About, Services, Solutions, and Contact
- **Modern UI/UX**: Professional design with AI-themed aesthetics
- **Dark/Light Theme**: Toggle between dark and light modes with persistent storage
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **AI Chatbot**: Intelligent chatbot that answers questions using website content stored in Supabase
- **Hero Video Background**: Dynamic AI-themed background video
- **Service Cards**: Interactive cards with hover effects for services and solutions
- **Contact Form**: Functional contact form for user inquiries

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (for chatbot knowledge base)

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for chatbot functionality)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Update the `.env.local` file with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**: Navigate to http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## Pages

- **Home (/)**: Hero section with AI background video, services overview, innovation showcase
- **About (/about)**: Newsroom section, innovation highlights, demo request
- **Services (/services)**: Kore led CX details, features and benefits
- **Solutions (/solutions)**: AI Custom Solutions, industry-specific products
- **Contact (/contact)**: Contact information, form, and demo request

## Contact Information

- **Email**: hello@kologic.ai
- **Address**: Sri Vivekananda Nagar, Madhapur, Hyderabad, Telangana

## License

© 2024 Kologic AI. All rights reserved.
