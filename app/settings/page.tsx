"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { ChevronLeft, X } from "lucide-react"
import Image from "next/image"

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [newEmail, setNewEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log("New email:", newEmail)
    setShowEmailModal(false)
    setNewEmail("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Back button and title */}
        <div className="flex items-center gap-2 mb-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <h1 className="text-2xl font-bold">Einstellungen</h1>
        </div>

        {/* Settings card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          {/* Email section */}
          <div className="flex justify-between items-center p-6 border-b">
            <div>
              <p className="font-bold mb-1">E-Mail-Adresse</p>
              <p className="text-gray-600">linusrosenbeeger@gmail.com</p>
            </div>
            <Button 
              variant="link" 
            className="text-blue-600 hover:underline border border-blue-600 px-3  rounded-full"
              onClick={() => setShowEmailModal(true)}
            >
              Bearbeiten
            </Button>
          </div>

          {/* Password section */}
          <div className="flex justify-between items-center p-6 border-b">
            <div>
              <p className="font-bold mb-1">Passwort</p>
              <p className="text-gray-600">●●●●●●●●●●●●</p>
            </div>
            <Link href="/auth/login" className="text-blue-600 hover:underline border border-blue-600 px-3 py-1 rounded-full">
  Bearbeiten
</Link>

          </div>

          {/* Notifications section */}
          <div className="flex justify-between items-center p-6 border-b">
            <div>
              <p className="font-bold mb-1">Benachrichtigungen</p>
              <p className="text-gray-600">Regler betätigen, um An/Auszuschalten</p>
            </div>
            <Switch
  id="notificationToggle"
  checked={notificationsEnabled}
  onCheckedChange={setNotificationsEnabled}
  className="data-[state=checked]:bg-blue-600 border border-gray-300 h-6 w-11 rounded-full transition-colors"
/>

          </div>

          {/* Delete account section */}
          <div className="p-6">
          <Button
  variant="destructive"
  className="w-full sm:w-auto text-red-600 hover:text-white rounded-full  hover:bg-red-700 border border-red-600 text-center "
>
  Account löschen
</Button>

          </div>
        </div>
      </div>

      {/* Email Change Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            {/* Close button */}
            <button 
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            {/* Modal content */}
            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <Image 
                  src="/logo.svg" 
                  alt="Logo" 
                  width={120} 
                  height={40} 
                  className="h-8 w-auto"
                />
              </div>

              <h2 className="text-xl font-bold text-center">
                Neue E-Mail Adresse ändern
              </h2>

              <p className="text-gray-600 text-center">
                Bitte gib deine neue E-Mail Adresse ein. Wir werden dir einen Bestätigungslink senden.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Deine neue E-Mail Adresse <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="reset-email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-2 text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  Weiter
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}