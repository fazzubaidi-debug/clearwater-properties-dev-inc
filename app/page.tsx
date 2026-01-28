import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Listings from "@/components/listings"
import Amenities from "@/components/amenities"
import Reviews from "@/components/reviews"
import Gallery from "@/components/gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Listings />
      <Amenities />
      <Reviews />
      <Gallery />
      <Footer />
    </>
  )
}
