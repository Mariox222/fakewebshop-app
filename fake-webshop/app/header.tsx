import Link from 'next/link';
import Image from 'next/image';

import fer_logo from '../public/fer_logo.png';

export default function Header() {
  return (
    <header>
      <div className="flex justify-center items-center p-4 space-x-4">
        <Link href="https://www.fer.unizg.hr/" target="_blank" rel="noreferrer">
          <Image
            src={fer_logo} 
            alt="FER Logo"
          />
        </Link>
      </div>
    </header>
  );
}