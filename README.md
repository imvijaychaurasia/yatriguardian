# Yatri Visa Consultant Website

A modern, responsive website for Yatri Visa Consultant - a leading visa and passport consultancy service based in Mumbai, India. Built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Website
- **Production**: [https://yatriguardian.in](https://yatriguardian.in)
- **Development**: [https://imvijaychaurasia-yat-yb7c.bolt.host](https://imvijaychaurasia-yat-yb7c.bolt.host)

## 📋 Project Overview

### Pages Structure
- **Home Page** (`/`) - Hero section, services overview, featured destinations, testimonials, stats
- **Visa Services** (`/visa-services`) - Visa categories, process timeline, CTA section
- **Passport Services** (`/passport-services`) - Passport services overview, CTA section
- **Contact** (`/contact`) - Contact form and office location with map

### Key Features
- 📱 Fully responsive design (mobile-first approach)
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast loading with Vite
- 🔄 Smooth animations with Framer Motion
- 📊 Interactive counters and carousels
- 📞 WhatsApp integration for contact forms
- 🗺️ Google Maps integration
- 🎯 SEO optimized

## 🛠️ Technology Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Carousel**: Swiper.js
- **Deployment**: GitHub Pages

## 📁 Project Structure
```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── LoadingSpinner.tsx
│   │   ├── PageBanner.tsx
│   │   └── ScrollToTop.tsx
│   ├── contact/          # Contact page components
│   │   ├── ContactForm.tsx
│   │   └── OfficeLocation.tsx
│   ├── home/             # Home page components
│   │   ├── CTASection.tsx
│   │   ├── FeaturedDestinations.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LatestNews.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── StatsCounter.tsx
│   │   └── Testimonials.tsx
│   ├── layout/           # Layout components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── NewsTickerBar.tsx
│   └── services/         # Service-specific components
│       ├── passport/
│       │   ├── EmergencyServices.tsx
│       │   └── PassportServices.tsx
│       └── visa/
│           ├── ProcessTimeline.tsx
│           └── VisaCategories.tsx
├── pages/                # Page components
│   ├── ContactPage.tsx
│   ├── HomePage.tsx
│   ├── PassportServicesPage.tsx
│   └── VisaServicesPage.tsx
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🔧 Common Changes Guide

### 📞 Contact Information
**Files to update**: 
- `src/components/layout/Header.tsx` (top bar)
- `src/components/layout/Footer.tsx` (footer contact)
- `src/components/contact/OfficeLocation.tsx` (contact page)
- `src/components/home/HeroSection.tsx` (WhatsApp number)
- `src/components/contact/ContactForm.tsx` (WhatsApp number)

### 🎨 Colors and Branding
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: { /* Blue colors */ },
  secondary: { /* Teal colors */ },
  accent: { /* Orange/Yellow colors */ }
}
```

### 📝 Content Updates
- **Services**: `src/components/home/ServicesOverview.tsx`
- **Testimonials**: `src/components/home/Testimonials.tsx`
- **Destinations**: `src/components/home/FeaturedDestinations.tsx`
- **News**: `src/components/home/LatestNews.tsx`
- **Stats**: `src/components/home/StatsCounter.tsx`

### 🖼️ Images
- **Logo**: `public/yatrivisaconsultant-logo.png`
- **Favicon**: `public/favicon.svg`
- All other images use Pexels URLs (can be replaced with local images)

### 🗺️ Google Maps
**File**: `src/components/contact/OfficeLocation.tsx`
- Update the `src` attribute in the iframe with new coordinates

### 📱 WhatsApp Integration
**Files**: 
- `src/components/home/HeroSection.tsx`
- `src/components/contact/ContactForm.tsx`
- Update the phone number in `https://wa.me/919920928938`

## 💻 Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### 🐧 Linux Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/yatriguardian.git
cd yatriguardian

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🍎 macOS Setup
```bash
# Install Node.js using Homebrew (if not installed)
brew install node

# Clone the repository
git clone https://github.com/yourusername/yatriguardian.git
cd yatriguardian

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### 🪟 Windows Setup
```powershell
# Clone the repository
git clone https://github.com/yourusername/yatriguardian.git
cd yatriguardian

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development URLs
- **Development Server**: http://localhost:5173
- **Preview Server**: http://localhost:4173

## 🚀 Production Deployment

### GitHub Pages Deployment

#### Method 1: Automatic Deployment (Recommended)
The project includes GitHub Actions workflow for automatic deployment.

1. **Push to main branch**:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. **GitHub Actions will automatically**:
   - Build the project
   - Deploy to `gh-pages` branch
   - Make it live at `https://yourusername.github.io/yatriguardian`

#### Method 2: Manual Deployment
```bash
# Build the project
npm run build

# Install gh-pages (if not installed)
npm install -g gh-pages

# Deploy to GitHub Pages
gh-pages -d dist
```

### Custom Domain Setup
1. Add `CNAME` file in `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## ⚙️ GitHub Actions Setup

### 1. Create Workflow File
The workflow file already exists at `.github/workflows/deploy.yml`

### 2. Repository Settings
1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Set **Source** to "Deploy from a branch"
4. Select **Branch**: `gh-pages`
5. Select **Folder**: `/ (root)`

### 3. Required Permissions
Ensure GitHub Actions has write permissions:
1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"

### 4. Environment Variables (if needed)
If you need environment variables:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add repository secrets as needed

### 5. Workflow Triggers
Current workflow triggers on:
- Push to `main` branch
- Manual trigger via GitHub UI

## 📦 Build Scripts

```json
{
  "scripts": {
    "dev": "vite",                    // Start development server
    "build": "vite build",            // Build for production
    "lint": "eslint .",               // Run ESLint
    "preview": "vite preview"         // Preview production build
  }
}
```

## 🔍 Troubleshooting

### Common Issues

1. **Build Fails**:
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **GitHub Pages Not Updating**:
   - Check GitHub Actions tab for build errors
   - Ensure `gh-pages` branch exists
   - Verify repository settings

3. **Images Not Loading**:
   - Check image paths (use `/` for public folder)
   - Ensure images are in `public/` directory

4. **WhatsApp Links Not Working**:
   - Verify phone number format: `919920928938`
   - Check URL encoding in contact forms

## 📄 License
This project is proprietary software for Yatri Visa Consultant.

## 🤝 Contributing
This is a private project. For any changes or updates, please contact the development team.

## 📞 Support
For technical support or questions about this project:
- **Email**: yatrivisaconsultant@gmail.com
- **Phone**: +91 9920-928-938

---

**Last Updated**: December 2024