# The Cage Padel Trib - Website

🎾 A modern, professional website for The Cage Padel Trib - Singapore's premier padel facility.

**Live URL**: [cagepadeltrib.com](https://cagepadeltrib.com)

## 📋 Features

✅ **Multi-Page Site**
- Home (Hero, Why Us, Courts Showcase, Testimonials, Membership, Shop Teaser)
- Courts & Facilities (Interactive court showcase)
- Book & Pricing (Playtomic embedded booking widget)
- Shop (Product grid with categories and filters)
- Team & Coaching Programs
- About (Story, Mission, Values, Stats)
- Contact (Contact form, Map, FAQ)

✅ **Modern Design**
- Contemporary athletic aesthetic with vibrant court greens
- Smooth animations (Framer Motion)
- Fully responsive mobile-first design
- Distinctive typography (Poppins + Plus Jakarta Sans)
- Premium color system with gradients and effects

✅ **Conversion Optimized**
- Clear CTAs throughout (Book Now, Shop, Membership)
- Playtomic booking widget integration
- Multiple conversion funnels for different audience segments
- Testimonials and social proof
- Trust-building content (Team, Facilities, Values)

✅ **Technical Excellence**
- Next.js 14 (React 18, TypeScript)
- Tailwind CSS with custom design tokens
- Fully typed with TypeScript
- Production-ready code structure
- SEO-friendly metadata

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd cage-padel-trib-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

## 📝 Customization Guide

### 1. **Brand Info & Content**
All content marked with `<!-- EDIT ME: ... -->` comments needs to be replaced:

- **Navigation & Footer**: Update links, contact info, social media
- **Homepage**: Replace placeholder text with your actual copy
- **Courts**: Update court names, pricing, specs
- **Team**: Add actual team member photos, bios, roles
- **Products**: Add your shop products with images and pricing
- **Contact Info**: Phone, address, hours, email

### 2. **Playtomic Integration**
Update the booking widget in `app/booking/page.tsx`:

```tsx
{/* EDIT ME: Replace with actual Playtomic iframe */}
<iframe
  src="https://playtomic.io/YOUR-VENUE-URL"
  width="100%"
  height="600"
  frameBorder="0"
  className="rounded-lg"
  title="Playtomic Booking"
/>
```

Get your Playtomic venue URL from your Playtomic dashboard.

### 3. **Images**
Replace placeholder images:
- Hero section background
- Court photos
- Team member photos
- Product images
- Favicon in `public/`

Current images are from `unsplash.com`. Replace with your actual photography.

### 4. **Colors & Branding**
Customize the color system in `tailwind.config.ts`:

```ts
colors: {
  brand: {
    'primary': '#10B981',      // Change your primary green
    'secondary': '#06B6D4',    // Change your secondary teal
    'accent': '#F59E0B',       // Change your CTA gold
    // ... other colors
  }
}
```

### 5. **Contact Form**
The contact form in `app/contact/page.tsx` is currently a demo. To make it functional:

**Option A: Using Formspree** (Recommended)
```bash
npm install @formspree/react
```

```tsx
import { useForm } from '@formspree/react';

const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
```

[Get your Formspree ID](https://formspree.io)

**Option B: Using your own backend**
Point the form to your API endpoint and handle submissions server-side.

### 6. **Email Service**
For automated emails (confirmations, inquiries):
- SendGrid: `npm install @sendgrid/mail`
- Resend: `npm install resend`
- Firebase: Built-in email functions

## 🛒 Shop / E-Commerce Setup

### Option 1: Shopify Integration (Recommended)
```bash
npm install @shopify/buy
```

Connect your Shopify store and embed the buy button.

### Option 2: Stripe Integration
```bash
npm install @stripe/react-js stripe
```

Build a custom cart and checkout flow.

### Option 3: External Shop Link
Simply link to an external shop URL in the Shop page.

## 📧 SEO & Analytics

### Add Google Analytics
Update `app/layout.tsx`:

```tsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_ID');
    `
  }}
/>
```

### Sitemap & Robots.txt
Add `public/sitemap.xml` and `public/robots.txt` for better SEO.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Connect to Vercel:
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy"

3. Set environment variables in Vercel dashboard if needed

### Deploy to Netlify

```bash
npm run build
# Deploy the .next folder via Netlify
```

### Deploy to Your Own Server

```bash
npm run build
npm run start
```

Then use PM2 or similar to manage the process:
```bash
npm install -g pm2
pm2 start npm --name "cage-padel" -- start
```

## 📦 Build & Production

```bash
# Build for production
npm run build

# Start production server
npm start

# Export as static HTML (optional)
npm run export
```

## 🔐 Security Checklist

- [ ] Update CSP headers in `next.config.js`
- [ ] Add HTTPS certificate
- [ ] Validate all form inputs server-side
- [ ] Secure API keys in environment variables
- [ ] Add rate limiting to contact form
- [ ] Enable CORS appropriately
- [ ] Regular dependency updates

## 📱 Responsive Design

Tested and optimized for:
- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1280px+)
- ✅ Large screens (1920px+)

## 🎨 Design System

### Typography
- **Display**: Poppins (bold, geometric, athletic)
- **Body**: Plus Jakarta Sans (clean, approachable)
- **Mono**: Space Mono (stats, labels)

### Colors
- Primary Green: `#10B981` (court green)
- Secondary Teal: `#06B6D4` (court teal)
- Accent Gold: `#F59E0B` (CTAs)
- Dark Navy: `#1F2937` (text, headers)

### Spacing
- Base: 8px increments
- Sections: 64-80px padding
- Container: Max 1280px

## 📊 Performance

- ✅ Optimized images (next/image)
- ✅ Code splitting with dynamic imports
- ✅ CSS utility-first with Tailwind
- ✅ Minimal JavaScript bundles
- ✅ Mobile-first responsive design

Current Lighthouse scores target:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📄 License

© 2024 The Cage Padel Trib. All rights reserved.

## 📧 Support

For questions or issues:
- Email: hello@cagepadeltrib.com
- Phone: +65 XXXX XXXX
- Website: [cagepadeltrib.com](https://cagepadeltrib.com)

---

**Built with Next.js, React, TypeScript, and Tailwind CSS** 🚀

**Design Approach**: Dynamic Contemporary Sports aesthetic - energetic, premium, community-focused.
