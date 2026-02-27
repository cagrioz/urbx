import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const COMING_SOON_MODE = true;

export function middleware(request: NextRequest) {
    if (!COMING_SOON_MODE) {
        return NextResponse.next();
    }

    if (request.nextUrl.pathname === '/') {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = '/';

    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)'],
};
