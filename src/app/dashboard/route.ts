// npx create-next-app route-handler-demo
// npm run dev
// http://localhost:3000/hello
export async function GET() {
  return new Response('dashboard');
}
