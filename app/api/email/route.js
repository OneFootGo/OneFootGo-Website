
import { Client, Client } from '@vercel/postgres';


export async function POST(request) {
  const { email } = await request.json();
  console.log('Recieved Email:', email);

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
    });
  }

  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    });

  try {
    await client.connect();
    const res = await client.query('INSERT INTO emails (email) VALUES ($1) RETURNING *', [email]);
    await client.end();

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
