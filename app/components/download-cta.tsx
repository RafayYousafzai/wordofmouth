"use client"

import { Button, Card, CardBody } from "@nextui-org/react"
import { Download, Smartphone } from "lucide-react"
import Image from "next/image"

export default function DownloadCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FFC94A] to-[#FFD700]">
      <div className="container mx-auto px-4">
        <Card className="shadow-2xl">
          <CardBody className="p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-black">Ready to Taste the City?</h2>
              <p className="text-lg text-black/80 max-w-2xl mx-auto">
                Join thousands of food lovers already using Word of Mouth to discover amazing meals and connect with
                friends.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/90 px-8"
                startContent={<Download size={20} />}
              >
                Download on App Store
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-black text-black hover:bg-black/10 px-8"
                startContent={<Smartphone size={20} />}
              >
                Get it on Google Play
              </Button>
            </div>

            <div className="pt-8">
              <p className="text-black/60 mb-4">Scan to download</p>
              <div className="inline-block p-4 bg-white rounded-2xl shadow-lg">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="QR Code"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}
