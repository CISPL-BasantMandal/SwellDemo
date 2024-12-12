import Link from 'next/link';

function Top() {
    return (
        <div className="flex gap-2 px-3 py-2 item-center text-gray-700 w-full justify-between text-xs font-semibold">
            <div className="basis-1/4">
                <ul className="flex flex-wrap sm:flex-row gap-2 justify-start ">
                    <li className="border-r-2 pr-3">+91 123 456 789</li>
                    <li>+91 123 456 789</li>
                </ul>
            </div>
            <div className="basis-2/4 text-center text-rose-600">
                <div className=" ">Demo Store (v1.0.1)</div>
            </div>
            <div className=" basis-1/4">
                <ul className="flex gap-2 justify-end text-center">
                    <li>
                        <Link href="/track/order">Track Order</Link>
                    </li>
                    <li>
                        <Link href="/code/repository">Get Code</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Top;
