import { NextRequest } from 'next/server';
import { comments } from './data';

// requestの型名をNextRequestにしておく
export async function GET(request: NextRequest) {
  // URLのパラメーター群にアクセスして定数に再代入しておく
  const searchParams = request.nextUrl.searchParams;
  console.log(searchParams);
  // getメソッドを使って"query"という部分の値（検索キーワード）を取り出す
  const query = searchParams.get('query');
  console.log(query);
  // データの中からquery（検索キーワード）に一致するものを探す
  const filtered = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  // return Response.json(comments);

  return Response.json(filtered);
}
export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  });
}
// thunder clientでhttp://localhost:3000/commentsとする
// postにしてbodyから{"text": "new comments"}を作成して送信
