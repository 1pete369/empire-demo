"use client"

import React from "react"
import Link from "next/link"
import RegisterWithForm from "../components/RegisterWithForm"
import RegisterWithGoogle from "../components/RegisterWithGoogle"
import { BiArrowFromRight } from "react-icons/bi"

export default function page() {

  return (
    <div
      className="min-h-screen bg-fixed overflow-hidden  p-4 bg-center bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: "url(/lady2.jpg)" }}
    >
      <div className="absolute z-10 p-2">
        <Link href={"/main/getstarted"}>
        <BiArrowFromRight size={28} className=" text-white"/>
        </Link>
      </div>
      <div className="inset-0 absolute bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 gap-10">
      <header className="w-full text-3xl text-center">Welcome!</header>
      <RegisterWithForm />
      <span className="font-bold">OR</span>
      <RegisterWithGoogle />
      </div>
    </div>
  )
}
