import swell from 'swell-js';

import { NextResponse } from 'next/server';

// Initialize client with your store ID and a public key
swell.init(process.env.STORE_ID, process.env.TEST_PUBLIC_KEY);

// Handles GET requests to /api
export async function GET(request) {
    const category = await swell.categories.list({
        limit: 25,
        page: 1,
    });
    return NextResponse.json({ message: 'Category Listing', data: category });
}

// Handles POST requests to /api
export async function POST(request) {
    const category = await swell.categories.list({
        limit: 25,
        page: 1,
    });
    return NextResponse.json({ message: 'Category Listing', data: category });
}
