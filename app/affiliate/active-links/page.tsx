import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import AffiliateSidebar from "@/components/affiliate-sidebar"

export default function AffiliateActiveLinks() {
  // Sample active affiliate links
  const activeLinks = [
    {
      id: 1,
      title: "Unterstützt unseren Abiball – Gemeinsam unvergessliche Erinn",
      url: "https://yourcustomcampaign.html",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      title: "Unterstützt unseren Abiball – Gemeinsam unvergessliche Erinn",
      url: "https://yourcustomcampaign.html",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      title: "Unterstützt unseren Abiball – Gemeinsam unvergessliche Erinn",
      url: "https://yourcustomcampaign.html",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <AffiliateSidebar activePage="active-links" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hallo, Linus</b>&nbsp;&bull;&nbsp; Du verwaltest: Kampagnen Titel
              </div>
              <p className="text-gray-600">
                Um deine Links zu löschen klicke auf das X. Dann hast du auch keine Einnahmen mehr
              </p>
            </div>
            <div>
              <Link href="/affiliate/dashboard">
                <Button variant="outline" className="kampagnewelcome-button">
                  Umsätze
                </Button>
              </Link>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="aktive_anzeigen space-y-4">
          {activeLinks.map((link) => (
            <Card key={link.id} className="aktiv_affiliatekampagne">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="leftsideaktiv_affiliatekampagne flex items-center gap-4">
                    <Image
                      src={link.image || "/placeholder.svg"}
                      alt="Campaign"
                      width={100}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                    <div className="unteraindertitellinkaffiliate flex flex-col">
                      <p className="font-medium mb-1">{link.title}</p>
                      <Link href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                        {link.url}
                      </Link>
                    </div>
                  </div>
                  <button
                    className="rightsideaktiv_affiliatekampagne p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors"
                    aria-label="Remove affiliate link"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
