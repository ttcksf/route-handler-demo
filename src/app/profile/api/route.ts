import { headers } from 'next/headers';
import { NextRequest } from 'next/server';

// 引数を追加しておく
export async function GET(request: NextRequest) {
  // 1.リクエスト（受信）のヘッダー情報を取得する方法
  // const requestHeaders = new Headers(request.headers);
  // Thunder ClientのHeadersにAuthorization：Bearer 12345を追加して実行しターミナルを確認する
  // console.log(requestHeaders);
  // Next.jsの機能にも同様のものがある
  const headerList = headers();
  console.log(headerList.get('Authorization'));

  // 2.レスポンス（発信）のヘッダーを設定する方法
  // return new Response('profile api');
  return new Response('<h1>profile api</h1>', {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
