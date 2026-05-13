"use client";

import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
        isScroll
          ? "bg-opacity-50 backdrop-blur-lg shadow-sm bg-white"
          : ""
      }`}
    >
      <a href="#top" className="w-28 cursor-pointer mr-14"></a>

      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
          isScroll ? "" : "border border-gray-500 rounded-full "
        }`}
      >
        {[
          { href: "#top", label: "Home" },
          { href: "#about", label: "About me" },
          { href: "#services", label: "Services" },
          { href: "#work", label: "My work" },
          { href: "#contact", label: "Contact me" },
        ].map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="relative text-black after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 group relative z-10 overflow-hidden cursor-pointer "
        >
          <span className="relative inline-flex overflow-hidden tracking-wide text-black">
            <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[160%] group-hover:skew-y-12">
              Contact
            </span>
            <span className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
              Contact
            </span>
          </span>
        </a>

        <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image src={assets.menu_black} alt="" className="w-6" />
        </button>
      </div>

      {/* mobile menu */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-[#f5f3f2] transition duration-500"
      >
        <div className="absolute right-6 top-6" onClick={closeMenu}>
          <Image
            src={assets.close_black}
            alt=""
            className="w-5 cursor-pointer"
          />
        </div>

        {[
          { href: "#top", label: "Home" },
          { href: "#about", label: "About me" },
          { href: "#services", label: "Services" },
          { href: "#work", label: "My Work" },
          { href: "#contact", label: "Contact me" },
        ].map(({ href, label }) => (
          <li key={href}>
            <a className="" onClick={closeMenu} href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
