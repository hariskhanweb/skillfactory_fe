"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useRef } from "react";
import coursesData from "@/data/courses.json";

const courseLinks = Object.entries(coursesData).map(([, course]) => ({
  name: course.title,
  href: `/courses/${course.slug}`,
}));

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Placement & Careers", href: "/placement-careers" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const coursesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const coursesDropdownRef = useRef<HTMLDivElement>(null);

  const openCourses = () => {
    if (coursesCloseTimer.current) {
      clearTimeout(coursesCloseTimer.current);
      coursesCloseTimer.current = null;
    }
    setCoursesOpen(true);
  };

  const closeCourses = () => {
    coursesCloseTimer.current = setTimeout(() => setCoursesOpen(false), 120);
  };

  const handleCoursesMouseLeave = (e: React.MouseEvent) => {
    const related = e.relatedTarget;
    if (related instanceof Node && coursesDropdownRef.current?.contains(related)) return;
    closeCourses();
  };
  const handleDropdownMouseLeave = (e: React.MouseEvent) => {
    const related = e.relatedTarget;
    const wrapper = (e.currentTarget as HTMLElement).parentElement;
    if (related instanceof Node && wrapper?.contains(related)) return;
    closeCourses();
  };

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
            {navLinks.map((link) =>
              "hasDropdown" in link && link.hasDropdown ? (
                <div
                  key={link.name}
                  className={`relative ${coursesOpen ? "pb-[320px] -mb-[320px]" : ""}`}
                  onMouseEnter={openCourses}
                  onMouseLeave={handleCoursesMouseLeave}
                >
                  <div className="relative">
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="flex items-center gap-1 text-gray-600 hover:text-primary font-medium transition-colors text-sm lg:text-base"
                    >
                      {link.name}
                      <ChevronDown
                        className={`size-4 opacity-70 transition-transform duration-200 ${coursesOpen ? "rotate-180" : ""}`}
                      />
                    </Link>
                    <div
                      ref={coursesDropdownRef}
                      className={`absolute left-0 top-full pt-1 transition-all duration-200 z-[100] ${coursesOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">                      
                      {courseLinks.map((course) => (
                        <Link
                          key={course.href}
                          href={course.href}
                          onClick={(e) => handleLinkClick(e, course.href)}
                          className="block px-4 py-2 text-gray-600 hover:bg-primary/5 hover:text-primary text-sm"
                        >
                          {course.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 shrink-0" aria-hidden />
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="block px-4 py-2 text-gray-600 hover:bg-primary/5 hover:text-primary font-medium text-sm"
                      >
                        All Courses
                      </Link>
                    </div>
                  </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gray-600 hover:text-primary font-medium transition-colors text-sm lg:text-base"
                >
                  {link.name}
                </Link>
              )
            )}
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
            {navLinks.map((link) =>
              "hasDropdown" in link && link.hasDropdown ? (
                <div key={link.name} className="w-full">
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block text-gray-600 font-medium hover:text-primary transition-colors w-full text-center py-2"
                  >
                    {link.name}
                  </Link>
                  <div className="pl-4 flex flex-col gap-1 border-l-2 border-primary/20 ml-4">
                    {courseLinks.map((course) => (
                      <Link
                        key={course.href}
                        href={course.href}
                        onClick={(e) => handleLinkClick(e, course.href)}
                        className="text-gray-500 text-sm hover:text-primary py-1"
                      >
                        {course.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gray-600 font-medium hover:text-primary transition-colors w-full text-center py-2"
                >
                  {link.name}
                </Link>
              )
            )}
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
