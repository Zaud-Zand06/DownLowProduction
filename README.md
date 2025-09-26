# DownLow Production Website

A modern, responsive React website for DownLow Brands, featuring dynamic content, parallax scrolling, and integrated Google Calendar events. Built with performance and user experience in mind.

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 5
- **Runtime:** Bun (Package Manager & Runtime)
- **Deployment:** Cloudflare Pages
- **UI Library:** Material-UI (MUI) with Emotion styling
- **Routing:** React Router DOM v7
- **Animations:** React Spring & React Scroll Parallax

## Prerequisites

- [Bun](https://bun.sh/) (latest version)
- Node.js 18+ (for compatibility)
- Git

## Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Zaud-Zand06/DownLowProduction.git
   cd DownLowProduction
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory:

   ```env
   VITE_CALENDAR_API=your_google_calendar_api_key
   ```

4. **Development Server:**

   ```bash
   bun run dev
   ```

5. **Build for Production:**

   ```bash
   bun run build
   ```

6. **Preview Production Build:**
   ```bash
   bun run preview
   ```

## Project Structure

```
src/
├── assets/               # Static assets (images, fonts)
│   ├── fonts/           # Custom font files
│   └── *.{avif,webp}    # Optimized images
├── components/          # React components
│   ├── component_css/   # Component-specific stylesheets
│   ├── Header.jsx       # Navigation & header
│   ├── Footer.jsx       # Footer with locations
│   ├── Menu.jsx         # Menu display
│   ├── Catering.jsx     # Catering information
│   ├── UpcomingEvents.jsx # Google Calendar integration
│   └── ...             # Other components
├── App.jsx             # Main landing page
├── main.jsx            # App entry point & routing
├── index.css           # Global styles & CSS variables
└── App.css             # App-specific styles
```

## Key Dependencies

### Core Libraries

- **React & React DOM**: UI framework and rendering
- **React Router DOM**: Client-side routing
- **Vite**: Fast build tool and development server

### UI & Styling

- **@mui/material**: Component library
- **@emotion/react & @emotion/styled**: CSS-in-JS styling
- **@mui/icons-material**: Material Design icons

### Animations & Effects

- **react-scroll-parallax**: Parallax scrolling effects
- **@react-spring/web**: Spring-based animations

## CSS Architecture

### Global Variables (index.css)

The application uses CSS custom properties for consistent theming:

```css
:root {
  --main-yellow: #f4d03f;
  --main-red: #e74c3c;
  --background-colour: #1a1a1a;
  --text-dark: #2c3e50;
  --text-light: #ecf0f1;
  --translucent-white: rgba(255, 255, 255, 0.9);
  --translucent-black: rgba(0, 0, 0, 0.7);
  --card-background-colour: #34495e;
  --border-colour: #bdc3c7;
  --shadow-colour: #bdc3c7;
}
```

### Font Loading

Custom fonts are loaded via `@font-face` declarations:

- **Ahkio**: Primary brand font (Thin, Bold, Black weights)
- **Raleway**: Secondary font for body text

## Component Documentation

### Core Components

#### `main.jsx`

- **Purpose**: Application entry point and routing configuration
- **Features**:
  - React Router setup with subdomain routing
  - Parallax provider wrapper
  - Scroll-to-top functionality

#### `App.jsx`

- **Purpose**: Landing page composition
- **Includes**: Header, HeroContent, scrolling alerts, parallax sections, footer

#### `Header.jsx`

- **Purpose**: Navigation and branding
- **Features**:
  - Responsive navigation with MUI dropdown
  - Dynamic header visibility on scroll
  - Configurable navigation items via `navigationConfig`

#### `UpcomingEvents.jsx`

- **Purpose**: Google Calendar integration
- **Features**:
  - Fetches events via Google Calendar API
  - Responsive iframe embedding
  - Real-time window resize handling
- **Environment**: Requires `VITE_CALENDAR_API` key

#### `Menu.jsx`

- **Purpose**: Dynamic menu display
- **Data Structure**:
  ```javascript
  const menuItem = {
    title: "Item Name",
    description: "Item description",
    price: "$12.99",
    specialText: "Popular!", // optional
  };
  ```

#### `Catering.jsx` & Sub-components

- **CateringForm.jsx**: Contact form with email integration
- **AccordianCateringMenus.jsx**: Expandable menu sections for different locations

### Utility Components

#### `ScrollingAlert.jsx`

- **Purpose**: Animated scrolling text banner
- **Customization**: Edit `text` constant for content, CSS animation-duration for speed

#### `ParallaxSection.jsx`

- **Purpose**: Parallax scrolling effects
- **Implementation**: Uses `react-scroll-parallax` with speed-based animations

## Deployment (Cloudflare Pages)

### Build Configuration

```json
{
  "build": {
    "command": "bun run build",
    "directory": "dist",
    "environment": {
      "NODE_VERSION": "18"
    }
  }
}
```

### Environment Variables

Set in Cloudflare Pages dashboard:

- `VITE_CALENDAR_API`: Google Calendar API key

##  Development Guidelines

### Adding New Menu Items

1. Add item object to appropriate list in `Menu.jsx`
2. Update `menuImages` array if visual component needed
3. Ensure item follows established data structure

### Styling Best Practices

- Use CSS custom properties for colours and fonts
- Component-specific styles go in `component_css/`
- Global styles and variables in `index.css`
- Maintain responsive design principles

### Performance Considerations

- Images are optimized (AVIF/WebP formats)
- Bun provides fast dependency resolution
- Vite enables fast HMR during development
- Cloudflare Pages provides global CDN distribution

## Common Issues & Solutions

### Google Calendar API

- Ensure API key has Calendar API enabled
- Check CORS settings for domain
- Verify calendar is public for embedded iframe

### Build Issues

- Clear Bun cache: `bun pm cache rm`
- Verify all environment variables are set
- Check for console errors in browser developer tools

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is proprietary to DownLow Brands. All rights reserved.

## Credits

- **Photography**: Jimmy's Photography
- **Web Design & Development**: Alex Li
- **Fonts**: Licensed under Creative Commons (credits in SecretMenu.jsx)
- **Icons**: Material Design Icons by Google
