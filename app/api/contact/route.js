import { Client } from 'pg';

export async function POST(request) {
  const { name, email, phone, subject, message } = await request.json();
  console.log('Received contact form submission:', { name, email, phone, subject, message });

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Name, email, and message are required' }), {
      status: 400,
    });
  }

  const client = new Client({
    connectionString: process.env.POSTGRES_URL, // Ensure this environment variable is set in your Vercel dashboard
  });

  try {
    await client.connect();
    console.log('Connected to database');

    const res = await client.query(
      'INSERT INTO contact (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, subject, message]
    );
    console.log('Insert result:', res.rows[0]);

    await client.end();
    console.log('Database connection closed');

    return new Response(JSON.stringify({ message: 'Contact form submitted successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error saving contact form submission:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    });
  }
}