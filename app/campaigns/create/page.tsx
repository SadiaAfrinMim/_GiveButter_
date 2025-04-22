"use client"

import Link from "next/link"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreateCampaign() {
  const [step, setStep] = useState(1)
  const [postalCode, setPostalCode] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [amount, setAmount] = useState(8000)
  const [campaignTitle, setCampaignTitle] = useState("")
  const [campaignDescription, setCampaignDescription] = useState("")
  const [selectedBeneficiary, setSelectedBeneficiary] = useState("")
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [showPreview, setShowPreview] = useState(false)
  const editorRef = useRef<HTMLIFrameElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Initialize the editor when the component mounts
  useEffect(() => {
    if (editorRef.current && editorRef.current.contentWindow) {
      const doc = editorRef.current.contentWindow.document
      doc.designMode = "on"
      doc.body.innerHTML = campaignDescription
    }
  }, [step, campaignDescription])

  // Format text in the editor
  const formatText = (command: string) => {
    if (editorRef.current && editorRef.current.contentWindow) {
      editorRef.current.contentWindow.document.execCommand(command, false, null)
    }
  }

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setUploadedFiles([...uploadedFiles, ...newFiles])
    }
  }

  // Remove a file from the list
  const removeFile = (index: number) => {
    const newFiles = [...uploadedFiles]
    newFiles.splice(index, 1)
    setUploadedFiles(newFiles)
  }

  // Check if the current step is valid
  const isStepValid = () => {
    switch (step) {
      case 1:
        return postalCode.length === 5 && selectedCategory !== ""
      case 2:
        return amount > 1
      case 3:
        return selectedBeneficiary !== ""
      case 4:
        return campaignTitle.length > 0 && campaignDescription.length > 10
      case 5:
        return uploadedFiles.length > 0
      default:
        return true
    }
  }

  // Progress to the next step
  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1)
    }
  }

  // Go back to the previous step
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  // Calculate the progress percentage
  const progressPercentage = (step / 6) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 bg-blue-600 text-white p-8 rounded-lg">
            <Image src="/placeholder.svg?height=50&width=50" alt="Logo" width={50} height={50} className="mb-6" />
            <h1 className="text-3xl font-bold mb-4">Raise funds better, faster, and for free.</h1>
            <p className="text-blue-100">
              Create your account and access all 130+ fundraising features. Completely free.
            </p>
          </div>

          <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg">
            {step === 1 && (
              <div className="containerfirststep">
                <h1 className="text-2xl font-bold mb-4">Where will the funds go?</h1>
                <div className="subtitle mb-6">
                  <p className="text-gray-600">Choose the location where you want to receive the donation funds.</p>
                  <Link href="#" className="text-blue-600 hover:underline">
                    Countries where we support fundraising campaigns.
                  </Link>
                </div>

                <div className="mb-4">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <Select defaultValue="de">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de">Germany</SelectItem>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-6">
                  <label htmlFor="postal" className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <Input
                    type="text"
                    id="postal"
                    placeholder="e.g. 01067"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className={postalCode !== "" && postalCode.length !== 5 ? "border-red-500" : ""}
                  />
                  {postalCode !== "" && postalCode.length !== 5 && (
                    <p className="text-red-500 text-sm mt-1">Please enter a valid German postal code.</p>
                  )}
                </div>

                <p className="text-gray-700 mb-4">What best describes the reason you are collecting donation funds?</p>

                <div className="categories grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                  {[
                    "Funerals",
                    "Education",
                    "Volunteer",
                    "Events",
                    "Family",
                    "Newlyweds",
                    "Creative Projects",
                    "Local Projects",
                    "Medical",
                    "Monthly Bills",
                    "Emergencies",
                    "Travel",
                    "Religious Projects",
                    "Other",
                    "Sports",
                    "Animals",
                    "Ukraine Aid",
                    "Environment",
                    "Business",
                    "Competitions",
                    "Wishes",
                  ].map((category) => (
                    <div
                      key={category}
                      className={`category p-2 border rounded-md cursor-pointer text-center text-sm ${
                        selectedCategory === category
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="containertwostep">
                <h1 className="text-2xl font-bold mb-6">What is your fundraising goal?</h1>
                <div className="donation-input-container relative mb-4">
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                    <span className="currency-symbol px-3 py-2 bg-gray-100 text-gray-600 border-r border-gray-300">
                      €
                    </span>
                    <Input
                      type="number"
                      id="amountInput"
                      placeholder="Enter amount"
                      min="1"
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="border-0 flex-1"
                    />
                    <span className="currency-label px-3 py-2 bg-gray-100 text-gray-600 border-l border-gray-300">
                      EUR
                    </span>
                  </div>
                </div>

                {amount <= 1 && (
                  <p className="error-message text-red-500 text-sm mb-4">
                    Please choose a goal amount with a value greater than 1.
                  </p>
                )}

                <p className="hint text-gray-600 mb-6">
                  Fundraising campaigns like yours typically have a goal of <strong>8,000&nbsp;€</strong>
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="containerthreestep">
                <h1 className="text-2xl font-bold mb-6">Who are you raising funds for?</h1>

                <div className="space-y-4">
                  <div
                    className={`cardfurwen p-4 border rounded-lg flex items-start gap-4 cursor-pointer ${
                      selectedBeneficiary === "self" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                    }`}
                    onClick={() => setSelectedBeneficiary("self")}
                  >
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Icon"
                      width={48}
                      height={48}
                      className="mt-1"
                    />
                    <div className="card-contentfurwen">
                      <h2 className="font-semibold text-lg">Yourself</h2>
                      <p className="text-gray-600">The funds will be paid out to your bank account for personal use</p>
                    </div>
                  </div>

                  <div
                    className={`cardfurwen p-4 border rounded-lg flex items-start gap-4 cursor-pointer ${
                      selectedBeneficiary === "other" ? "border-blue-500 bg-blue-50" : "border-gray-200"
                    }`}
                    onClick={() => setSelectedBeneficiary("other")}
                  >
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Icon"
                      width={48}
                      height={48}
                      className="mt-1"
                    />
                    <div className="card-contentfurwen">
                      <h2 className="font-semibold text-lg">Another Person</h2>
                      <p className="text-gray-600">The funds will be paid out to another person</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="containerfourstep">
                <div className="container-titelbec">
                  <label htmlFor="titelubeInput" className="block text-sm font-medium text-gray-700 mb-1">
                    Give your fundraising campaign a title
                  </label>
                  <div className="input-group-titelbec relative mb-6">
                    <Input
                      type="text"
                      id="titelubeInput"
                      maxLength={60}
                      placeholder="Donate in memory of..."
                      value={campaignTitle}
                      onChange={(e) => setCampaignTitle(e.target.value)}
                      className={campaignTitle === "" ? "border-red-500" : ""}
                    />
                    <span
                      id="charCount"
                      className="char-counter-titelbec absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-500"
                    >
                      {60 - campaignTitle.length}
                    </span>
                    {campaignTitle === "" && (
                      <div id="titelError" className="error-titelbec text-red-500 text-sm mt-1">
                        Please enter a campaign title.
                      </div>
                    )}
                  </div>

                  <label htmlFor="storyInput" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell your story
                  </label>
                  <div className="input-group-titelbec mb-4">
                    <div className="toolbar flex gap-2 mb-2">
                      <Button type="button" variant="outline" size="sm" onClick={() => formatText("bold")}>
                        Bold
                      </Button>
                      <Button type="button" variant="outline" size="sm" onClick={() => formatText("italic")}>
                        Italic
                      </Button>
                      <Button type="button" variant="outline" size="sm" onClick={() => formatText("underline")}>
                        Underline
                      </Button>
                    </div>
                    <iframe
                      ref={editorRef}
                      id="storyInput"
                      className="w-full h-64 border border-gray-300 rounded-md p-3"
                    ></iframe>
                    {campaignDescription.length < 10 && (
                      <div id="storyError" className="error-titelbec text-red-500 text-sm mt-1">
                        The story must contain at least 10 characters.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="containerfivestep">
                <div className="upload-container">
                  <h2 className="text-xl font-bold mb-6">Campaign Photos</h2>

                  <div
                    className="dropzone border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6 cursor-pointer hover:border-blue-500 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <p className="dropzone-text text-gray-600 mb-4">Drop files here or</p>
                    <Button type="button" id="uploadBtn" className="upload-button mb-2">
                      Choose from your device
                    </Button>
                    <p className="file-formats text-gray-500 text-sm">JPG, PNG, GIF (max 50 MB)</p>
                    <input
                      type="file"
                      id="fileInput"
                      ref={fileInputRef}
                      multiple
                      accept=".jpg,.jpeg,.png,.gif"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div id="fileList" className="file-list space-y-3">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="file-item bg-gray-50 rounded-lg p-3 flex items-center">
                          <Image
                            src={URL.createObjectURL(file) || "/placeholder.svg"}
                            alt="Preview"
                            width={40}
                            height={40}
                            className="rounded mr-3 object-cover"
                          />
                          <div className="file-details flex-1">
                            <span className="font-medium">{file.name}</span>
                            <div className="file-size text-gray-500 text-sm">{(file.size / 1024).toFixed(2)} KB</div>
                          </div>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="remove-button"
                            onClick={() => removeFile(index)}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="containersixstep text-center py-8">
                <h1 className="text-3xl font-bold mb-6">That's it!</h1>
                <p className="text-xl mb-6">Your campaign is ready to launch</p>
                <Link href="/campaigns" className="text-blue-600 text-lg hover:underline">
                  Your campaign link: https://yourcampaign.com/12345
                </Link>
              </div>
            )}

            <div className="schritteundprozent mt-8">
              <div className="progress-containersteps h-2 bg-gray-200 rounded-full mb-4">
                <div
                  className="progress-barsteps h-full bg-blue-600 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>

              <div className="schritte flex justify-between">
                <Button variant="outline" onClick={prevStep} disabled={step === 1} className="back">
                  Back
                </Button>

                <div className="buttonsmitvorschau flex gap-2">
                  {step >= 4 && (
                    <Button variant="outline" id="vorschauanzeigen" onClick={() => setShowPreview(true)}>
                      Show Preview
                    </Button>
                  )}
                  <Button id="weiter" onClick={nextStep} disabled={!isStepValid()}>
                    {step === 6 ? "Publish" : "Continue"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="obeninfopopfinishvorschau flex justify-between items-center p-4 border-b">
              <p className="font-semibold">Preview</p>
              <button onClick={() => setShowPreview(false)} className="text-gray-500 hover:text-gray-700">
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

            <div className="framehauptseite h-[80vh] overflow-auto">
              <iframe src="/campaigns/view" className="w-full h-full"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
