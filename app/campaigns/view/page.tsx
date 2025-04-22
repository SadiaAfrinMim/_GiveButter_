"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Heart, Flag } from "lucide-react"

export default function CampaignView() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showDonationsModal, setShowDonationsModal] = useState(false)

  // Sample images for the campaign
  const images = [
    "/placeholder.svg?height=400&width=800",
    "/placeholder.svg?height=400&width=800",
    "/placeholder.svg?height=400&width=800",
  ]

  // Sample donations
  const recentDonations = [
    { id: 1, name: "Franziksa Linus", amount: 7, timeAgo: "7 minutes" },
    { id: 2, name: "Franziksa Linus", amount: 7, timeAgo: "7 minutes" },
    { id: 3, name: "Franziksa Linus", amount: 7, timeAgo: "7 minutes" },
  ]

  // Sample top donors
  const topDonors = [
    { id: 1, name: "Linus Klos", amount: 5000, rank: 1 },
    { id: 2, name: "Linus Klos", amount: 5000, rank: 2 },
    { id: 3, name: "Linus Klos", amount: 5000, rank: 3 },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="spendenpage flex flex-col lg:flex-row gap-8">
        <div className="kampagneinfosleft flex-1">
          <h1 className="text-3xl font-bold mb-6">Förderverein Kinder- & Jugendfußballs TSV Luthe</h1>

          <div className="fotoderkampagne relative mb-6">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt="Campaign image"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="controllerimages absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <button
                id="previmg"
                onClick={prevImage}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="status h-10 px-4 flex items-center justify-center rounded-lg bg-white text-black">
                {currentImageIndex + 1} / {images.length}
              </div>
              <button
                id="nextimg"
                onClick={nextImage}
                className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <hr className="my-6" />

          <h2 className="text-xl font-semibold mb-4">Organizer</h2>
          <div className="accinfoersteller flex items-center gap-4 mb-6">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Organizer"
              width={64}
              height={64}
              className="rounded-full"
            />
            <div className="accinfoerstellertext">
              <p>
                By <b>Angie Kinel</b>
              </p>
              <p className="text-gray-600">Wunstorf, Niedersachsen</p>
              <Link href="#" className="text-blue-600 underline">
                Website
              </Link>
              <div className="verfied flex items-center gap-1 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p>Verified</p>
              </div>
            </div>
          </div>

          <hr className="my-6" />

          <div className="kampagne_beschreibung mb-6">
            <p className="whitespace-pre-line">
              Hello, We are the partner, family and closest friends of Roland and we urgently need your help! Our
              beloved Roland unexpectedly fell into a neurological emergency during his vacation in Egypt and is
              currently receiving intensive medical care in an Egyptian hospital. His current condition requires a quick
              and safe return to Germany (Hamburg) so that he can receive the necessary medical care. Unfortunately, he
              does not have international health insurance that would cover the costs of medical treatment on site and
              repatriation to Germany, so these costs must be borne by the family. Since February 12, 2025, we have been
              fighting around the clock - both personally on site and from a distance - for the best possible medical
              care. Roland is already in the third hospital after other clinics directly refused treatment. In addition,
              we keep receiving new and sometimes contradictory information from the doctors. His statutory health
              insurance has refused any support, and the embassies have not helped us so far. The previous doctor and
              hospital costs amount to approx. 17,000 €, which have already had to be paid. These will continue to rise
              daily. The only way to bring Roland home safely is a private medical transport with medical accompaniment
              - but this costs approx. 56,000 €. Roland is an incredibly lovable person who has always put the
              well-being of his fellow human beings above his own. He has been fighting for a week - now he needs YOUR
              help! We thank you already now, also on behalf of Roland, from the bottom of our hearts for any support!
            </p>
          </div>

          <hr className="my-6" />

          <div className="wortederspender mb-6">
            <h2 className="text-xl font-semibold mb-2">Words of Support</h2>
            <p className="mb-4">Support the campaign with a donation and by sharing it.</p>

            <div className="wortspender flex items-start gap-4 bg-gray-50 p-4 rounded-lg">
              <Heart className="h-6 w-6 text-red-500 mt-1" />
              <div className="wort">
                <p>
                  <b>Sariiii Sariiiii</b>
                </p>
                <p>50€</p>
                <p>Schnelle Genesung</p>
              </div>
            </div>
          </div>

          <hr className="my-6" />

          <div className="kampagne_melden">
            <Link
              href="mailto:example@example.com?subject=Report%20Campaign&body="
              className="email-button flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <Flag className="h-4 w-4" />
              Report
            </Link>
          </div>
        </div>

        <div className="spendenrechtscontainer w-full lg:w-96">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Donation Funds</h2>

              <div className="gauge-container relative h-48 w-full mb-8">
  {/* Background SVG */}
  <svg 
    className="w-full h-full" 
    viewBox="0 0 200 100"
    style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05))" }}
  >
    {/* Background track */}
    <path
      d="M10,100 A90,90 0 0,1 190,100"
      fill="none"
      stroke="#f0fdf4"
      strokeWidth="18"
      strokeLinecap="round"
    />
    
    {/* Progress track with gradient */}
    <defs>
      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
    </defs>
    <path
      d="M10,100 A90,90 0 0,1 190,100"
      fill="none"
      stroke="url(#progressGradient)"
      strokeWidth="18"
      strokeLinecap="round"
      strokeDasharray="282.6"
      strokeDashoffset="113.04" // 60% progress
    />
    
    {/* Animated progress indicator */}
    <circle
      cx="190"
      cy="100"
      r="8"
      fill="#22c55e"
      className="animate-pulse"
      style={{ 
        transform: 'rotate(-120deg)',
        transformOrigin: '100px 100px',
        animation: 'pulse 2s infinite'
      }}
    />
  </svg>

  {/* Labels */}
  <div className="gauge-labels absolute bottom-0 w-full flex justify-between px-8">
    <span className="text-sm font-medium text-gray-500">0€</span>
    <span className="text-sm font-medium text-gray-500">20,000€</span>
  </div>

  {/* Center display */}
  <div className="center-display absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    <div className="flex items-end justify-center">
      <span className="text-4xl font-bold text-gray-900">18,651</span>
      <span className="text-xl font-medium text-gray-500 ml-1">€</span>
    </div>
    <div className="flex items-center justify-center mt-1">
      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
      <span className="text-sm font-medium text-gray-600">60% funded</span>
    </div>
  </div>

  {/* Percentage indicator */}
  <div 
    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200"
    style={{
      left: 'calc(50% + 45px * cos(120deg))',
      top: 'calc(50% - 45px * sin(120deg))'
    }}
  >
    <span className="text-xs font-semibold text-green-600">60%</span>
  </div>
</div>

              <div className="button-container flex gap-2 mb-6">
                <Button variant="outline" className="flex-1">
                  Share
                </Button>
                <Link href="/donate" className="flex-1">
                  <Button className="w-full">Donate Now</Button>
                </Link>
              </div>

              <div className="spenden-wrapper mb-6">
                <div className="spenden-info flex items-center gap-2">
                  <div className="relative">
                    <input type="checkbox" className="sr-only peer" id="like-checkbox" />
                    <label
                      htmlFor="like-checkbox"
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-50 cursor-pointer"
                    >
                      <Heart className="h-5 w-5 text-gray-400 peer-checked:text-red-500" />
                    </label>
                  </div>
                  <p className="spenden-info__text text-gray-600">1.1k people have donated in total</p>
                </div>
              </div>

              <div className="spenden-liste">
                <h2 className="text-lg font-semibold mb-4">Recent Donations</h2>
                {recentDonations.map((donation) => (
                  <div key={donation.id} className="last_spende flex items-center gap-3 mb-3">
                    <Heart className="h-5 w-5 text-red-500" />
                    <div className="spendencolm">
                      <p className="namedesspenders font-medium">{donation.name}</p>
                      <div className="betrag flex items-center">
                        <p className="font-bold">{donation.amount}€</p>
                        <p className="text-gray-500 text-sm">&nbsp;· {donation.timeAgo} ago</p>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  className="allespendenanzeigen text-blue-600 font-medium hover:underline w-full text-center py-2"
                  onClick={() => setShowDonationsModal(true)}
                >
                  SHOW MORE
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Top Donations</h2>
              <table className="leaderboard w-full">
                <thead>
                  <tr className="text-left text-gray-600">
                    <th className="pb-2">Rank</th>
                    <th className="pb-2">Donor</th>
                    <th className="pb-2 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {topDonors.map((donor) => (
                    <tr key={donor.id} className="border-t border-gray-100">
                      <td className="py-3">
                        {donor.rank === 1 && (
                          <span className="inline-block p-1 bg-yellow-100 text-yellow-800 rounded">🥇</span>
                        )}
                        {donor.rank === 2 && (
                          <span className="inline-block p-1 bg-gray-100 text-gray-800 rounded">🥈</span>
                        )}
                        {donor.rank === 3 && (
                          <span className="inline-block p-1 bg-amber-100 text-amber-800 rounded">🥉</span>
                        )}
                      </td>
                      <td className="py-3">{donor.name}</td>
                      <td className="py-3 text-right font-semibold">€{donor.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Donations Modal */}
      {showDonationsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Donations (1401)</h2>
                <button onClick={() => setShowDonationsModal(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mb-4">All donations are shown here</p>

              <div className="artderspendenanzeigen mb-4">
                <p className="auswahltopoderneu font-medium text-blue-600">Newest</p>
              </div>

              <div className="spendenopoup space-y-4">
                {Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="last_spende flex items-center gap-3">
                      <Heart className="h-5 w-5 text-red-500" />
                      <div className="spendencolm">
                        <p className="namedesspenders font-medium">Franziksa Linus</p>
                        <div className="betrag flex items-center">
                          <p className="font-bold">7€</p>
                          <p className="text-gray-500 text-sm">&nbsp;· 7 minutes ago</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
