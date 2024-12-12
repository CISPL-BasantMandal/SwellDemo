import { NextResponse } from 'next/server';

// Handles GET requests to /api
export async function GET(request) {
    console.log(request);
    return NextResponse.json({ message: 'Product Details', data: request, query: request.query });
}
