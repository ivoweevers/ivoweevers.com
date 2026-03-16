export async function GET() {
  const content = `# ivoweevers.com

## About
Ivo Weevers is an author, entrepreneur, and digital product builder.
This is his personal website featuring his book, articles, and services.

## Pages
- / — Homepage with hero, services overview, and newsletter signup
- /pocket-winners — Dedicated page for the book "Pocket Winners" about building successful mobile apps
- /my-story — Ivo's biography and personal journey
- /articles — Collection of articles on entrepreneurship, mobile apps, and digital products
- /contact — Contact form for inquiries and collaboration

## Book
"Pocket Winners" is a guide to turning app ideas into successful mobile products.

## Services
- Consulting: Strategic advice on mobile app development and go-to-market
- Speaking: Keynotes and workshops on entrepreneurship and the app economy
- Mentoring: One-on-one guidance for founders and product teams

## Contact
Website: https://www.ivoweevers.com
LinkedIn: https://linkedin.com/in/ivoweevers
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
