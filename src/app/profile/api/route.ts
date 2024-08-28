import { cookies, headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const headerList = headers();
  // 1.Node.jsでクッキーの取得
  // const test = request.cookies.get('test');
  // console.log(test);

  // 2.Next.jsでクッキーの作成
  cookies().set('page', '10');
  // 2.Next.jsでクッキーの取得
  console.log(cookies().get('page'));

  // 1.Node.jsでクッキーの作成
  return new Response('<h1>profile api</h1>', {
    headers: {
      'Content-Type': 'text/html',
      'Set-Cookie': 'test=demo',
    },
  });
}
// http://localhost:3000/profile/apiのGETでResponseをCookieに切り替えて実行
