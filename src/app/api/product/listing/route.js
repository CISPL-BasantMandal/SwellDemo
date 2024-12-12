import swell from 'swell-js';

import { NextResponse } from 'next/server';

// Initialize client with your store ID and a public key
swell.init(process.env.STORE_ID, process.env.TEST_PUBLIC_KEY);

// Handles GET requests to /api
export async function GET(request) {
    const products = await swell.products.list({
        limit: 25, // Max. 100
        page: 1,
    });
    return NextResponse.json({ message: 'Product Listing', data: products });
}

// Handles POST requests to /api
export async function POST(request) {
    const products = await swell.products.list({
        limit: 25, // Max. 100
        page: 1,
    });
    return NextResponse.json({ message: 'Product Listing', data: products });
}
