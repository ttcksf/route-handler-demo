import { comments } from './data';
export async function GET() {
  return Response.json(comments);
}
// thunder clientでhttp://localhost:3000/commentsとする
