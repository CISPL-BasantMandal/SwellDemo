'use client';

import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export default function Home() {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            let data = await fetch('/api/product/listing');
            let result = await data.json();
            setLoading(false);
            setProducts(result.data.results);
        }
        fetchProducts();
    }, []);

    return (
        <>
            <div>
                <h1 className="text-3xl font-medium p-5 mb-2">Products from Swell</h1>
            </div>

            <ul className="flex flex-wrap  gap-8">
                {loading && (
                    <>
                        <p className="w-full text-center">Loading Products...</p>
                        <div className="flex flex-wrap h-screen  mx-auto  gap-8">
                            {/* <span className="loading loading-bars loading-lg"></span> */}
                            <div className="skeleton w-96 h-72 shadow-xl"></div>
                            <div className="skeleton  w-96 h-72  shadow-xl"></div>
                            <div className="skeleton w-96 h-72  shadow-xl"></div>
                        </div>
                    </>
                )}
                {products &&
                    products.map((product) => (
                        <li key={nanoid()} className="card bg-base-100 w-96 shadow-xl hover:scale-105">
                            <Link href={'/product/' + product.slug}>
                                <figure>
                                    <Image
                                        src={product.images[0].file.url}
                                        alt={product.name}
                                        width={180}
                                        height={30}
                                        className="max-w-sm rounded-lg shadow-2xl h-52 m-3"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{product.name}</h2>
                                    <p className="line-clamp-3">{product.description}</p>

                                    <p className=" mt-2 text-center">
                                        Price -
                                        <span className="ml-1 text-red-500 font-medium">
                                            {new Intl.NumberFormat('en-IN', {
                                                style: 'currency',
                                                currency: product.purchase_options.standard.currency,
                                            }).format(product.price)}
                                        </span>
                                    </p>
                                    <div className="card-actions justify-center mt-4">
                                        <div className="btn btn-primary">View Details</div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
            </ul>
        </>
    );
}
