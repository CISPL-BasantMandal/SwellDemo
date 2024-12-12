import { NextResponse } from 'next/server';
import swell from 'swell-js';

// Initialize client with your store ID and a public key
swell.init(process.env.STORE_ID, process.env.TEST_PUBLIC_KEY);

// Handles GET requests to /api
export async function GET(request) {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');
    const product_details = await swell.products.get(slug);
    return NextResponse.json({ message: 'Product Details', slug, data: product_details });
}
