import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {

  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <nav className="bg-gray-900 shadow-lg shadow-white text-white flex justify-between items-center px-4 h-16">
      <div className="logo font-bold text-lg flex items-center gap-2">
        <img src="tea.gif" width={44} alt="Logo" />
        <span>Get Me a Chai!</span>
      </div>
      {/* <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}

<div>
  <Link href={"/login"}>
    <button
      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 
      hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 
      dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 
      text-center me-2 mb-2"
    >
      Login
    </button>
  </Link>
</div>

    </nav>
  );
};

export default Navbar;
