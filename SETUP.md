# 🎾 The Cage Padel Trib - Setup Guide

## ⚡ Quick Start (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

Done! You now have a fully functional website running locally.

---

## 🎯 Customization Checklist

### Phase 1: Brand & Content (Essential)
Priority: **MUST DO**

- [ ] **Company Info**
  - File: `components/Navigation.tsx` & `components/Footer.tsx`
  - Replace: Logo text, company name, contact details
  - Replace: Social media links

- [ ] **Homepage Copy**
  - File: `app/page.tsx`
  - Replace: Hero headline, subheadline, CTA text
  - Replace: "Why Choose Us" descriptions
  - Replace: Testimonial quotes and names
  - Replace: Membership pricing and benefits
  - Replace: Product names and prices

- [ ] **Contact Information**
  - File: `components/Footer.tsx` & `app/contact/page.tsx`
  - Replace: Address
  - Replace: Phone numbers
  - Replace: Email address
  - Replace: Operating hours

- [ ] **Team Information**
  - File: `app/team/page.tsx`
  - Replace: Team member names, roles, bios
  - Replace: Team member photos
  - Replace: Email addresses
  - Replace: LinkedIn profiles

### Phase 2: Visuals (Important)
Priority: **HIGH**

- [ ] **Logo & Branding**
  - Add logo in `public/` folder
  - Update favicon in `app/layout.tsx`
  - Replace "T" icon in Navigation with actual logo

- [ ] **Images**
  - Replace court photos (currently from Unsplash)
  - Replace team member photos
  - Replace product images
  - Replace about page images
  - Replace hero background imagery

- [ ] **Colors (Optional but Recommended)**
  - File: `tailwind.config.ts`
  - Adjust brand colors to match your logo
  - Current palette: Green (#10B981), Teal (#06B6D4), Gold (#F59E0B)

### Phase 3: Integrations (Important)
Priority: **HIGH**

- [ ] **Playtomic Booking**
  - File: `app/booking/page.tsx`
  - Get your Playtomic venue URL
  - Replace iframe `src` attribute
  - Test booking widget functionality

- [ ] **Contact Form**
  - File: `app/contact/page.tsx`
  - Choose email service (Formspree recommended)
  - Update form submission handler
  - Add environment variables in `.env.local`

- [ ] **Analytics**
  - File: `app/layout.tsx`
  - Add Google Analytics ID
  - Add any other tracking tools

### Phase 4: E-Commerce (Optional)
Priority: **MEDIUM**

Choose one approach:

**Option A: External Shop Link** (Fastest)
- Update shop link in Navigation
- Link to external e-commerce platform

**Option B: Shopify Integration**
- Connect Shopify store
- Embed buy buttons in `app/shop/page.tsx`

**Option C: Stripe Custom Shop**
- Implement cart functionality
- Connect Stripe for payments

### Phase 5: SEO & Publishing (Before Launch)
Priority: **HIGH**

- [ ] **SEO Setup**
  - File: `app/layout.tsx`
  - Update meta title and description
  - Add Open Graph images
  - Create `public/sitemap.xml`
  - Create `public/robots.txt`

- [ ] **Domain & Hosting**
  - Buy domain (e.g., cagepadeltrib.com)
  - Deploy to Vercel, Netlify, or your own server
  - Configure DNS records
  - Set up SSL certificate

- [ ] **Analytics & Monitoring**
  - Set up Google Search Console
  - Set up Google Analytics
  - Monitor performance

---

## 📁 Project Structure

```
cage-padel-trib-website/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with navigation/footer
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── courts/page.tsx          # Courts showcase
│   ├── booking/page.tsx         # Playtomic booking widget
│   ├── shop/page.tsx            # Product shop
│   ├── team/page.tsx            # Team & coaching
│   ├── about/page.tsx           # About & mission
│   └── contact/page.tsx         # Contact form
│
├── components/                   # Reusable React components
│   ├── Navigation.tsx           # Header navigation
│   ├── Footer.tsx               # Footer
│   ├── HeroSection.tsx          # Homepage hero
│   ├── CourtCard.tsx            # Court showcase card
│   ├── TestimonialCard.tsx      # Testimonial card
│   ├── MembershipCard.tsx       # Membership tier card
│   └── ProductCard.tsx          # Shop product card
│
├── public/                       # Static assets
│   ├── favicon.ico              # EDIT ME: Add your favicon
│   └── ...                      # Images, fonts
│
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript config
├── package.json                 # Dependencies
├── next.config.js               # Next.js config
├── postcss.config.js            # PostCSS config
│
├── README.md                    # Full documentation
├── SETUP.md                     # This file
├── .env.example                 # Environment variables template
└── .gitignore                   # Git ignore file
```

---

## 🎨 Design Customization

### Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  brand: {
    'primary': '#10B981',        // Court green
    'secondary': '#06B6D4',      // Court teal
    'accent': '#F59E0B',         // CTA gold
    'accent-alt': '#FF6B35',     // Dynamic orange
    'dark': '#1F2937',           // Text/headers
    'light': '#F9FAFB',          // Backgrounds
    'text': '#111827',           // High contrast
    'text-muted': '#6B7280',     // Secondary text
  }
}
```

### Typography
Edit `tailwind.config.ts` and `app/globals.css`:
```ts
fontFamily: {
  display: ['Poppins', 'system-ui', 'sans-serif'],      // Headlines
  body: ['Plus Jakarta Sans', '-apple-system', ...],    // Body text
  mono: ['Space Mono', 'monospace'],                    // Stats
}
```

### Spacing & Layout
Edit `tailwind.config.ts`:
```ts
spacing: {
  'xs': '8px',      // Small elements
  'sm': '16px',     // Component padding
  'md': '24px',     // Medium spacing
  'lg': '32px',     // Large spacing
  'xl': '48px',     // Extra large
  '2xl': '64px',    // 2x large
  '3xl': '80px',    // Section padding
}
```

---

## 🚀 Deployment

### Vercel (Recommended - Free tier available)

1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repo
4. Click "Deploy"
5. Set environment variables (if needed)

**Pros**: Free, automatic deployments, fast, built for Next.js

### Netlify

1. Build: `npm run build`
2. Connect Git repo
3. Set build command: `npm run build`
4. Set publish directory: `.next`

**Pros**: Free, good support, built-in CMS integration

### Traditional Server (VPS, etc.)

```bash
# On your server:
npm install
npm run build
npm run start

# Use PM2 to keep it running:
npm install -g pm2
pm2 start npm --name "cage-padel" -- start
pm2 startup
pm2 save
```

---

## 📱 Testing Checklist

Before launching:

- [ ] **Desktop** - All pages load correctly
- [ ] **Mobile** - Responsive design works
- [ ] **Tablet** - Layout scales properly
- [ ] **Forms** - Contact form works
- [ ] **Booking** - Playtomic widget loads
- [ ] **Links** - All internal/external links work
- [ ] **Images** - All images load
- [ ] **Speed** - Pages load within 3 seconds
- [ ] **SEO** - Metadata looks correct

Run Lighthouse audit:
```bash
# In Chrome DevTools: F12 → Lighthouse → Analyze
```

---

## 🔧 Common Customizations

### Change the accent color on buttons

File: `tailwind.config.ts`
```ts
'accent': '#FF6B35',  // Change this hex code
```

### Add your logo

1. Save logo as PNG in `public/logo.png`
2. Update `components/Navigation.tsx`:
```tsx
<Image src="/logo.png" alt="Logo" width={40} height={40} />
```

### Update hero image

File: `components/HeroSection.tsx`
```tsx
<img
  src="YOUR_IMAGE_URL"  // Replace this
  alt="Padel Court"
  className="..."
/>
```

### Add Google Analytics

File: `app/layout.tsx`
```tsx
<script async src={`https://www.googletagmanager.com/gtag/js?id=GA_ID`} />
<script dangerouslySetInnerHTML={{ __html: `...` }} />
```

---

## 🆘 Troubleshooting

### "npm install fails"
```bash
rm -rf node_modules package-lock.json
npm install
```

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001  # Use different port
```

### "Images not loading"
- Ensure images are in `public/` folder
- Check file paths (case-sensitive on Linux/Mac)
- Try absolute URLs for external images

### "Playtomic widget not showing"
- Verify your Playtomic venue URL is correct
- Check browser console for errors (F12)
- Ensure iframe origin is allowed in CORS

### "Form submissions not working"
- Check environment variables in `.env.local`
- Verify email service credentials
- Test with browser console (F12)

---

## 📞 Support

For issues or questions:
1. Check the full README.md
2. Review Next.js docs: https://nextjs.org/docs
3. Contact: hello@cagepadeltrib.com

---

## ✅ Pre-Launch Checklist

- [ ] All "EDIT ME" comments addressed
- [ ] Playtomic booking widget integrated
- [ ] Contact form working
- [ ] All images replaced with actual photos
- [ ] Social media links updated
- [ ] Analytics set up
- [ ] Domain purchased and DNS configured
- [ ] Site tested on desktop, tablet, mobile
- [ ] Lighthouse scores acceptable
- [ ] SSL certificate enabled (HTTPS)
- [ ] Deployed and live

---

**You're all set! Build something amazing! 🚀**
