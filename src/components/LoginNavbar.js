import React from "react";

export default function LoginNavbar() {
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-10 bg-red-600 mb-3">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>
    </>
  );
}
