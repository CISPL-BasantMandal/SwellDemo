'use client';

import { nanoid } from 'nanoid';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function CategoryNav() {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState();
    const [subCategory, setSubCategory] = useState();
    useEffect(() => {
        async function fetchProducts() {
            let data = await fetch('/api/category');
            let result = await data.json();
            if (result.data.results) {
                setSubCategory(result.data.results.filter((data) => data.top_id));
                setCategories(result.data.results.filter((data) => !data.top_id));
            }
            setLoading(false);
        }
        fetchProducts();
    }, []);

    const childCategory = (categoryListing) => {
        let arr = [];

        subCategory.filter((data1) => {
            if (data1.top_id == categoryListing.id) {
                arr.push(data1);
            }
        });

        return arr;
    };
    return (
        <>
            <div className="flex flex-row gap-5 justify-center items-center">
                {loading && (
                    <>
                        <div className="menu flex flex-row gap-5 justify-center items-center p-4">
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                    </>
                )}
                {!loading && (
                    <ul className="menu menu-horizontal px-1">
                        {categories &&
                            categories.map((category) => (
                                <li key={nanoid()}>
                                    <details>
                                        <summary>
                                            {category.top_id ? (
                                                <Link href={category.slug}>{category.name}</Link>
                                            ) : (
                                                category.name
                                            )}
                                        </summary>

                                        {childCategory(category).length > 0 && (
                                            <ul className="p-2">
                                                <li key={nanoid()} className="p-2">
                                                    {childCategory(category).map((data) => data.name)}
                                                </li>
                                            </ul>
                                        )}
                                    </details>
                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default CategoryNav;
