import Link from "next/link";
import Image from "next/image";
import {FaTelegram, FaWhatsapp} from "react-icons/fa";

const Navbar = () => (
  <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex items-center'>
        <Image
          src='/logo.png'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>
      <div className='flex'>
        <a href="https://wa.me/+79530789994" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 mr-4">
          <FaWhatsapp size={24} />
        </a>
        <a href="https://t.me/+79530789994" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
          <FaTelegram size={24} />
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
