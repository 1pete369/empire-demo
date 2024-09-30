"use client"

import React, { useState } from "react"
import { BiHome } from "react-icons/bi"
import { FiSettings } from "react-icons/fi"
import { GoGraph } from "react-icons/go"
import { GrDocument } from "react-icons/gr"

export default function MenuSelect() {
  const [menuItems, setMenuItems] = useState([
    {
      Icon: BiHome,
      active: true,
      id: crypto.randomUUID(),
      Title: "Dashboard"
    },
    {
        Icon: FiSettings,
        active: false,
        id: crypto.randomUUID(),
        Title: "Preferences"
      },
      {
        Icon: GoGraph,
        active: false,
        id: crypto.randomUUID(),
        Title: "Analytics"
      },
      {
        Icon: GrDocument,
        active: false,
        id: crypto.randomUUID(),
        Title: "History"
      }
  ])

  const handleActive = (id : string) => {
    const buttonId = id

    setMenuItems((prevMenuItem) => {
        return prevMenuItem.map((button) => {
            if (button.id === buttonId) {
                return { ...button, active: true };
            }
            return { ...button, active: false };
        });
    });
  }

  return (
    <div className="flex space-y-3 flex-col border-t border-stone-300 pt-4">
      {menuItems.map((menuItem, i) => {
        return (
          <button
            key={i}
            id={menuItem.id}
            className={`flex items-center hover:bg-stone-200  px-2 py-1.5 rounded text-md ${
              menuItem.active && "bg-white shadow font-semibold hover:bg-white"
            }`}
            onClick={() => handleActive(menuItem.id)}
          >
            <menuItem.Icon className={`mr-2 ${menuItem.active && "text-sky-500"}`} />
            <span>{menuItem.Title}</span>
          </button>
        )
      })}
    </div>
  )
}

