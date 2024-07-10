import { Client } from 'pg';

export async function POST(request) {
  const { email } = await request.json();
  console.log('Received email:', email); // Log the received email

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
    });
  }

  const client = new Client({
    connectionString: process.env.POSTGRES_URL, // Ensure this environment variable is set in your Vercel dashboard
  });

  try {
    await client.connect();
    console.log('Connected to database'); // Log database connection

    const res = await client.query('INSERT INTO emails (email) VALUES ($1) RETURNING *', [email]);
    console.log('Insert result:', res.rows[0]); // Log the result of the insert operation

    await client.end();
    console.log('Database connection closed'); // Log the closure of the database connection

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