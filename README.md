# Sirine Jnayeh - Portfolio 2025

A modern, responsive portfolio website showcasing my professional experience, projects, and skills as a Software Engineer specializing in AI and Full-Stack Development.

![Portfolio Preview](./public/sirine.jpg)

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Experience**: Detailed modals for experience and project information
- **Certificate Gallery**: Modal-based certificate viewing system
- **Blog Integration**: Connected to Hashnode blog for articles
- **Performance Optimized**: Built with Vite for fast loading times
- **Smooth Animations**: GSAP-powered scroll-triggered animations

## 🚀 Live Demo

Visit the live portfolio: [https://sirine.is-a.dev/](https://sirine.is-a.dev/)

## 🛠️ Built With

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **GSAP** - Animation library
- **Swiper** - Touch slider for projects and certificates
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📁 Project Structure

```
src/
├── assets/
│   └── svg/                 # SVG icons and graphics
├── components/
│   ├── Buttons/            # Reusable button components
│   ├── cards/              # Card components for projects, blogs, etc.
│   ├── layout/             # Layout components (headers, sliders)
│   ├── modals/             # Modal components for detailed views
│   └── ui/                 # UI components (pulse dots, etc.)
├── sections/
│   ├── Blog/               # Blog section
│   ├── CTA/                # Call-to-action section
│   ├── Experience/         # Experience and education timeline
│   ├── Footer/             # Footer section
│   ├── Header/             # Navigation header
│   ├── Hero/               # Hero/landing section
│   ├── Projects/           # Projects showcase
│   └── Skills/             # Skills and technologies
├── transitions/            # GSAP animation definitions
├── App.jsx                 # Main app component
└── main.jsx               # App entry point
```

## 🎯 Sections

### 1. Hero Section
- Professional introduction
- Call-to-action buttons
- Animated profile image

### 2. Experience & Education
- Interactive timeline layout
- Detailed modal views for each position
- Side-by-side experience and education display

### 3. Skills
- Technology stack showcase
- Categorized skill sets
- Visual skill indicators

### 4. Projects
- Featured project gallery
- Mini projects slider
- Certificate showcase with modal viewing

### 5. Blog
- Latest articles from Hashnode
- "See more" button linking to full blog

### 6. Contact/CTA
- Professional contact information
- Social media links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sirine707/sirine707-Portfolio.git
   cd sirine707-Portfolio
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
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🎨 Customization

### Adding New Experience/Education

1. Open `src/sections/Experience/Experience.jsx`
2. Add new entries to `ExperienceData` or `EducationData` arrays
3. Follow the existing data structure

### Adding New Projects

1. Open `src/sections/Projects/Projects.jsx`
2. Add new projects to the appropriate arrays
3. Add project images to `public/ProjectThumbs/`

### Updating Skills

1. Open `src/sections/Skills/Skills.jsx`
2. Update the skills arrays with your technologies
3. Add skill logos to `public/logos/skills/`

### Blog Integration

The blog section automatically fetches from Hashnode. Update the blog links in `src/sections/Blog/Blog.jsx` to point to your articles.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Features

- **Lazy Loading**: Images load on demand
- **Code Splitting**: Optimized bundle sizes
- **Animation Optimization**: GSAP with hardware acceleration
- **Modern Build**: Vite for fast development and production builds

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set framework preset to "Vite"
3. Build command: `npm run build`
4. Output directory: `dist`

### Other Platforms

The project can be deployed on any static hosting service:
- Netlify
- GitHub Pages
- Surge.sh
- Firebase Hosting

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/sirine707/sirine707-Portfolio/issues).

## 📞 Contact

**Sirine Jnayeh**
- Website: [https://sirine.is-a.dev/](https://sirine.is-a.dev/)
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [@sirine707](https://github.com/sirine707)
- Email: [Your Email]

---

⭐ Star this repository if you found it helpful!
