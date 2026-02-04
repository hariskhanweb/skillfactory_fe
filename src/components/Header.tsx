"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  { name: "Placement & Careers", href: "/placement-careers" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // If it's an anchor link on the same page, handle smooth scroll
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
    // For regular page links, let Next.js handle navigation
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full z-50 p-4 bg-brand-50/60">
      <div className="max-w-7xl mx-auto">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between bg-primary/10 p-4 rounded-2xl">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Solar Vendor Logo"
              width={180}
              height={50}
              className="h-8 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-600 hover:text-primary font-medium transition-colors text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <Link href="/contact" className="hidden md:block">
            <button className="bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-brand-600 transition-colors cursor-pointer text-sm lg:text-base font-semibold">
              Get Started
            </button>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6 text-brand-400" />
            ) : (
              <Menu className="h-6 w-6 text-brand-500" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 flex flex-col items-center gap-4 bg-brand-50 p-6 rounded-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-600 font-medium hover:text-primary transition-colors w-full text-center py-2"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-brand-600 transition-colors font-semibold">
                Get Started
              </button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
