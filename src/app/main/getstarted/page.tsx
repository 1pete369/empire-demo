"use client"

import Link from 'next/link';
import React, { useEffect } from 'react'
import feather  from "feather-icons" 
import { BiArrowFromRight } from 'react-icons/bi';

export default function Page() {

    useEffect(()=>{
        feather.replace();
    },[])

  return (
    <div className="h-screen relative">
        <div className='absolute z-10 p-6'>
            <Link href={"/main"}>
            <BiArrowFromRight size={28} className=" text-white"/>
            </Link>
        </div>
      <section className=" h-screen bg-cover bg-center bg-no-repeat relative sm:hidden" 
        style={{ backgroundImage: "url('/lady1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70">
         <div className='absolute h-24 w-full bottom-0 bg-stone-100 p-4 flex justify-between rounded-t-xl'>
         <Link  className="px-2 font-md text-lg font-semibold bg-stone-100 flex-1 mr-2 border-black border-2 rounded flex justify-center items-center " href={"/main/getstarted/login"}>
         <button>
          Login
          </button>
         </Link>
            <Link  className="px-2 font-md text-lg font-semibold bg-black text-white flex-1 ml-2 border-2 border-white rounded flex justify-center items-center " href={"/main/getstarted/register"}>
          <button>
            Register
          </button>
            </Link>
          </div>
        </div>
      </section>
      <section className=" hidden sm:block h-screen bg-cover bg-center bg-no-repeat relative" 
        style={{ backgroundImage: "url('/desktop_lady1.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70">
         <div className='absolute h-screen w-1/3 min-w-64 right-0 bg-stone-100 bg-opacity-20 p-4 flex flex-col justify-center items-center flex-1 gap-10'>
            <Link className=" max-w-64 min-w-60 p-3 font-md text-lg font-semibold bg-stone-100  rounded flex justify-center items-center " href={"/main/getstarted/login"}>
         <button >
            Login
            </button>
            </Link>
              <Link className=" max-w-64 min-w-60 p-3 font-md text-lg font-semibold bg-black text-white rounded flex justify-center items-center " href={"/main/getstarted/register"}>
            <button  >
              Register
              </button>
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
