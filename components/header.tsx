"use client";

import { useState } from "react";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";

export default function Header() {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-4 bg-gray-500 shadow-md">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link className="text-2xl font-extrabold text-black" href="/">
          Quollex
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden">
        <button
          className="text-blue-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full sm:w-auto sm:flex sm:items-center sm:space-x-4 mt-4 sm:mt-0`}
      >
        {/* Search Form */}
        <form
          action="/search"
          className="flex w-full sm:w-auto items-center space-x-2"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for Products"
            className="w-full sm:w-80 bg-gray-100 text-gray-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="hidden sm:block px-4 py-2 bg-black text-white rounded-md hover:bg-gray-400"
          >
            Search
          </button>
        </form>

        {/* Basket */}
        <Link
          href="/basket"
          className="flex items-center space-x-2 bg-black hover:bg-gray-400 text-white px-4 py-2 rounded-md"
        >
          <TrolleyIcon className="w-5 h-5" />
          <span>My Basket</span>
        </Link>

        {/* User Section */}
        <ClerkLoaded>
          {user ? (
            <div className="flex items-center space-x-4">
              <Link
                href="/orders"
                className="flex items-center space-x-2 bg-black hover:bg-gray-400 text-white px-4 py-2 rounded-md"
              >
                <PackageIcon className="w-5 h-5" />
                <span>My Orders</span>
              </Link>
              <div className="flex items-center space-x-2">
                <UserButton />
                <div className="hidden sm:block text-xs">
                  <p className="text-gray-400">Welcome Back</p>
                  <p className="font-bold">{user.fullName}!</p>
                </div>
              </div>
            </div>
          ) : (
            <SignInButton mode="modal" />
          )}
        </ClerkLoaded>
      </nav>
    </header>
  );
}


