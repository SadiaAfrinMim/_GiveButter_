"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Login() {
  const [activeForm, setActiveForm] = useState<
    "login" | "signup" | "reset-email" | "reset-code" | "new-password" | "pwsetfinish" | "verifycations" | "finished"
  >("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...verificationCode]
      newCode[index] = value
      setVerificationCode(newCode)

      // Auto-focus next input if value is entered
      if (value && index < 5) {
        const nextInput = document.querySelector(`input[name="code-${index + 1}"]`) as HTMLInputElement
        if (nextInput) nextInput.focus()
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6 text-center">
          <Image
            src="/placeholder.svg?height=50&width=150"
            alt="Logo"
            width={150}
            height={50}
            className="mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">
            {activeForm === "login" && "Log in to GiveBetter"}
            {activeForm === "signup" && "Sign up for GiveBetter"}
            {activeForm === "reset-email" && "Reset Password: Enter Email"}
            {activeForm === "reset-code" && "Enter Verification Code"}
            {activeForm === "new-password" && "Set New Password"}
            {activeForm === "pwsetfinish" && "Password Reset"}
            {activeForm === "verifycations" && "ENTER CODE"}
            {activeForm === "finished" && "Registration Complete"}
          </h1>
          {activeForm === "login" && <p className="text-gray-600">Your Digital Fundraising Platform</p>}
          {activeForm === "signup" && <p className="text-gray-600">Your Digital Fundraising Platform</p>}
          {activeForm === "reset-email" && (
            <p className="text-gray-600">Please enter your business email address to reset your password.</p>
          )}
          {activeForm === "reset-code" && (
            <p className="text-gray-600">We have sent a code to your email address. Please enter it below.</p>
          )}
          {activeForm === "new-password" && <p className="text-gray-600">Please enter your new password.</p>}
          {activeForm === "pwsetfinish" && <p className="text-gray-600">Done.</p>}
          {activeForm === "verifycations" && (
            <p className="text-gray-600">
              Your security is our top priority. Enter the code we sent to your phone number{" "}
              <strong>+49***448914</strong>.
            </p>
          )}
          {activeForm === "finished" && (
            <p className="text-gray-600">You can now proceed with creating your campaign.</p>
          )}
        </div>

        <div className="space-y-4 mb-6">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12"
            onClick={() => console.log("Google login")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
            </svg>
            <span>Login with Google</span>
          </Button>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 h-12"
            onClick={() => console.log("Apple login")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <span>Login with Apple</span>
          </Button>
        </div>

        <div className="border-t border-gray-200 my-6"></div>

        {activeForm === "login" && (
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your email address <span className="text-gray-400">(required)</span>
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-gray-400">(required)</span>
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>

            <Button className="w-full" onClick={() => console.log("Login")}>
              Continue
            </Button>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <button className="text-blue-600 hover:underline" onClick={() => setActiveForm("signup")}>
                  Sign up
                </button>
              </p>
              <p className="text-sm text-gray-600">
                Forgot your password?{" "}
                <button className="text-blue-600 hover:underline" onClick={() => setActiveForm("reset-email")}>
                  Click here
                </button>
              </p>
            </div>
          </form>
        )}

        {activeForm === "signup" && (
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Your email address <span className="text-gray-400">(required)</span>
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Your first name <span className="text-gray-400">(required)</span>
              </label>
              <Input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Your last name <span className="text-gray-400">(required)</span>
              </label>
              <Input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password <span className="text-gray-400">(required)</span>
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>

            <Button className="w-full" onClick={() => setActiveForm("verifycations")}>
              Continue
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <button className="text-blue-600 hover:underline" onClick={() => setActiveForm("login")}>
                  Log in
                </button>
              </p>
            </div>
          </form>
        )}

        {activeForm === "reset-email" && (
          <form className="space-y-4">
            <div>
              <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">
                Your email address <span className="text-gray-400">(required)</span>
              </label>
              <Input
                type="email"
                id="reset-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
              />
            </div>

            <Button className="w-full" onClick={() => setActiveForm("reset-code")}>
              Continue
            </Button>
          </form>
        )}

        {activeForm === "reset-code" && (
          <form className="space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              {verificationCode.map((digit, index) => (
                <Input
                  key={index}
                  type="text"
                  name={`code-${index}`}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-10 h-10 text-center"
                />
              ))}
            </div>

            <Button className="w-full" onClick={() => setActiveForm("new-password")}>
              Continue
            </Button>
          </form>
        )}

        {activeForm === "new-password" && (
          <form className="space-y-4">
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                New password <span className="text-gray-400">(required)</span>
              </label>
              <Input
                type="password"
                id="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
              />
            </div>

            <Button className="w-full" onClick={() => setActiveForm("pwsetfinish")}>
              Change password
            </Button>
          </form>
        )}

        {activeForm === "pwsetfinish" && (
          <div className="text-center">
            <p className="mb-6">You can now proceed with creating your campaign</p>
            <Link href="/">
              <Button className="w-full">Continue</Button>
            </Link>
          </div>
        )}

        {activeForm === "verifycations" && (
          <form className="space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              {verificationCode.map((digit, index) => (
                <Input
                  key={index}
                  type="text"
                  name={`code-${index}`}
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  className="w-10 h-10 text-center"
                />
              ))}
            </div>

            <p className="text-sm text-gray-500 text-center">This code expires in 10 minutes.</p>

            <div className="text-center">
              <button type="button" className="text-blue-600 hover:underline text-sm">
                Resend code
              </button>
            </div>

            <Button className="w-full" onClick={() => setActiveForm("finished")}>
              Verify
            </Button>
          </form>
        )}

        {activeForm === "finished" && (
          <div className="text-center">
            <Link href="/">
              <Button className="w-full">Continue</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
