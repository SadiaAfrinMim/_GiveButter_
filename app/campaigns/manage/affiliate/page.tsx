"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import CampaignSidebar from "@/components/campaign-sidebar"

export default function CampaignAffiliate() {
  const [affiliateEnabled, setAffiliateEnabled] = useState(false)
  const [copied, setCopied] = useState(false)

  const campaignUrl = "https://yourcustomcampaign.html"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(campaignUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <CampaignSidebar activePage="affiliate" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hello, Linus</b>&nbsp;&bull;&nbsp; You are managing: Campaign Title
              </div>
              <div className="flex items-center gap-2">
                <Link href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                  {campaignUrl}
                </Link>
                <button onClick={copyToClipboard} className="text-gray-500 hover:text-gray-700" aria-label="Copy link">
                  {copied ? (
                    <span className="text-green-500 text-xs">Copied!</span>
                  ) : (
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
                  )}
                </button>
              </div>
            </div>
            <div>
              <Link href="/campaigns/view">
                <Button variant="outline">View</Button>
              </Link>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="profil_infos bg-white rounded-lg p-6 flex justify-between items-center">
          <div className="profil_infos_left">
            <p className="font-bold text-lg mb-1">Affiliate</p>
            <p className="text-gray-600">Toggle to turn On/Off</p>
          </div>
          <div className="notification-container">
            <Switch
              id="affiliateToggle"
              checked={affiliateEnabled}
              onCheckedChange={setAffiliateEnabled}
              className="scale-125"
            />
          </div>
        </div>

        {affiliateEnabled && (
          <div className="mt-6 bg-white rounded-lg p-6">
            <h2 className="font-bold text-lg mb-4">Affiliate Program Information</h2>
            <p className="mb-4">
              When enabled, affiliates can promote your campaign and earn a commission on donations they refer.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-blue-800 mb-2">How it works</h3>
              <ul className="list-disc pl-5 text-blue-700 space-y-1">
                <li>Affiliates get a unique link to your campaign</li>
                <li>When someone donates through their link, the affiliate earns a commission</li>
                <li>You control the commission rate and terms</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Commission Settings</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-full max-w-xs">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Commission Rate (%)</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    defaultValue="5"
                    min="1"
                    max="20"
                  />
                </div>
                <div className="text-sm text-gray-500 italic">Recommended: 5-10%</div>
              </div>

              <Button className="w-full md:w-auto">Save Settings</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
