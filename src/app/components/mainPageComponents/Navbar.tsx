"use client"

import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { redirect, useRouter } from "next/navigation";

export default function Navbar() {
//   const isadmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

//   const toolTip =
    // "absolute left-1/2 transform -translate-x-1/2 bottom-full -mb-20 scale-0 group-hover:scale-100 transition-transform rounded px-2 py-1 whitespace-nowrap bg-gray-100 shadow-lg text-black z-10";
  return (
    <div
      className="flex p-1 px-4 justify-between items-center bg-stone-200 h-16"
    >
      <div className="flex gap-4 p-4">
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/main">
              Home
            </Link>
          </li>
          <li>
            <Link href="/main/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link href="/main/getstarted" className="bg-blue-100 px-2 py-1 rounded text-blue-500 hover:bg-blue-200 border border-black">
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
