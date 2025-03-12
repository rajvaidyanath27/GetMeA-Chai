"use client"; // Required if using Next.js App Router (app directory)
import Link from "next/link";

import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";
const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-900 shadow-lg shadow-white text-white flex justify-between items-center px-4 h-16">
      <div className="logo font-bold text-lg flex items-center gap-2">
        <img src="tea.gif" width={44} alt="Logo" />
        <span>Get Me a Chai!</span>
      </div>

      <div>
        {session ? (
          <>
            Signed in as {session.user.email} <br />
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          </>
        ) : (
          <Link href="/login">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;