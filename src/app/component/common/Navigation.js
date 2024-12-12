import Image from 'next/image';
import Link from 'next/link';
import Search from './Search';

function Navigation() {
    return (
        <div className="mt-3 flex flex-wrap items-center justify-center gap-6 px-3 py-2 text-sm sm:justify-between">
            <div>
                <Link href="/">
                    <Image src="/next.svg" alt="Next.js logo" width={180} height={30} priority />
                </Link>
            </div>
            <div className="w-full sm:basis-2/3">
                <Search />
            </div>
            <div>
                <ul className="menu menu-horizontal flex items-center gap-5 px-1 text-xs uppercase">
                    <li>
                        <Link href="/auth/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            <div tabIndex={0} role="button" className="">
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span className="badge badge-sm indicator-item">0</span>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
