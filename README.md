# Michael Hagar - Personal Portfolio Website

A modern, professional portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multi-page Architecture**: Separate pages for Home, About, Experience, Skills, and Contact
- **Responsive Design**: Fully responsive and mobile-first approach
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Professional Animations**: Smooth fade-in, slide-in, and scale animations
- **Accessibility**: WCAG 2.2 compliant with semantic HTML and ARIA labels
- **Performance Optimized**: Built for optimal Web Vitals (LCP, FID, CLS)
- **SEO Ready**: Proper metadata and Open Graph tags

## 📁 Project Structure

```
kevin-website/
├── app/
│   ├── components/
│   │   ├── Header.tsx        # Navigation header with mobile menu
│   │   └── Footer.tsx        # Footer with links and social icons
│   ├── about/
│   │   └── page.tsx          # About page with education and expertise
│   ├── experience/
│   │   └── page.tsx          # Work experience timeline
│   ├── skills/
│   │   └── page.tsx          # Skills showcase with progress bars
│   ├── contact/
│   │   └── page.tsx          # Contact form and information
│   ├── layout.tsx            # Root layout with header and footer
│   ├── page.tsx              # Home page with hero and highlights
│   └── globals.css           # Global styles and animations
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: SVG icons (inline)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Personal Information

Edit the content in the page files:
- **Home**: `app/page.tsx`
- **About**: `app/about/page.tsx`
- **Experience**: `app/experience/page.tsx`
- **Skills**: `app/skills/page.tsx`
- **Contact**: `app/contact/page.tsx`

### Change Colors

Update the color variables in `app/globals.css`:
```css
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --accent: #06b6d4;
  /* ... */
}
```

### Modify Animations

Animation keyframes are defined in `app/globals.css`. Adjust timing and effects as needed:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 📄 Pages

### Home (`/`)
- Hero section with name and title
- Key highlights with statistics
- Recent work showcase
- Call-to-action section

### About (`/about`)
- Education background
- Areas of expertise
- Core values and principles

### Experience (`/experience`)
- Timeline of work experience
- Detailed achievements and technologies
- Impact metrics

### Skills (`/skills`)
- Categorized skill sets
- Progress bars for each skill
- Technology stack overview
- Continuous learning focus

### Contact (`/contact`)
- Contact methods (email, phone, location)
- Contact form
- Availability information

## 🌐 Deployment

This website can be deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Connect your Git repository
- **Any static hosting**: Run `npm run build` and deploy the `.next` folder

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

© 2025 Michael Hagar. All rights reserved.

## 🤝 Contact

- **Email**: kgirshman329@gmail.com
- **Phone**: +1 (917) 764-8247
- **Location**: Dallas, TX 75232

---

Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS
