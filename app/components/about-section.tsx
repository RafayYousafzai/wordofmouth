"use client"

import { Card, CardBody } from "@nextui-org/react"
import { Users, Star, MapPin } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: <Users size={40} className="text-[#FFC94A]" />,
      title: "Follow & Post with Friends",
      description:
        "Connect with friends and share your favorite meals. See what they're eating and get inspired by their food adventures.",
    },
    {
      icon: <Star size={40} className="text-[#FFC94A]" />,
      title: "Review Restaurants & Dishes",
      description:
        "Rate and review restaurants and specific dishes. Help others discover amazing food with your honest feedback.",
    },
    {
      icon: <MapPin size={40} className="text-[#FFC94A]" />,
      title: "Discover Nearby Food via Heatmap",
      description:
        "Explore trending restaurants and dishes in your area with our interactive heatmap feature. Find hidden gems nearby.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-default-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-[#FFC94A] to-[#FFD700] bg-clip-text text-transparent">
              Word of Mouth?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
              <CardBody className="text-center p-8 space-y-4">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-default-600">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
