import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "../components/Container";

export function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Stories", href: "https://stories.ourfaithsforward.com" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  const legal = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
    { name: "Legal", href: "/legal" },
  ];

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src="/img/logo.svg"
                  alt="Our Faiths Forward"
                  width="32"
                  height="32"
                  className="w-8"
                />
                <span>Our Faiths Forward</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Our Faiths Forward brings people together for real action—justice, compassion, and dignity for all. Join us to move faith forward in every community.
            </div>

            <div className="mt-5">
              <a
                href="https://vercel.com/"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {/* Update these social links to your campaign's real handles */}
              <a href="https://twitter.com/" target="_blank" rel="noopener">
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener">
                <span className="sr-only">Linkedin</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Our Faiths Forward. Made with ♥ by ourfaithsforward.com.
        </div>
      </Container>
      {/* You can keep or remove the backlink below */}
      {/* <Backlink /> */}
    </div>
  );
}

// ... [Social icon components here—Twitter, Facebook, Instagram, Linkedin] ...
