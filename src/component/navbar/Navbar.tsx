"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { MenuIcon, MountainIcon, SunIcon, XIcon } from '../../../public/icons/Icons';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const session = useSession();
  const { data, status } = session;
  console.log('session', session)
  // Navigation links data
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ];

  const toggleTheme = () => {
    // setTheme(theme === 'dark' ? 'light' : 'dark');
    console.log('Hello Theme')
  };
  if (status === "loading" || !data) {
    return <p>Loading....</p>
  }

  return (
    <header className="bg-black backdrop-blur-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo Section */}
          <div className="flex-shrink-0 items-center ">
            <Link href="/" className="flex items-center gap-2">
              <MountainIcon className="h-6 w-6 text-gray-900 dark:text-white" />
              <h1 className="text-lg font-semibold text-red-600 ">AutoFix <span className="text-lg font-semibold text-white">Garage</span></h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks?.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:border-b border-slate-300 pb-2 ${pathname === link.href ? "text-red-500 border-b border-slate-300" : "text-gray-500 dark:text-gray-300"} `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button, Theme Toggle and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 dark:bg-red-500 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300">Get Appointment
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-300"
              aria-label="Toggle theme"
            >
              <SunIcon className="h-5 w-5" />
              {/* {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )} */}
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:focus:ring-gray-400 transition-colors duration-300"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Login and sign up and logout button */}
          <div>
            {session?.data ? (<div className='flex items-center justify-center gap-x-2 '>
              <Image className='w-10 h-10 rounded-full' src={data?.user?.image || "https://i.ibb.co/bF1kWkS/836.jpg"} alt={data?.user?.name || "User"} width={500} height={500} />
              <button onClick={() => signOut()} className='text-white font-semibold cursor-pointer border border-white rounded-md px-3 py-1'>Log Out</button></div>) : (<Link href={'/login'}>

                <button className='text-white font-semibold cursor-pointer border border-white rounded-md px-3 py-1'>Login</button>
              </Link>)}
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown (Sheet) */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks?.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/" className="w-full mt-2 text-center items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 block transition-colors duration-300">
              Get Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;