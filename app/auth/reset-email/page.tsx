"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ResetEmail() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])
  const codeInputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  // Handle verification code input change
  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode]
      newCode[index] = value
      setVerificationCode(newCode)

      // Auto-focus next input after entering a digit
      if (value && index < 5) {
        codeInputRefs.current[index + 1]?.focus()
      }
    }
  }

  // Handle backspace in code inputs
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      codeInputRefs.current[index - 1]?.focus()
    }
  }

  // Move to next step
  const goToNextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        {step === 1 && (
          <div className="form-content">
            <div className="flex justify-center mb-6">
              <Image src="/placeholder.svg?height=50&width=50&text=Logo" alt="Logo" width={50} height={50} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Neue Email Adresse ändern: E-Mail eingeben</h2>
            <p className="text-gray-600 mb-6 text-center">
              Bitte gib deine neue E-Mail Adresse ein. Wir werden dir einen Bestätigungscode senden.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="reset-email" className="text-sm text-gray-500 font-medium block">
                  Deine neue E-Mail Adresse <small>(erforderlich)</small>
                </label>
                <Input
                  type="email"
                  id="reset-email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <Button
                onClick={goToNextStep}
                className="w-full bg-indigo-500 hover:bg-indigo-700 text-white"
                disabled={!email}
              >
                Weiter
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-content">
            <div className="flex justify-center mb-6">
              <Image src="/placeholder.svg?height=50&width=50&text=Logo" alt="Logo" width={50} height={50} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Bestätigungscode eingeben</h2>
            <p className="text-gray-600 mb-6 text-center">
              Wir haben dir einen Code an {email} gesendet. Bitte gib ihn unten ein.
            </p>
            <div className="space-y-4">
              <div className="flex justify-center space-x-2 mb-6">
                {verificationCode.map((digit, index) => (
                  <Input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    ref={(el) => (codeInputRefs.current[index] = el)}
                    className="w-10 h-10 text-center border border-gray-300 rounded"
                  />
                ))}
              </div>
              <Button
                onClick={goToNextStep}
                className="w-full bg-indigo-500 hover:bg-indigo-700 text-white"
                disabled={verificationCode.some((digit) => !digit)}
              >
                Weiter
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-content">
            <div className="flex justify-center mb-6">
              <Image src="/placeholder.svg?height=50&width=50&text=Logo" alt="Logo" width={50} height={50} />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">Email Adresse erfolgreich geändert</h2>
            <p className="text-gray-600 mb-2 text-center">Fertig.</p>
            <p className="text-gray-600 mb-6 text-center">
              Du kannst nun fortfahren. Du erhältst zukünftig keine Emails mehr auf deine alte Email.
            </p>
            <Link href="/">
              <Button className="w-full bg-indigo-500 hover:bg-indigo-700 text-white">Fortfahren</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
