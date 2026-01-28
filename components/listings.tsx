"use client"

import { useState } from "react"
import Image from "next/image"

type ListingCategory = "all" | "apartment" | "house" | "commercial"

interface Listing {
  id: number
  category: "apartment" | "house" | "commercial"
  image: string
  alt: string
  label: string
  labelStyle: "light" | "dark"
  address: string
  beds?: number | string
  baths?: number
  type: string
  sqft?: string
  zoning?: string
  price?: string
  link: string
  linkText: string
}

const listings: Listing[] = [
  {
    id: 1,
    category: "house",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80140b29-dc8e-44c2-a233-a56fa8dad458_800w.webp",
    alt: "Dearborn Bungalow",
    label: "Single Family",
    labelStyle: "light",
    address: "24334 Penn St, Dearborn, MI 48124",
    beds: 2,
    baths: 1,
    type: "House",
    price: "$1,437",
    link: "https://www.zillow.com/homedetails/24334-Penn-St-Dearborn-MI-48124/160179278_zpid/",
    linkText: "Details",
  },
  {
    id: 2,
    category: "apartment",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/373e4f2b-4dd3-4ab3-9041-57de61e07227_800w.webp",
    alt: "Vernor Hwy Apartment",
    label: "Apartment",
    labelStyle: "light",
    address: "7832 W Vernor Hwy, Apt 6, Detroit, MI 48209",
    beds: 1,
    baths: 1,
    type: "Apt",
    link: "https://www.zillow.com/homedetails/7832-W-Vernor-Hwy-6-Detroit-MI-48209/2060133208_zpid/",
    linkText: "Details",
  },
  {
    id: 3,
    category: "apartment",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf063340-84c3-462e-beb1-98e44e9028df_800w.webp",
    alt: "Apartment Interior",
    label: "Apartment",
    labelStyle: "light",
    address: "7832 W Vernor Hwy, Apt 5, Detroit, MI 48209",
    beds: 1,
    baths: 1,
    type: "Apt",
    link: "https://www.zillow.com/homedetails/7832-W-Vernor-Hwy-5-Detroit-MI-48209/2077659338_zpid/",
    linkText: "Details",
  },
  {
    id: 4,
    category: "apartment",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf695fc4-59e7-4a52-9538-aca6548754f3_800w.webp",
    alt: "Michigan Ave Loft",
    label: "Apartment",
    labelStyle: "light",
    address: "7832 W Vernor Hwy, Apt 4, Detroit, MI 48209",
    beds: 0,
    baths: 1,
    type: "Loft",
    link: "https://www.zillow.com/homedetails/7832-W-Vernor-Hwy-4-Detroit-MI-48209/2080771576_zpid/",
    linkText: "Details",
  },
  {
    id: 5,
    category: "apartment",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e2b06d2-8cef-4c0c-a58c-afefa39d8bdf_800w.webp",
    alt: "Hubbard Farms Unit",
    label: "Apartment",
    labelStyle: "light",
    address: "7832 W Vernor Hwy, Apt 3, Detroit, MI 48209",
    beds: 1,
    baths: 1,
    type: "Apt",
    link: "https://www.zillow.com/homedetails/7832-W-Vernor-Hwy-3-Detroit-MI-48209/2080771573_zpid/",
    linkText: "Details",
  },
  {
    id: 6,
    category: "apartment",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c41ab4e1-80c4-4f56-a617-9aebf3ed8a24_800w.webp",
    alt: "Porter St Studio",
    label: "Apartment",
    labelStyle: "light",
    address: "7836 W Vernor Hwy, Apt 2, Detroit, MI 48209",
    beds: 1,
    baths: 1,
    type: "Studio",
    price: "$850",
    link: "https://www.zillow.com/homedetails/7836-W-Vernor-Hwy-2-Detroit-MI-48209/2058226435_zpid/",
    linkText: "Details",
  },
  {
    id: 7,
    category: "commercial",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e83c6dd-2274-4d79-8907-daaff7951506_800w.jpg",
    alt: "Commercial Storefront",
    label: "Commercial",
    labelStyle: "dark",
    address: "7900 W Vernor Hwy, Detroit, MI 48209",
    sqft: "Flex",
    zoning: "Retail",
    type: "commercial",
    price: "$1,265",
    link: "https://www.zillow.com/homedetails/7900-W-Vernor-Hwy-Detroit-MI-48209/2125385000_zpid/",
    linkText: "Inquire",
  },
  {
    id: 8,
    category: "commercial",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc25554e-d56c-4a8a-908f-6e190a103b85_800w.jpg",
    alt: "Commercial Storefront",
    label: "Commercial",
    labelStyle: "dark",
    address: "7830 W Vernor Hwy, Detroit, MI 48209",
    sqft: "8,792",
    zoning: "Retail",
    type: "commercial",
    link: "https://www.loopnet.com/Listing/7830-W-Vernor-Hwy-Detroit-MI/9623084/",
    linkText: "Inquire",
  },
  {
    id: 9,
    category: "commercial",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65841696-5a89-4748-8840-dd9517849c92_800w.jpg",
    alt: "Office Flex Space",
    label: "Commercial",
    labelStyle: "dark",
    address: "7842 W Vernor Hwy, Detroit, MI 48209",
    sqft: "6220",
    zoning: "Office",
    type: "commercial",
    price: "$1,393",
    link: "https://www.movoto.com/detroit-mi/7842-w-vernor-hwy-detroit-mi-48209/pid_mz9aghsqutab/",
    linkText: "Inquire",
  },
  {
    id: 10,
    category: "apartment",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d77e31a1-0846-403c-9528-32c7100983c0_800w.webp",
    alt: "Vernor Hwy Apartment",
    label: "Apartment",
    labelStyle: "light",
    address: "7836 W Vernor Hwy, Apt 1, Detroit, MI 48209",
    beds: 1,
    baths: 1,
    type: "Apt",
    link: "https://www.zillow.com/homedetails/7836-W-Vernor-Hwy-1-Detroit-MI-48209/2076349132_zpid/",
    linkText: "Details",
  },
]

const filters: { label: string; value: ListingCategory }[] = [
  { label: "All", value: "all" },
  { label: "Apartments", value: "apartment" },
  { label: "Houses", value: "house" },
  { label: "Commercial", value: "commercial" },
]

export default function Listings() {
  const [activeFilter, setActiveFilter] = useState<ListingCategory>("all")

  const filteredListings =
    activeFilter === "all"
      ? listings
      : listings.filter((l) => l.category === activeFilter)

  return (
    <section className="bg-[#fdfcf8] pt-24 pb-20" id="listings">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="md:text-4xl text-3xl font-bold text-stone-900 font-serif mb-3">
              Available to Rent
            </h2>
            <p className="text-stone-600 max-w-xl text-lg">
              Browse our current selection of living spaces and storefronts.
              Real photos, real prices.
            </p>
          </div>

          <div className="inline-flex bg-stone-100/80 p-1.5 rounded-xl gap-1">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  activeFilter === filter.value
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-600 hover:bg-stone-200/50 hover:text-stone-900"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="listing-item group flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 overflow-hidden fade-in"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <Image
                  src={listing.image}
                  alt={listing.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 backdrop-blur text-xs font-bold rounded-md shadow-sm uppercase tracking-wide ${
                      listing.labelStyle === "dark"
                        ? "bg-stone-900/90 text-white"
                        : "bg-white/95 text-stone-900"
                    }`}
                  >
                    {listing.label}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-stone-900 font-serif mb-1">
                    {listing.address}
                  </h3>
                </div>
                {listing.category === "commercial" ? (
                  <div className="grid grid-cols-2 gap-2 py-4 border-t border-b border-stone-100 mb-5">
                    <div className="text-center">
                      <span className="block font-bold text-stone-800">
                        {listing.sqft}
                      </span>
                      <span className="text-xs text-stone-500 uppercase tracking-wide">
                        Sq Ft
                      </span>
                    </div>
                    <div className="text-center border-l border-stone-100">
                      <span className="block font-bold text-stone-800">
                        {listing.zoning}
                      </span>
                      <span className="text-xs text-stone-500 uppercase tracking-wide">
                        Zoning
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-stone-100 mb-5">
                    <div className="text-center">
                      <span className="block font-bold text-stone-800">
                        {listing.beds}
                      </span>
                      <span className="text-xs text-stone-500 uppercase tracking-wide">
                        Bed
                      </span>
                    </div>
                    <div className="text-center border-l border-stone-100">
                      <span className="block font-bold text-stone-800">
                        {listing.baths}
                      </span>
                      <span className="text-xs text-stone-500 uppercase tracking-wide">
                        Bath
                      </span>
                    </div>
                    <div className="text-center border-l border-stone-100">
                      <span className="block font-bold text-stone-800">
                        {listing.type}
                      </span>
                      <span className="text-xs text-stone-500 uppercase tracking-wide">
                        Type
                      </span>
                    </div>
                  </div>
                )}
                <div className="flex mt-auto items-center justify-between">
                  {listing.price && (
                    <span className="text-lg font-bold text-stone-900">
                      {listing.price}
                      <span className="text-sm font-normal text-stone-500">
                        /mo
                      </span>
                    </span>
                  )}
                  <a
                    href={listing.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold underline decoration-stone-300 hover:text-stone-600 ml-auto"
                  >
                    {listing.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
