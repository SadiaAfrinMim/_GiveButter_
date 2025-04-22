"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"
import CampaignSidebar from "@/components/campaign-sidebar"

export default function CampaignUpdates() {
  const [showModal, setShowModal] = useState(false)
  const [updateText, setUpdateText] = useState("")

  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <CampaignSidebar activePage="updates" />

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
                <button className="text-gray-500 hover:text-gray-700">
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
              <Button variant="outline" id="openModalBtn" onClick={() => setShowModal(true)}>
                Create Update
              </Button>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="updates-container space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Update Title</h3>
                  <p className="text-gray-500 text-sm">Posted on March 15, 2025</p>
                </div>
                <Button variant="ghost" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </Button>
              </div>
              <p className="text-gray-700">
                Thank you all for your generous donations! We've made significant progress towards our goal. We'll be
                using the funds to purchase new equipment for our project.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">First Update</h3>
                  <p className="text-gray-500 text-sm">Posted on March 1, 2025</p>
                </div>
                <Button variant="ghost" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </Button>
              </div>
              <p className="text-gray-700">
                We've just launched our campaign! We're excited to share our journey with you. Please help us spread the
                word by sharing this campaign with your friends and family.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Update Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Create Update!</h2>
                <button onClick={() => setShowModal(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mb-4 text-gray-600">
                Successful organizers send regular updates that encourage donations and sharing.
              </p>

              <div className="containerupdates">
                <label htmlFor="update-textarea" className="block mb-2 font-medium">
                  Inform donors about progress or news...
                </label>
                <div className="textareaupdaterel relative mb-4">
                  <textarea
                    id="update-textarea"
                    maxLength={7500}
                    placeholder="Write your update here..."
                    className="w-full h-40 p-3 border border-gray-300 rounded-md"
                    value={updateText}
                    onChange={(e) => setUpdateText(e.target.value)}
                  ></textarea>
                  <div className="remaining-chars absolute bottom-2 right-2 text-sm text-gray-500">
                    {updateText.length}/7500
                  </div>
                </div>

                <div className="upload-section mb-4 p-4 border border-dashed border-gray-300 rounded-md">
                  <p className="mb-2">
                    Upload photos or videos <strong>(Recommended)</strong>
                  </p>
                  <input type="file" multiple />
                </div>

                <div className="info-box mb-6 p-4 bg-blue-50 text-blue-700 rounded-md">
                  Your update will be emailed to donors and published on your campaign page.
                </div>

                <Button className="w-full" onClick={() => setShowModal(false)}>
                  Send Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
