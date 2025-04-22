"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import CampaignSidebar from "@/components/campaign-sidebar"

export default function CampaignDonations() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("recent")

  // Sample donation data
  const donations = [
    {
      id: 1,
      name: "Linus Rosenberger",
      amount: 5,
      comment: "Ich hoffe du wirst gesund (Kommentar)",
      timestamp: 24,
      timeText: "vor 24 Std",
    },
    {
      id: 2,
      name: "Anna Mustermann",
      amount: 10,
      comment: "",
      timestamp: 48,
      timeText: "vor 2 Tagen",
    },
    {
      id: 3,
      name: "Max Mustermann",
      amount: 15,
      comment: "",
      timestamp: 72,
      timeText: "vor 3 Tagen",
    },
    {
      id: 4,
      name: "Clara Müller",
      amount: 5,
      comment: "",
      timestamp: 96,
      timeText: "vor 4 Tagen",
    },
    {
      id: 5,
      name: "John Doe",
      amount: 20,
      comment: "",
      timestamp: 120,
      timeText: "vor 5 Tagen",
    },
  ]

  // Filter donations based on search term
  const filteredDonations = donations.filter(
    (donation) =>
      donation.name.toLowerCase().includes(searchTerm.toLowerCase()) || donation.amount.toString().includes(searchTerm),
  )

  // Sort donations based on selected sort method
  const sortedDonations = [...filteredDonations].sort((a, b) => {
    if (sortBy === "recent") {
      return a.timestamp - b.timestamp
    } else if (sortBy === "amount") {
      return b.amount - a.amount
    }
    return 0
  })

  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <CampaignSidebar activePage="donations" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hello, Linus</b>&nbsp;&bull;&nbsp; You are managing: Campaign Title
              </div>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center gap-2"
              >
                https://yourcustomcampaign.html
                <button
                  onClick={() => navigator.clipboard.writeText("https://yourcustomcampaign.html")}
                  className="text-gray-500 hover:text-gray-700"
                >
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
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <div>
              <Link href="/campaigns/view">
                <Button variant="outline">View</Button>
              </Link>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="containerallspenden bg-white rounded-lg p-6">
          <div className="search-filter-container mb-4">
            <Input
              id="search-input"
              type="text"
              placeholder="Search donations (name or amount)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64"
            />
          </div>

          <div className="sort-buttons flex gap-2 mb-6">
            <Button
              id="sort-recent"
              variant={sortBy === "recent" ? "default" : "outline"}
              onClick={() => setSortBy("recent")}
              className="sort-button"
            >
              Recent
            </Button>
            <Button
              id="sort-amount"
              variant={sortBy === "amount" ? "default" : "outline"}
              onClick={() => setSortBy("amount")}
              className="sort-button"
            >
              Amount
            </Button>
          </div>

          <div className="donations-list space-y-4">
            {sortedDonations.map((donation) => (
              <div
                key={donation.id}
                className="donation-item bg-gray-50 rounded-lg p-4"
                data-timestamp={donation.timestamp}
              >
                <div className="donation-details">
                  <div className="donation-name-amount flex justify-between mb-1">
                    <span className="donor-name font-medium">{donation.name}</span>
                    <span className="donation-amount font-bold">{donation.amount}€</span>
                  </div>
                  {donation.comment && <div className="kommentar text-gray-600 mb-1">{donation.comment}</div>}
                  <div className="donation-time text-sm text-gray-500">{donation.timeText}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
