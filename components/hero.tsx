import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <header className="min-h-[75vh] flex relative w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="bg-stone-900/40 absolute inset-0 mix-blend-multiply z-10" />
        <div className="bg-gradient-to-t from-[#fdfcf8] via-transparent to-transparent absolute inset-0 z-20" />
        <Image
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adecf2ed-bb50-4471-b0a5-87ca4f09c21c_3840w.jpg"
          alt="Detroit Brick Architecture"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="z-30 w-full max-w-6xl px-6 pt-20">
        <div className="flex flex-col max-w-2xl">
          <div className="inline-flex self-start px-4 py-1.5 mb-6 bg-white/90 backdrop-blur-sm rounded-full border border-white/50 shadow-sm">
            <span className="text-xs font-semibold text-stone-800 tracking-wide uppercase">
              Detroit & Dearborn, MI
            </span>
          </div>

          <h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-bold text-white font-serif mb-6 drop-shadow-md">
            Clearwater Properties and Development Inc
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-stone-100 max-w-lg mb-10 font-medium drop-shadow-sm">
            We manage real apartments, houses, and local business spaces.
            Simple, honest renting with a focus on community and reliable
            service.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#listings"
              className="px-7 py-3.5 bg-[#fdfcf8] text-stone-900 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              View Availability
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
