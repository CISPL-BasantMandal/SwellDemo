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
                    <h1 className="text-3xl font-medium p-5  border-b-2 mb-7">
                        Product Details - {productDetails.name}
                    </h1>
                    <div class="grid grid-col-1 sm:grid-cols-2 gap-6">
                        <div>
                            <span className="font-medium text-red-600">Name:</span>
                            <span class="">{productDetails.name}</span>
                        </div>
                        <div>
                            <span className="font-medium text-red-600">SKU:</span>
                            <span class="">{productDetails.sku}</span>
                        </div>
                        <div>
                            <span className="font-medium text-red-600">Image: </span>
                            <Image
                                src={productDetails.images[0].file.url}
                                alt={productDetails.name}
                                width={180}
                                height={30}
                                className="max-w-sm rounded-lg shadow-2xl h-52 m-3"
                            />
                        </div>
                        <div>
                            <span className="font-medium text-red-600">Description: </span>
                            <span class="">{productDetails.description}</span>
                        </div>
                        <div>
                            <span className="font-medium text-red-600">Price : </span>
                            <span class="">
                                {' '}
                                {new Intl.NumberFormat('en-IN', {
                                    style: 'currency',
                                    currency: productDetails.purchase_options.standard.currency,
                                }).format(productDetails.price)}
                            </span>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-error">ADD CART</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Page;
