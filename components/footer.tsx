import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="bg-stone-50 border-stone-200 border-t mt-12 pt-16 pb-16"
      id="contact"
    >
      <div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
        <div className="flex justify-center">
          <Image
            src="/pics/logo.png"
            alt="Clearwater Properties and Development Inc Logo"
            width={224}
            height={224}
            className="h-48 w-48 md:h-56 md:w-56 object-contain"
          />
        </div>
      </div>
    </footer>
  )
}
