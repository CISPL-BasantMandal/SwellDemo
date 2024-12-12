// utils.js
// Get Products

import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';

async function getProducts() {
    let data = await fetch('/api/product');
    let products = await data.json();
    return products.data.results;
}

export default async function Home() {
    let data = await fetch('http://localhost:3000/api/product');
    let result = await data.json();
    const products = result.data.results;

    return (
        <>
            <ul className="flex flex-wrap gap-8">
                {products.map((product) => (
                    <li key={nanoid()} className="card bg-base-100 w-96 shadow-xl hover:scale-105">
                        <Link href={'/product/' + product.sku}>
                            <figure>
                                <Image
                                    src={product.images[0].file.url}
                                    alt="Next.js logo"
                                    width={180}
                                    height={30}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>{product.description}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}
