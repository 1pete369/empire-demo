import React from "react"
import { BsChevronBarUp } from "react-icons/bs"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"

export default function AccountToggle() {
  return (
    <div className="flex border-b border-stone-300 mt-2 mb-4 pb-4">
      <button className="relative w-full flex gap-2 items-center hover:bg-stone-200 p-1 transition-colors duration-150 rounded">
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Buster"
          alt="avatar"
          className="size-8 bg-sky-500 rounded-sm"
        />
        <div className="text-start">
          <span className="text-sm font-semibold block">Reddy pro!</span>
          <span className=" text-xs block font-semibold text-stone-500">kureddy095@gmail.com</span>
        </div>
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)]"/>
        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)]"/>
      </button>
    </div>
  )
}
