"use client"

import { useState, useRef } from "react"

interface Review {
  id: number
  name: string
  rating: number
  text: string
  timestamp: string
}

function StarIcon({
  filled,
  half,
  onClick,
  onMouseMove,
  index,
}: {
  filled: boolean
  half: boolean
  onClick?: () => void
  onMouseMove?: (e: React.MouseEvent) => void
  index: number
}) {
  let fillColor = "currentColor"
  let className = "text-stone-300"

  if (filled) {
    fillColor = "#ca8a04"
    className = ""
  } else if (half) {
    fillColor = "url(#half-star-gradient)"
    className = ""
  }

  return (
    <svg
      className={`star-icon ${className}`}
      data-index={index}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill={fillColor}
      onClick={onClick}
      onMouseMove={onMouseMove}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function DisplayStars({
  rating,
  size = 18,
}: {
  rating: number
  size?: number
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        let fillColor = "currentColor"
        let className = "text-stone-300"

        if (rating >= i) {
          fillColor = "#ca8a04"
          className = ""
        } else if (rating >= i - 0.5) {
          fillColor = "url(#half-star-gradient)"
          className = ""
        }

        return (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={fillColor}
            className={className}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      })}
    </div>
  )
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [currentRating, setCurrentRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [ratingError, setRatingError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const displayRating = hoverRating || currentRating

  const handleStarMouseMove = (e: React.MouseEvent, starIndex: number) => {
    const target = e.currentTarget as SVGElement
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width

    if (x < width / 2) {
      setHoverRating(starIndex - 0.5)
    } else {
      setHoverRating(starIndex)
    }
  }

  const handleStarClick = () => {
    if (hoverRating > 0) {
      setCurrentRating(hoverRating)
      setRatingError(false)
    }
  }

  const handleMouseLeave = () => {
    setHoverRating(0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!currentRating) {
      setRatingError(true)
      return
    }

    const newReview: Review = {
      id: Date.now(),
      name,
      rating: currentRating,
      text,
      timestamp: "Just now",
    }

    setReviews([newReview, ...reviews])
    setName("")
    setText("")
    setCurrentRating(0)
    setHoverRating(0)
  }

  return (
    <section className="bg-[#fdfcf8] pt-24 pb-24" id="reviews">
      {/* Half star gradient definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="half-star-gradient">
            <stop offset="50%" stopColor="#ca8a04" />
            <stop offset="50%" stopColor="#d6d3d1" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Tenant Feedback
          </h2>
          <p className="text-stone-600 text-lg">
            We value our community. See what our neighbors have to say.
          </p>
        </div>

        {/* Write Review Form */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 shadow-sm mb-12">
          <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
            Share Your Experience
          </h3>
          <p className="text-sm text-stone-500 mb-6">
            How was your stay with us? Your feedback helps us grow.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Star Rating Input */}
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-2">
                Rating
              </label>
              <div
                ref={containerRef}
                className="flex gap-2 cursor-pointer w-fit"
                onMouseLeave={handleMouseLeave}
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon
                    key={i}
                    index={i}
                    filled={displayRating >= i}
                    half={!( displayRating >= i) && displayRating >= i - 0.5}
                    onClick={handleStarClick}
                    onMouseMove={(e) => handleStarMouseMove(e, i)}
                  />
                ))}
              </div>
              {ratingError && (
                <p className="text-red-500 text-xs mt-1">
                  Please select a star rating.
                </p>
              )}
            </div>

            {/* Name Input */}
            <div>
              <label
                htmlFor="reviewer-name"
                className="block text-sm font-semibold text-stone-700 mb-2"
              >
                First and Last Name
              </label>
              <input
                type="text"
                id="reviewer-name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-stone-200 focus:border-stone-400 text-stone-800 placeholder:text-stone-400 p-3 transition-all border"
                placeholder="Jane Doe"
              />
            </div>

            {/* Text Input */}
            <div>
              <label
                htmlFor="review-text"
                className="block text-sm font-semibold text-stone-700 mb-2"
              >
                Written Review
              </label>
              <textarea
                id="review-text"
                name="review"
                rows={3}
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full rounded-xl border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-stone-200 focus:border-stone-400 text-stone-800 placeholder:text-stone-400 p-3 transition-all border"
                placeholder="Tell us about your home, the neighborhood, or the management..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-stone-800 text-stone-50 font-semibold rounded-xl hover:bg-stone-700 transition-colors shadow-sm"
            >
              Post Review
            </button>
          </form>
        </div>

        {/* Reviews Display */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex flex-col gap-4 fade-in"
            >
              <div className="flex items-center justify-between">
                <DisplayStars rating={review.rating} />
                <span className="text-xs text-stone-400">
                  {review.timestamp}
                </span>
              </div>
              <p className="text-stone-700 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center gap-3 border-t border-stone-100 pt-4">
                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-semibold text-stone-900">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
