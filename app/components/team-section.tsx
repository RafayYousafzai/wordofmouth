"use client"

import { Card, CardBody, Avatar } from "@nextui-org/react"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=200&width=200",
      quote: "Food brings people together, and technology should too.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO",
      image: "/placeholder.svg?height=200&width=200",
      quote: "Building the future of social food discovery.",
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      image: "/placeholder.svg?height=200&width=200",
      quote: "Great design makes great food experiences even better.",
    },
    {
      name: "David Kim",
      role: "Head of Marketing",
      image: "/placeholder.svg?height=200&width=200",
      quote: "Connecting food lovers one recommendation at a time.",
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#FFC94A] to-[#FFD700] bg-clip-text text-transparent">Team</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
              <CardBody className="text-center p-6 space-y-4">
                <Avatar
                  src={member.image}
                  className="w-24 h-24 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-[#FFC94A] font-medium">{member.role}</p>
                </div>
                <p className="text-default-600 italic text-sm">"{member.quote}"</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
