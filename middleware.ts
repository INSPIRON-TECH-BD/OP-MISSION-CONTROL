import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl;
    const hostname = req.headers.get('host') || '';

    // 1. Detect if the user is visiting brand.inspiron.tech
    // Also check for localhost with 'brand.' prefix for local development testing
    if (hostname.startsWith('brand.')) {
        // Rewrite the internal path to the (brand) folder
        // Note: Since brand-manual is at /brand-manual, visiting brand.inspiron.tech/ 
        // will rewrite to /brand-manual/ which matches app/(brand)/brand-manual/page.tsx
        return NextResponse.rewrite(new URL(`/brand-manual${url.pathname}`, req.url));
    }

    // 2. Default behavior for inspiron.tech
    return NextResponse.next();
}

// Ensure middleware runs only on relevant paths
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
