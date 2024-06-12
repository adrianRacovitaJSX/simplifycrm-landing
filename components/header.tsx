"use client";
import React, { useState } from "react";
import { ModeToggle } from "./theme-toggle";
import { BackgroundGradientAnimationHeader } from "./ui/background-gradient-animation-header";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="w-full sticky top-0 z-50 bg-white dark:bg-black flex justify-between py-3 px-5 items-center backdrop-blur-lg backdrop-filter bg-opacity-30 dark:backdrop-blur-2xl dark:backdrop-filter dark:bg-opacity-60 dark:border-b">
        <aside>
          <h2 className="font-bold text-2xl text-black dark:text-white">
            <a href="/">Simplify</a>
          </h2>
        </aside>
        <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-8 lg:space-x-14 text-sm text-black dark:text-white antialiased font-medium transition duration-200">
          <a
            href="/#caracteristicas"
            className="dark:hover:text-emerald-400 hover:text-emerald-800"
          >
            <span>Características</span>
          </a>
          <a
            href="/#beneficios"
            className="dark:hover:text-emerald-400 hover:text-emerald-800"
          >
            <span>Beneficios</span>
          </a>
          <a
            href="https://docs.simplifycrm.es"
            target="_blank"
            className="dark:hover:text-emerald-400 hover:text-emerald-800"
          >
            <span>Documentación</span>
          </a>
          <a
            href="/blog"
            className="dark:hover:text-emerald-400 hover:text-emerald-800"
          >
            <span>Blog</span>
          </a>
          <a
            href="/#contacto"
            className="dark:hover:text-emerald-400 hover:text-emerald-800"
          >
            <span>Contacto</span>
          </a>
        </div>
        <aside className="text-black dark:text-white flex gap-5 items-center">
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white hidden sm:inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <a href="/#demo">Solicita una demo</a>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          <ModeToggle />
          <button
            className="sm:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6 text-black dark:text-white"
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
          </button>
        </aside>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-auto mt-16 bg-white dark:bg-black dark:border-b z-40 overflow-y-auto animate-slide-down">
          <div className="pb-1">
            <button
              className="absolute top-4 right-4 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6 text-black dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>{" "}
            <a
              href="/#caracteristicas"
              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Características
            </a>
            <a
              href="/#beneficios"
              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Beneficios
            </a>
            <a
              href="https://docs.simplifycrm.es"
              target="_blank"
              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Documentación
            </a>
            <a
              href="/blog"
              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Blog
            </a>
            <a
              href="/#contacto"
              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
