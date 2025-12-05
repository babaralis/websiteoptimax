import { NextRequest, NextResponse } from 'next/server';
import { submitEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const response = await submitEmail(body);
    const responseData = await response.json().catch(() => ({}));
    
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error('Error in send-email API route:', error);
    return NextResponse.json(
      { 
        status: false,
        error: error instanceof Error ? error.message : 'Failed to send email' 
      },
      { status: 500 }
    );
  }
}
