import { comments } from '../data';

// Requestオブジェクトとparamsを引数に受け取るが今回は使わないので_requestとしておく
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find(
    // params.idが文字列のためparseIntで整数変換
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(comment);
}

// GET：http://localhost:3000/comments/1
