// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">MyApp</Link>
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
