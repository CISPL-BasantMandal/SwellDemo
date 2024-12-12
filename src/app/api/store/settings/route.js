import swell from 'swell-js';

import { NextResponse } from 'next/server';

// Initialize client with your store ID and a public key
swell.init(process.env.STORE_ID, process.env.TEST_PUBLIC_KEY);

// Handles GET requests to /api
export async function GET(request) {
    const settings = await swell.settings.get();
    return NextResponse.json({ message: 'Category Listing', data: settings });
}

// Handles POST requests to /api
export async function POST(request) {
    const settings = await swell.settings.get();
    return NextResponse.json({ message: 'Category Listing', data: settings });
}
