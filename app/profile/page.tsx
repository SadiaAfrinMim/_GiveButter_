"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, X } from "lucide-react"

export default function Profile() {
  const [profileImage, setProfileImage] = useState<string>("/placeholder.svg?height=128&width=128")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [activeModal, setActiveModal] = useState<string | null>(null)

  // Form data states
  const [name, setName] = useState({ firstName: "Linus", lastName: "Klos" })
  const [bio, setBio] = useState("Linus Klos")
  const [link, setLink] = useState("https://fup.com")
  const [address, setAddress] = useState({
    street: "Kornblumenweg",
    houseNumber: "6",
    postalCode: "31515",
    city: "Wunstorf",
  })

  // Handle profile picture change
  const handleChangeImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfileImage(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setProfileImage("/placeholder.svg?height=128&width=128")
  }

  // Modal handling
  const openModal = (modalId: string) => {
    setActiveModal(modalId)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  // Form submission handlers
  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your API
    closeModal()
  }

  const handleBioSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    closeModal()
  }

  const handleLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    closeModal()
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    closeModal()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">Profil Bearbeiten</h1>
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6">
          <Image
            id="profile-picture"
            src={profileImage || "/placeholder.svg"}
            alt="Profilbild"
            width={128}
            height={128}
            className="rounded-full border border-gray-200 shadow-sm"
          />

          <div className="flex gap-4 mt-4">
            <Button onClick={handleChangeImage}>Ändern</Button>
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50"
              onClick={handleRemoveImage}
            >
              Entfernen
            </Button>
          </div>

          <input type="file" ref={fileInputRef} accept="image/*" className="hidden" onChange={handleFileChange} />
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Name */}
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-bold">Name</p>
            <p className="text-gray-600">
              {name.firstName} {name.lastName}
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-4" onClick={() => openModal("name")}>
            Bearbeiten
          </Button>
        </div>

        <hr className="border-gray-200" />

        {/* Bio */}
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-bold">Bio</p>
            <p className="text-gray-600">{bio}</p>
          </div>
          <Button variant="outline" className="rounded-full px-4" onClick={() => openModal("bio")}>
            Bearbeiten
          </Button>
        </div>

        <hr className="border-gray-200" />

        {/* Link */}
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-bold">Link</p>
            <p className="text-gray-600">{link}</p>
          </div>
          <Button variant="outline" className="rounded-full px-4" onClick={() => openModal("link")}>
            Bearbeiten
          </Button>
        </div>

        <hr className="border-gray-200" />

        {/* Address */}
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-bold">Adresse</p>
            <p className="text-gray-600">{address.street}</p>
          </div>
          <Button variant="outline" className="rounded-full px-4" onClick={() => openModal("address")}>
            Bearbeiten
          </Button>
        </div>

        <hr className="border-gray-200" />

        {/* House Number */}
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-bold">Hausnummer</p>
            <p className="text-gray-600">{address.houseNumber}</p>
          </div>
          <Button variant="outline" className="rounded-full px-4" onClick={() => openModal("houseNumber")}>
            Bearbeiten
          </Button>
        </div>

        <hr className="border-gray-200" />

        {/* Postal Code */}
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-bold">Postleitzahl</p>
            <p className="text-gray-600">{address.postalCode}</p>
          </div>
          <Button variant="outline" className="rounded-full px-4" onClick={() => openModal("postalCode")}>
            Bearbeiten
          </Button>
        </div>

        <hr className="border-gray-200" />

        {/* City */}
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-bold">Ort</p>
            <p className="text-gray-600">{address.city}</p>
          </div>
          <Button variant="outline" className="rounded-full px-4" onClick={() => openModal("city")}>
            Bearbeiten
          </Button>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                {activeModal === "name" && "Name im Profil bearbeiten"}
                {activeModal === "bio" && "Bio im Profil bearbeiten"}
                {activeModal === "link" && "Link im Profil bearbeiten"}
                {(activeModal === "address" ||
                  activeModal === "houseNumber" ||
                  activeModal === "postalCode" ||
                  activeModal === "city") &&
                  "Adresse bearbeiten"}
              </h2>
              <Button variant="ghost" size="icon" onClick={closeModal}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {activeModal === "name" && (
              <form onSubmit={handleNameSubmit}>
                <p className="text-gray-600 mb-4">
                  Das ist der Name, der Öffentlich im Profil steht! Er sollte auch auf deinem Ausweis Dokument sein
                </p>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dein Vorname, Zweitname <small>(erforderlich)</small>
                  </label>
                  <input
                    type="text"
                    value={name.firstName}
                    onChange={(e) => setName({ ...name, firstName: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dein Nachname <small>(erforderlich)</small>
                  </label>
                  <input
                    type="text"
                    value={name.lastName}
                    onChange={(e) => setName({ ...name, lastName: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Speichern
                </Button>
              </form>
            )}

            {activeModal === "bio" && (
              <form onSubmit={handleBioSubmit}>
                <p className="text-gray-600 mb-4">Das ist die Bio, der Öffentlich im Profil steht!</p>

                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full h-40 p-2 border border-gray-300 rounded-md resize-none"
                />

                <Button type="submit" className="w-full mt-4">
                  Speichern
                </Button>
              </form>
            )}

            {activeModal === "link" && (
              <form onSubmit={handleLinkSubmit}>
                <p className="text-gray-600 mb-4">Das ist der Link, der Öffentlich im Profil steht! Er ist klickbar.</p>

                <input
                  type="url"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />

                <Button type="submit" className="w-full mt-4">
                  Speichern
                </Button>
              </form>
            )}

            {activeModal === "address" && (
              <form onSubmit={handleAddressSubmit}>
                <p className="text-gray-600 mb-4">Deine Adresse wird für Auszahlungen benötigt.</p>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Straße <small>(erforderlich)</small>
                  </label>
                  <input
                    type="text"
                    value={address.street}
                    onChange={(e) => setAddress({ ...address, street: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Speichern
                </Button>
              </form>
            )}

            {activeModal === "houseNumber" && (
              <form onSubmit={handleAddressSubmit}>
                <p className="text-gray-600 mb-4">Deine Hausnummer wird für Auszahlungen benötigt.</p>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hausnummer <small>(erforderlich)</small>
                  </label>
                  <input
                    type="text"
                    value={address.houseNumber}
                    onChange={(e) => setAddress({ ...address, houseNumber: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Speichern
                </Button>
              </form>
            )}

            {activeModal === "postalCode" && (
              <form onSubmit={handleAddressSubmit}>
                <p className="text-gray-600 mb-4">Deine Postleitzahl wird für Auszahlungen benötigt.</p>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postleitzahl <small>(erforderlich)</small>
                  </label>
                  <input
                    type="text"
                    value={address.postalCode}
                    onChange={(e) => setAddress({ ...address, postalCode: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Speichern
                </Button>
              </form>
            )}

            {activeModal === "city" && (
              <form onSubmit={handleAddressSubmit}>
                <p className="text-gray-600 mb-4">Dein Wohnort wird für Auszahlungen benötigt.</p>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ort <small>(erforderlich)</small>
                  </label>
                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Speichern
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
