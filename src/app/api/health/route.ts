// Health check endpoint for Docker
import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'videoai'
  });
}