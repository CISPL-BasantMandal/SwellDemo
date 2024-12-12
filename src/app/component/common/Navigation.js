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
                <ul className="menu menu-horizontal flex gap-5 px-1 text-xs uppercase">
                    <li>
                        <Link href="/auth/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                        <Link href="/cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
