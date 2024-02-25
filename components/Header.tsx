"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Popover, Transition } from "@headlessui/react";

const products = [
  {
    name: "Book a Stay",
    description: "At only the best locations in the world",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "With only the best prices",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our Support Team",
    description: "Our team will help you with any problem",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const callsToAction = [
  {
    name: "See Demo Booking",
    href: "#",
    icon: PlayCircleIcon,
  },
  {
    name: "Contact Support",
    href: "#",
    icon: PhoneIcon,
  },
];

const Header = () => {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-500 via-violet-600 to-fuchsia-500">
      <nav
        className="mx-auto flex max-w-7xl p-6 items-center justify-between lg:px-8"
        aria-label="Global"
      >
        <div className="flex flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">TravelScape</span>
            <div className="flex rounded-sm bg-white pl-6 pb-2 px-2">
              <div
                className="w-10 mt-2"
                dangerouslySetInnerHTML={{
                  __html: `
                <?xml version="1.0" encoding="utf-8"?>
                <svg viewBox="81.856 10.666 105.157 97.095" style="enable-background:new 0 0 268 182;" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <style type="text/css">
                    .st0{fill:url(#SVGID_1_);}
                    .st1{fill:#FFFFFF;}
                    .st2{fill:#121826;}
                </style>
                  </defs>
                  <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="110.2131" y1="91.0887" x2="163.8015" y2="149.429" gradientTransform="matrix(1 0 0 -1 0 183.2756)">
                    <stop offset="0" style="stop-color:#FF61D3"/>
                    <stop offset="0.5" style="stop-color:#B318FF"/>
                    <stop offset="1" style="stop-color:#00F0FF"/>
                  </linearGradient>
                  <path class="st0" d="M180.62,57.74l-3.83-2.09c-1.68-8.26-5.7-15.64-11.34-21.47c-3.18-3.3-6.86-6.08-10.94-8.26v-2.43 c0-1.28-2.43-2.43-6.36-3.24C144.47,19.47,139.49,19,134,19c-1.93,0-3.8,0.06-5.61,0.16c-8.6,0.53-14.9,2.28-14.9,4.3v2.43 c-2.74,1.46-5.3,3.21-7.67,5.2c-7.32,6.23-12.59,14.8-14.62,24.56l-3.83,2.09c-1.75,0.93-2.68,2.9-2.34,4.83l3.49,19.6 c0.34,1.99,1.96,3.49,3.96,3.74l5.86,0.72c3.18,3.43,7.2,6.11,11.84,8.07c6.23,2.65,13.56,4.05,21.44,4.27 C132.41,99,133.22,99,134,99c6.01,0,11.75-0.65,16.99-1.99c6.86-1.78,12.84-4.77,17.36-9.07c0.53-0.5,1.06-1.03,1.56-1.59l5.52-0.53 c2.06-0.19,3.71-1.71,4.08-3.77l3.46-19.51C183.3,60.64,182.37,58.67,180.62,57.74z" transform="matrix(1, 0, 0, 1, 0, 1.7763568394002505e-15)"/>
                  <path class="st1" d="M134,88.31c-10.41,0-18.95-2.15-24.68-6.23c-5.58-3.96-8.29-9.72-8.29-17.61c0-18.2,14.8-33,33-33 c18.2,0,33,14.8,33,33c0,7.88-2.71,13.62-8.29,17.61C152.95,86.16,144.41,88.31,134,88.31z" transform="matrix(1, 0, 0, 1, 0, 1.7763568394002505e-15)"/>
                  <path class="st2" d="M134,80.71c-6.48,0-12.5-3.8-15.33-9.66l5.24-2.49c1.9,3.93,5.77,6.39,10.1,6.39c4.33,0,8.23-2.43,10.1-6.39 l5.24,2.49C146.5,76.9,140.48,80.71,134,80.71z" transform="matrix(1, 0, 0, 1, 0, 1.7763568394002505e-15)"/>
                </svg>
    `,
                }}
              />
              <h1 className="px-2 pt-2 text-black text-2xl font-bold">
                TravelScape
              </h1>
            </div>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white shadow-lg ring-1 ring-gray-900/5"
            onClick={() => setmobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Stays
              <ChevronDownIcon className="h-5 w-5 flex-none text-white"></ChevronDownIcon>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 max-w-md w-screen overflow-hidden rounded-3xl">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-200">
                        <item.icon
                          className="h-6 w-6 text-black group-hover:text-gray-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-black"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-black">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-col-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-black "
                    >
                      <item.icon className="h-5 w-5 flex-none text-black" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  );
};

export default Header;
