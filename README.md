# ADmyBRAND - AI SUITE- Powered Marketing Platform

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.1-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, responsive web application built with React, TypeScript, and Tailwind CSS that showcases an AI-powered marketing platform with interactive features, 3D elements, and a beautiful user interface.

## 🎯 Quick Preview

- **Live Demo**: [Coming Soon] - Deploy to see it in action!
- **Interactive 3D Elements**: Floating orbs and animated backgrounds
- **Glassmorphism UI**: Modern glass-like design components
- **AI Marketing Suite**: Comprehensive automation platform
- **Responsive Design**: Works perfectly on all devices

## 📸 Screenshots

> *Screenshots will be added after deployment to showcase the beautiful UI and interactive elements*

## 🚀 Features

### Core Features
- **AI-Powered Marketing Suite**: Comprehensive marketing automation platform
- **Interactive 3D Elements**: Floating orbs and animated background effects
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Real-time Analytics**: Live dashboard with performance metrics
- **Smart Content Generation**: AI-driven copy and creative assets
- **Customer Journey Mapping**: Visual journey orchestration
- **Predictive Modeling**: Advanced analytics and forecasting
- **Enterprise Security**: Bank-level security and compliance

### Technical Features
- **Modern React Stack**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui with custom enhancements
- **Styling**: Tailwind CSS with custom animations
- **3D Graphics**: Three.js integration for interactive elements
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM
- **Animations**: Framer Motion-inspired scroll reveals and transitions

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **3D Graphics**: Three.js
- **Forms**: React Hook Form, Zod
- **State**: TanStack Query
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Custom CSS animations and scroll effects

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd brandify-ai-aura-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/
│   ├── 3D/                 # 3D interactive elements
│   ├── sections/           # Page sections (Hero, Features, etc.)
│   └── ui/                 # Reusable UI components
├── pages/                  # Main page components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── assets/                 # Static assets
```

## 🎨 Key Components

### 3D Elements
- `FloatingOrb.tsx` - Interactive floating orbs with Three.js
- `InteractiveCard3D.tsx` - 3D card interactions

### UI Components
- `GlassCard.tsx` - Glassmorphism card component
- `GradientText.tsx` - Animated gradient text
- `ScrollReveal.tsx` - Scroll-triggered animations
- `CyclingTypingEffect.tsx` - Dynamic typing animation

### Sections
- `HeroSection.tsx` - Main landing section with animations
- `FeaturesSection.tsx` - Feature showcase with glass cards
- `PricingSection.tsx` - Pricing plans and calculator
- `TestimonialsSection.tsx` - Customer testimonials
- `FAQSection.tsx` - Frequently asked questions

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**: Go to [vercel.com](https://vercel.com) and connect your GitHub repository
2. **Auto-Detection**: Vercel will automatically detect the Vite configuration
3. **Deploy**: Click deploy with default settings
4. **Custom Domain**: Add your custom domain in the Vercel dashboard

### Netlify
1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Environment Variables**: Add any required environment variables in Netlify dashboard

### GitHub Pages
1. **Build**: `npm run build`
2. **Deploy**: Use GitHub Actions or manually upload `dist` folder to `gh-pages` branch

### Other Platforms
The application can be deployed to any static hosting platform that supports React applications.

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
VITE_ANALYTICS_ID=your_analytics_id
```

### Tailwind Configuration
Custom Tailwind classes and animations are configured in `tailwind.config.ts`.

### Vite Configuration
Build and development settings are configured in `vite.config.ts`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests: `npm run lint`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2024 ADmyBRAND

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the component examples in `/src/components`

## 🔮 Roadmap

- [ ] Add more 3D interactive elements
- [ ] Implement dark/light theme toggle
- [ ] Add more animation presets
- [ ] Create component documentation
- [ ] Add unit tests
- [ ] Implement PWA features
- [ ] Add internationalization support

---

Built with ❤️ using modern web technologies
