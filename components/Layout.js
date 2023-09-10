// components/Layout.js

import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">My Next.js App</h1>
      </header>

      {/* Main Content */}
      <main className="mt-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-2 text-center">
        &copy; {new Date().getFullYear()} My Next.js App
      </footer>
    </div>
  );
};

export default Layout;
