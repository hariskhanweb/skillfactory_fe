import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          
          {/* Logo and Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-center sm:text-left font-light">
              &copy; {new Date().getFullYear()} Techlocal Skill Factory. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

