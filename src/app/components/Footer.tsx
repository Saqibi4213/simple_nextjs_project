import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {}
        <div className="text-center">
          <p className="text-xs md:text-sm mb-6">
            &copy; {new Date().getFullYear()} My Pets Clinic. All rights reserved.
          </p>
          
          {}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
            <Link href="tel:+1234567890" className="flex items-center space-x-2 hover:underline">
              <FaPhone className="text-xl" />
              <span>(+123) 456-7890</span>
            </Link>
            <Link href="mailto:info@mypetsclinic.com" className="flex items-center space-x-2 hover:underline">
              <FaEnvelope className="text-xl" />
              <span>info@mypetsclinic.com</span>
            </Link>
          </div>

          {}
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook className="text-2xl" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter className="text-2xl" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram className="text-2xl" />
            </Link>
          </div>

          {}
          <div className="flex justify-center mt-6">
            <Image
              src="/images/petlogo.png"
              alt="Pet Care Logo"
              width={100}
              height={100}
              className="rounded-full border-4 border-black shadow-lg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
