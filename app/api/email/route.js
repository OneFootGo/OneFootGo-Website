import {kv} from '@vercel/kv';


export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
    });
  }

  try {
    await kv.set(`email:${email}`, { email });

    return new Response(JSON.stringify({ message: 'Email received successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error saving email:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}
