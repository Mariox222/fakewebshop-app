import Link from 'next/link';
import Image from 'next/image';

import fer_logo_long from '../public/fer_logo.png';
import unizg_logo from '../public/unizglogo.png';

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-center items-center p-4 space-x-4">
        <Link href="https://www.fer.unizg.hr/" target="_blank" rel="noreferrer">
          <Image
            src={fer_logo_long} 
            alt="FER Logo"
          />
        </Link>
        <Link href="https://www.unizg.hr/" target="_blank" rel="noreferrer">
          <Image
            src={unizg_logo} 
            alt="FER Logo"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center p-4 space-x-10">
        <p>Copyright © 2024 Sva prava pridržana</p>
        <Link href="/">
          Home
        </Link>
        <Link href="/about">
          O servisu
        </Link>
      </div>
    </footer>
  );
}