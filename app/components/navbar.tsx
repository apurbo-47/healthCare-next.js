"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/image/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-194  mt-4 md:mt-6">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between bg-white shadow-lg p-2 text-[#333333] border-none  rounded-xl">
          {/* Logo */}
          <Link href="/">
            <Image className=" w-27 h-11 rounded-2xl" src={logo} alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-base ">
            <li>
              <Link className="hover:text-[#059669]" href="/">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#059669]" href="/mentors">
                Mentorlar
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#059669]" href="/articles">
                Makaleler
              </Link>
            </li>
            <li>
              <Link className="hover:text-[#059669]" href="/community">
                Topluluk
              </Link>
            </li>
          </ul>

          {/* Desktop Button */}
          <button className="hidden md:block cursor-pointer text-white rounded-xl bg-[#059669] hover:bg-green-500 px-2.5 py-3 text-sm font-semibold">
            Bugün Başla
          </button>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden bg-[#059669] text-white px-2 rounded-lg"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white text-black px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/mentors">Mentorlar</Link>
            </li>
            <li>
              <Link href="/articles">Makaleler</Link>
            </li>
            <li>
              <Link href="/community">Topluluk</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
