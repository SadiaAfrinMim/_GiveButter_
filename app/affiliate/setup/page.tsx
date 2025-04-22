"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft } from "lucide-react"

export default function AffiliateSetup() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    houseNumber: "",
    postalCode: "",
    city: "",
    email: "Linusros@gmc.de",
    phone: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const isFormValid = () => {
    if (step === 1) {
      return (
        formData.firstName.trim() !== "" &&
        formData.lastName.trim() !== "" &&
        formData.street.trim() !== "" &&
        formData.houseNumber.trim() !== "" &&
        formData.postalCode.trim() !== "" &&
        formData.city.trim() !== "" &&
        formData.phone.trim() !== ""
      )
    }
    return true
  }

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const progressPercentage = (step / 2) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/affiliate" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ChevronLeft className="h-5 w-5" />
            <span>Zurück</span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-sm">
            {step === 1 && (
              <div className="containerfirststep">
                <h1 className="text-2xl font-bold mb-4">
                  Persönliche Informationen eingeben, um mit Affiliate zu beginnen
                </h1>
                <div className="subtitle mb-6">
                  <p className="text-gray-600">
                    Deine Informationen sollten so sein, wie sie auf deinem Ausweis erscheinen, da wir sie
                    möglicherweise überprüfen, wenn wir Auszahlungen verarbeiten
                  </p>
                </div>

                <div className="space-y-4 max-w-xl">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        Vorname:
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Nachname:
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                        Straße:
                      </label>
                      <Input
                        type="text"
                        id="street"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="w-24">
                      <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Hausnr:
                      </label>
                      <Input
                        type="text"
                        id="houseNumber"
                        name="houseNumber"
                        value={formData.houseNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-24">
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                        PLZ:
                      </label>
                      <Input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex-1">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        Stadt:
                      </label>
                      <Input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email: (die gleiche, mit der du registriert bist)
                    </label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      disabled
                      className="bg-gray-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefonnummer:
                    </label>
                    <Input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="containertwostep">
                <h1 className="text-2xl font-bold mb-4">Du hast es geschafft</h1>
                <div className="subtitle mb-6">
                  <p className="text-gray-600">Hier ist ein Tutorial</p>
                </div>
                <div className="aspect-video w-full max-w-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/CK1HmB2IjM8?si=-eXCqCUwb7pc4a-9"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
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
                  Zurück
                </Button>

                <div className="buttonsmitvorschau">
                  <Button
                    onClick={step === 2 ? () => (window.location.href = "/affiliate/dashboard") : nextStep}
                    disabled={!isFormValid()}
                  >
                    {step === 2 ? "Fertig" : "Weiter"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 bg-blue-600 text-white p-8 rounded-lg affiliate">
            <Image src="/placeholder.svg?height=50&width=50" alt="Logo" width={50} height={50} className="mb-6" />
            <h1 className="text-3xl font-bold mb-4">Genieße die Vorteile von Affiliate</h1>
            <p className="text-blue-100">
              Erstelle dein Konto und erhalte Zugang zu allen Affiliate-Funktionen. Völlig kostenlos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
