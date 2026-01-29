"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const updateNavState = () => {
      setIsCompact(window.scrollY > 20)
    }

    updateNavState()
    window.addEventListener("scroll", updateNavState, { passive: true })
    return () => window.removeEventListener("scroll", updateNavState)
  }, [])

  return (
    <nav
      className={`nav-bar sticky top-0 z-50 w-full bg-[#fdfcf8]/95 border-b border-stone-200/60 py-5 backdrop-blur-sm ${isCompact ? "nav-compact" : ""}`}
    >
      <div className="flex max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.png-QqbQlipRM0hudNPoLcPiYEHS6L7G7w.jpeg"
            alt="Clearwater Properties and Development Inc Logo"
            width={128}
            height={128}
            className="nav-logo object-contain"
            unoptimized
          />
          <span className="text-lg font-bold text-stone-800 tracking-tight font-serif">
            Clearwater Properties and Development Inc
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <Link
            href="#listings"
            className="hover:text-stone-900 hover:underline decoration-stone-300 underline-offset-4 transition-all"
          >
            Our Properties
          </Link>
          <Link
            href="#amenities"
            className="hover:text-stone-900 hover:underline decoration-stone-300 underline-offset-4 transition-all"
          >
            Amenities
          </Link>
          <Link
            href="#reviews"
            className="hover:text-stone-900 hover:underline decoration-stone-300 underline-offset-4 transition-all"
          >
            Reviews
          </Link>
        </div>

        <button className="md:hidden text-stone-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}
