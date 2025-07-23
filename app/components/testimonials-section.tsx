"use client"

import { Card, CardBody, Avatar } from "@nextui-org/react"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Thompson",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "Best food app ever! I found hidden gems in my city thanks to it. The heatmap feature is absolutely brilliant!",
    },
    {
      name: "Maria Garcia",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "Love following my friends' food adventures. It's like Instagram but specifically for foodies. Highly recommend!",
    },
    {
      name: "James Wilson",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "The restaurant reviews are so helpful. I never have a bad meal anymore because of this app's recommendations.",
    },
    {
      name: "Lisa Park",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "Perfect for discovering new restaurants when traveling. The local food scene becomes so much more accessible!",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-default-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#FFC94A] to-[#FFD700] bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
              <CardBody className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar src={testimonial.image} size="lg" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-[#FFC94A] text-[#FFC94A]" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-default-600 italic">"{testimonial.review}"</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
