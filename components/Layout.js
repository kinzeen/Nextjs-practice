// components/Layout.js
// Basic layout is, navigation menu at left side, header at bottom, main contents at center and footer at bottom using next.js and tailwind.


import React, { useState } from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  }

  return (
    <div className="container mx-auto p-4">      
      {/* Header with hambarger menu */}
      <header className="container mx-auto text-white">
        <div class="flex justify-between items-center">
          <h1 className="text-4xl font-bold md:text-xl">My Next.js App</h1>
          <div class="md:hidden flex items-center" onClick={() => menuFunction()}>
            <button>
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
              </svg>
            </button>
          </div>
          <div>
            <ul class="md:flex md:justify-end">
              <li class="border-b md:border-none">
                <Link href="/" class="block px-8 py-2 hover:bg-gray-600 rounded">Home</Link>
              </li>
              <li class="border-b md:border-none">
                <Link href="/about" class="block px-8 py-2 hover:bg-gray-600 rounded">About</Link>
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

// const Layout = ({ children }) => {
//   return (
//     <div className="container mx-auto p-4">
//       {/* Header */}
//       <header className="bg-gray-800 text-white py-4 text-center">
//         <h1 className="text-3xl font-bold">My Next.js App</h1>
//       </header>

//       {/* Main Content */}
//       <main className="mt-4">{children}</main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-2 text-center">
//         &copy; {new Date().getFullYear()} My Next.js App
//       </footer>
//     </div>
//   );
// };

export default Layout;
