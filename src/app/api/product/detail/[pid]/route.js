import swell from 'swell-js';

import { NextResponse } from 'next/server';

// Initialize client with your store ID and a public key
swell.init(process.env.STORE_ID, process.env.TEST_PUBLIC_KEY);

// Handles GET requests to /api
export async function GET(request) {
    console.log(request);
    //const { pid } = request.query;
    //const products = await swell.products.get(pid);

    return NextResponse.json({ message: 'Product Details', data: request.query });
}
