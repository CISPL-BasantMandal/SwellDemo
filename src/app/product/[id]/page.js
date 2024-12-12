'use client';

import { useParams } from 'next/navigation';

function Page() {
    const params = useParams();
    const id = params?.id;
    return <div>Product Details for - {id}</div>;
}

export default Page;
