import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware placeholder for future i18n locale routing.
 *
 * When adding translations:
 * 1. Import locale config from @/lib/i18n
 * 2. Detect locale from Accept-Language header or cookie
 * 3. Redirect to /{locale}/ for non-default locales
 * 4. Keep English (default) at the root URL without /en/ prefix
 */
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes (/api/...)
     * - static files (_next/static, _next/image, favicon.ico, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|llms.txt).*)",
  ],
};
