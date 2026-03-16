# ivoweevers.com

Personal website for Ivo Weevers — author, entrepreneur, and digital product builder.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

1. Clone the repository:

```bash
git clone https://github.com/ivoweevers/ivoweevers.com.git
cd ivoweevers.com
```

2. Install dependencies:

```bash
npm install
```

3. Create your environment file:

```bash
cp .env.local.example .env.local
```

4. Add your API keys to `.env.local`:
   - `RESEND_API_KEY` — get one at [resend.com](https://resend.com)
   - `RESEND_FROM_EMAIL` — your verified sender email
   - `CONTACT_EMAIL` — where contact form submissions are delivered

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/                          # Next.js App Router pages
    api/                        # API routes (newsletter, contact)
    articles/                   # Article listing and [slug] pages
    contact/                    # Contact page
    my-story/                   # Biography page
    pocket-winners/             # Book page
    readers/bonus-chapter/      # Unlisted bonus content
  components/
    ui/                         # shadcn/ui components
    layout/                     # Header, Footer, Container, MobileNav
    forms/                      # NewsletterForm, ContactForm
    seo/                        # JSON-LD structured data components
  sections/                     # Page-level section blocks
    home/                       # HeroSection, WorkWithMeSection, etc.
  lib/                          # Utilities, validation, config
  types/                        # Shared TypeScript types
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment on Vercel

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Add the environment variables (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `CONTACT_EMAIL`) in the Vercel project settings.
4. Deploy. Vercel auto-detects Next.js and configures the build.

Every push to `main` triggers an automatic deployment.

## SEO & Structured Data

- Per-page metadata via Next.js Metadata API
- JSON-LD schemas: Person, Book, Article, WebSite, BreadcrumbList
- Auto-generated `sitemap.xml` and `robots.txt`
- `/llms.txt` endpoint for LLM crawlers
- Semantic HTML throughout

## i18n (Prepared)

The site is prepared for future translations. See `src/lib/i18n.ts` for the migration guide. English content lives at the root URL; future locales will be served at `/{locale}/` (e.g., `/it/` for Italian).

## Accessibility

- WCAG AA target
- Skip-to-content link
- Focus-visible outlines on all interactive elements
- ARIA labels on navigation, forms, and icon-only buttons
- Keyboard-navigable mobile menu
- Form error announcements via aria attributes
