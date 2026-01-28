import Image from "next/image"

const galleryImages = [
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7dbf49d-6f36-4136-a5c6-16838cab2696_1600w.webp",
    alt: "Dearborn Residence",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c41ab4e1-80c4-4f56-a617-9aebf3ed8a24_800w.webp",
    alt: "Vernor Hwy Exterior",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/391361a3-385d-4b49-9ec0-32e51ba13f47_800w.webp",
    alt: "Commercial Space",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf695fc4-59e7-4a52-9538-aca6548754f3_1600w.webp",
    alt: "Interior",
    className: "col-span-2 row-span-1",
  },
]

export default function Gallery() {
  return (
    <section className="bg-white pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-stone-900 font-serif text-center mb-10">
          Life in Dearborn & Detroit
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.className} relative rounded-2xl overflow-hidden group shadow-md`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
