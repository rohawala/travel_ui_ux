import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full shadow-md">
      <nav className="bg-white px-6 flex items-center justify-between">
        <Link href="/">
          <Image src="/mainlogo.png" alt="NormadNautica" width={140} height={100} />
        </Link>

        <ul className="hidden lg:flex gap-8 font-semibold text-gray-800 text-sm tracking-wide">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/trips">TRIPS</Link></li>
          <li><Link href="/about">ABOUT US</Link></li>
          <li><Link href="/contact">CONTACT US</Link></li>
        </ul>
        <Image
          src="/menu.svg"
          alt="menu"
          width={28}
          height={20}
          className="lg:hidden cursor-pointer"
        />
      </nav>
    </header>
  );
};

export default Navbar;