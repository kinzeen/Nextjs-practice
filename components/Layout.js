// components/Layout.js
// Basic layout is, navigation menu at left side, header at bottom, main contents at center and footer at bottom using next.js and tailwind.


import React, { useState } from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="container mx-auto p-4 h-screen w-full">
      {/* Header with hambarger menu */}
      <header className="container mx-auto text-white">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold md:text-xl self-start">My Next.js App</h1>
          <div className="md:hidden flex items-center  justify-end">
            <button onClick={() => setOpenMenu(!openMenu)}>
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              </svg>
            </button>
          </div>
          <div className="">
            <ul className={`md:flex md:justify-end ${openMenu ? "block" : "hidden"}`}>
              <li className="border-b md:border-none">
                <Link href="/" className="block px-8 py-2 hover:bg-gray-600 rounded">Home</Link>
              </li>
              <li className="border-b md:border-none">
                <Link href="/spla3" className="block px-8 py-2 hover:bg-gray-600 rounded">Spla3</Link>
              </li>
              <li className="border-b md:border-none">
                <Link href="/about" className="block px-8 py-2 hover:bg-gray-600 rounded">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-2 text-center">
        &copy; {new Date().getFullYear()} My Next.js App
      </footer>
    </div>
  )
}

export default Layout;
