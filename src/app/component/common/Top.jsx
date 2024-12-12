import Link from 'next/link';

function Top() {
    return (
        <div className="flex gap-2 px-4 py-4 item-center text-gray-700 w-full justify-between text-xs font-semibold">
            <div className="basis-1/4">
                <ul className="flex flex-wrap sm:flex-row gap-2 justify-start ">
                    <li className="border-r-2 pr-3">+91 123 456 789</li>
                    <li>+91 123 456 789</li>
                </ul>
            </div>
            <div className="basis-2/4 text-center text-rose-600 animate-pulse">Swell Demo Store</div>
            <div className=" basis-1/4">
                <ul className="flex gap-5 justify-end text-center pr-2">
                    <li>
                        <Link href="/track/order">Track Order</Link>
                    </li>
                    <li>
                        <Link href="https://github.com/CISPL-BasantMandal/SwellDemo" target="_blank">
                            Get Code
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Top;
