// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
        <img src="https://www.rentify.io/images/logo/rentify.svg" alt="JustRent Logo" className="w-[200px] h-[150px]" />
        </div>
        <div className="flex space-x-4">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/status" className="hover:underline">
            Status
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
