"use client";

import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8 w-auto" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.svg"
        alt="NAVYK"
        width={32}
        height={32}
        className="mr-2"
      />
      <span className="font-bold text-xl text-gray-900 dark:text-white">
        NAVYK
      </span>
    </div>
  );
}

export { Logo }; 