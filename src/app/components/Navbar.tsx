import Link from 'next/link';
import Image from 'next/image'; // Import Image component from Next.js

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" passHref>
            <div className="bg-black bg-opacity-40 rounded-full p-1">
              <Image
                src="/images/petlogo.png"
                alt="My Pets Logo"
                width={40}
                height={40}
                className="object-contain rounded-full"
              />
            </div>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
