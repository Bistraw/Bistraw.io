# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Leslie B. Marin (Bistraw), a game developer and narrative designer. The site showcases indie games, academic/professional projects, work experience, and contact information. It's a static website built with vanilla HTML, CSS, and JavaScript, using TailwindCSS via CDN.

## Tech Stack

- **HTML5**: Semantic markup with Spanish language settings
- **CSS3**: Custom styles in `styles.css` with Google Fonts (Rubik)
- **JavaScript**: Vanilla JS in `script.js` for interactivity
- **TailwindCSS**: Loaded via CDN (not built/compiled locally)
- **External Services**: Formspree for contact form, YouTube embeds for project videos

## Project Structure

```
1portafolio/
├── index.html          # Main HTML file (single-page application)
├── script.js           # All JavaScript functionality
├── styles.css          # Custom CSS (theme definitions, overrides)
└── imgs/               # Image assets (PNGs, SVGs, JPEGs)
```

## Key Architecture Patterns

### Single-Page Application
The entire portfolio is contained in `index.html` as a single-page application with anchor-based navigation (`#projects`, `#about`, `#contact`). All sections are rendered on initial load with smooth scrolling between sections.

### Theme System
The site implements a dual-theme system (dark/light mode):
- **Dark Theme**: Default, slate/gray color scheme
- **Light Theme**: Apple-inspired design with `#f5f5f7` backgrounds
- Theme state persists via `localStorage` under key `'theme'`
- Theme toggle exists in both desktop and mobile navigation
- Theme switching handled by `initThemeToggle()` in `script.js`

### Project Modal System
Projects use a modal-based detail view:
- Project data stored in `projectsData` object in `script.js`
- Each project contains: year, media (videos/images), description, features, technologies, and external link
- Modal supports mixed media galleries (YouTube embeds + static images)
- Thumbnails allow switching between media items
- Videos use YouTube iframe embeds with video IDs

### Form Handling
Contact form integration:
- Form submission handled via Formspree API endpoint: `https://formspree.io/f/xblyqgbq`
- Async submission with loading states (spinner, disabled button)
- Success/error messages displayed inline
- Form data: name, email, subject, message

## Common Development Commands

Since this is a static site with no build process:

**Local Development:**
```powershell
# Option 1: Python HTTP server (if Python installed)
python -m http.server 8000

# Option 2: Node.js http-server (if installed globally)
npx http-server -p 8000

# Option 3: VS Code Live Server extension
# Right-click index.html > Open with Live Server
```

**Testing:**
There are no automated tests. Manual testing involves:
- Loading `index.html` in browsers
- Testing theme toggle functionality
- Verifying project modals open/close correctly
- Testing contact form submission
- Checking mobile responsive behavior

**Deployment:**
- No build step required
- Deploy entire directory to static hosting (Netlify, Vercel, GitHub Pages, etc.)
- Ensure all assets in `imgs/` folder are included

## Important Implementation Details

### Adding New Projects
To add a project, update `projectsData` in `script.js`:

```javascript
"Project Name": {
    year: "2024",
    media: [
        { type: "video", id: "YOUTUBE_VIDEO_ID" },
        { type: "image", src: "imgs/project-image.png" }
    ],
    description: "Project description with <br><br> for line breaks",
    features: [
        "Feature 1",
        "Feature 2"
    ],
    technologies: ["Unity", "C#"],
    link: "https://project-url.com"
}
```

Then add corresponding HTML card in `index.html` within the appropriate section (Indie Games or Academic/Professional Projects).

### Animated Background
The header includes an animated squares background:
- Generated dynamically in JavaScript (50 squares)
- Random sizes (20-80px), positions, durations (10-30s), and opacities
- Controlled via `.animated-square` CSS class
- Animation defined in `styles.css` with `@keyframes float`

### Mobile Responsive Design
- Mobile menu toggles via `.mobile-menu-button` class
- Theme toggle exists separately for mobile with text labels
- TailwindCSS breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Grid layouts collapse on mobile (3-column → 2-column → 1-column)

### Smooth Scrolling
All anchor links (`a[href^="#"]`) implement smooth scroll behavior via JavaScript event listeners in `script.js`.

## Content Management

### Project Sections
The site has two distinct project sections:
1. **Indie Games**: Personal/hobby game projects
2. **Academic And Professional Projects**: Work and internship projects

Many placeholder projects are commented out in HTML for future expansion.

### Contact Information
- Email: `Bistraw.lm@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/bistraw/`
- Location: Aguascalientes, Mexico

## Styling Conventions

- **Color Scheme (Dark)**: Slate/Indigo palette (`slate-900`, `slate-800`, `indigo-600`, `indigo-500`)
- **Color Scheme (Light)**: Apple-inspired grays (`#f5f5f7`, `#fbfbfd`, `#d2d2d7`, `#0071e3`)
- **Fonts**: Rubik (Google Fonts) across all weights
- **Borders**: Rounded corners (`rounded-xl`, `rounded-lg`) throughout
- **Transitions**: Smooth transitions on hover states (300ms duration)
- **Spacing**: Generous padding/margins, mobile-first responsive

## Known Limitations

- No build process or package management
- TailwindCSS loaded from CDN (not customizable without changing to build process)
- No TypeScript or linting configured
- No automated testing
- Spanish/English mixed content (primarily English with Spanish `lang="es"` attribute)
- Form submissions depend on external Formspree service

## Future Expansion Areas

Based on commented-out code:
- Additional project cards ready to be uncommented
- Skills section exists but is commented out
- "View More Projects" button functionality exists but is currently disabled
- Itch.io social link prepared but commented out

## Browser Compatibility

Target modern browsers with ES6+ support:
- Chrome/Edge (Chromium)
- Firefox
- Safari (iOS/macOS)

No polyfills or legacy browser support included.

<citations>
<document>
    <document_type>WARP_DOCUMENTATION</document_type>
    <document_id>getting-started/quickstart-guide/coding-in-warp</document_id>
</document>
</citations>
