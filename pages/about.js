import React from 'react';
import Link from 'next/link';

// introduce by myself
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p class="space-y-6 py-8 text-base leading-7 text-gray-600">This is the about page</p>
      <p>
        <Link href="/">
          Go home
        </Link>
      </p>
    </div>
  );
}

export default About;
