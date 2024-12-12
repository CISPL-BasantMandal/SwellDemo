'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function Page() {
    const [productDetails, setProductDetails] = useState();
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const id = params?.id;

    useEffect(() => {
        async function getDetails() {
            let data = await fetch('/api/product/detail?slug=' + id);
            let result = await data.json();
            setLoading(false);
            setProductDetails(result.data);
        }
        getDetails(productDetails);

        console.log();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center gap-6">
            {loading && (
                <>
                    <h1 className="text-3xl font-medium p-5 mb-2">Loading Product Details...</h1>
                    <div className="skeleton w-96 h-72 shadow-xl"></div>
                </>
            )}
            {!loading && (
                <>
                    <h1 className="text-3xl font-medium p-5 mb-2">Product Details - {productDetails.name}</h1>
                    <ul className="mt-7 flex flex-col gap-8">
                        <li>
                            <span className="font-medium text-red-600">SKU : </span>
                            {productDetails.sku}
                        </li>
                        <li>
                            <span className="font-medium text-red-600">Image : </span>
                            <Image
                                src={productDetails.images[0].file.url}
                                alt={productDetails.name}
                                width={180}
                                height={30}
                                className="max-w-sm rounded-lg shadow-2xl h-52 m-3"
                            />
                        </li>
                        <li>
                            <span className="font-medium text-red-600">Description : </span>
                            {productDetails.description}
                        </li>
                        <li>
                            <span className="font-medium text-red-600">Price : </span>
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: productDetails.purchase_options.standard.currency,
                            }).format(productDetails.price)}
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
}

export default Page;
