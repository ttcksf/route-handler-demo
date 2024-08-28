import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 2.クッキーを作成(アプリケーションのCookiesを確認)
  const response = NextResponse.next();
  const themeReference = request.cookies.get('theme');
  if (!themeReference) {
    response.cookies.set('theme', 'dark');
  }
  // 3.ヘッダーを作成(ネットワークの/profileをクリックしてヘッダーを確認)
  response.headers.set('custom-header', 'custom-value');
  return response;

  // 1.profileにアクセスしたらトップページにリダイレクト
  // if (request.nextUrl.pathname === '/profile') {
  //   return NextResponse.redirect(new URL('/', request.url));
  // }
}
// どこでミドルウェアを設定したか
export const config = {
  matcher: '/profile',
};
