import { Bike, Wrench } from "lucide-react"

export default function Amenities() {
  return (
    <section
      className="bg-stone-100/50 border-stone-200 border-t pt-20 pb-20"
      id="amenities"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3 sticky top-24">
            <span className="text-xs font-bold tracking-wider text-stone-500 uppercase mb-3 block">
              Neighborhood
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 font-bold mb-6">
              Why live here?
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              We don&apos;t just rent units; we maintain homes in vibrant
              neighborhoods. Our properties are chosen for their walkability,
              character, and access to the best of Detroit and Dearborn.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Outdoor Spaces */}
            <div className="bg-white p-5 rounded-xl border border-stone-100 shadow-sm flex items-start gap-4">
              <div className="p-2.5 bg-orange-50 text-orange-800 rounded-lg">
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
                    d="M3 3h18v18H3zM8 12h8m-8 4h8m-8-8h8"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Outdoor Spaces</h4>
                <p className="text-sm text-stone-500">
                  Picnic seating, BBQ areas, patios, plus outdoor gym and
                  walking space.
                </p>
              </div>
            </div>

            {/* Bike Access */}
            <div className="bg-white p-5 rounded-xl border border-stone-100 shadow-sm flex items-start gap-4">
              <div className="p-2.5 bg-blue-50 text-blue-800 rounded-lg">
                <Bike className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Bike Access</h4>
                <p className="text-sm text-stone-500">
                  Bikes available for resident use.
                </p>
              </div>
            </div>

            {/* Quick Maintenance */}
            <div className="bg-white p-5 rounded-xl border border-stone-100 shadow-sm flex items-start gap-4">
              <div className="p-2.5 bg-green-50 text-green-800 rounded-lg">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-1">
                  Quick Maintenance
                </h4>
                <p className="text-sm text-stone-500">
                  Fast, dependable maintenance when you need it.
                </p>
              </div>
            </div>

            {/* Laundry Coming Soon */}
            <div className="bg-white p-5 rounded-xl border border-stone-100 shadow-sm flex items-start gap-4">
              <div className="p-2.5 bg-stone-100 text-stone-400 rounded-lg">
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
                    d="M3 6h3"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 6h.01"
                  />
                  <rect
                    width="18"
                    height="20"
                    x="3"
                    y="2"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="13"
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-1">
                  Laundry - Coming Soon
                </h4>
                <p className="text-sm text-stone-500">
                  Not currently available. Installations planned for future
                  dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
