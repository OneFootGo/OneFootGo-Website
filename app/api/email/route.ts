import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

interface Email {
    email: string;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        // Input validation
        if (!email || typeof email !== 'string') {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Check for duplicate email
        const { data: existingEmail } = await supabase
            .from('waitlist')
            .select('email')
            .eq('email', email)
            .single();

        if (existingEmail) {
            return NextResponse.json(
                { error: 'Email already registered' },
                { status: 409 }
            );
        }

        // Insert new email with timestamp
        const { data, error } = await supabase
            .from('waitlist')
            .insert([
                { 
                    email,
                    created_at: new Date().toISOString()
                }
            ])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to add email to waitlist' },
                { status: 500 }
            );
        }


        return NextResponse.json(
            { 
                message: 'Email added to waitlist successfully',
                data: data[0]
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Error processing waitlist signup:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}