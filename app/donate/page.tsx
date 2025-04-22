"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { ChevronRight } from "lucide-react"

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState(50)
  const [tipPercentage, setTipPercentage] = useState(9)
  const [tipAmount, setTipAmount] = useState(4.5)
  const [selectedPayment, setSelectedPayment] = useState("paypal")

  const handleDonationChange = (amount: number) => {
    setDonationAmount(amount)
    setTipAmount((amount * tipPercentage) / 100)
  }

  const handleTipChange = (value: number[]) => {
    const percentage = value[0]
    setTipPercentage(percentage)
    setTipAmount((donationAmount * percentage) / 100)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="jetztspendentiteletc mb-8">
        <h1 className="text-3xl font-bold mb-4">Krebserkrankung - Eine liebe Kollegin und Freundin-Christina</h1>
        <div className="erstellerderkampagne flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Creator"
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="text-gray-600">Deine Spende hilft: Regina Ursula</p>
        </div>
      </div>

      <div className="spendenzahlen bg-gray-50 rounded-lg p-6">
        <div className="contentspenden max-w-3xl mx-auto">
          <div className="spendenablauf flex items-center mb-8">
            <p className="font-medium">Betrag auswählen</p>
            <ChevronRight className="h-4 w-4 mx-2" />
            <p className="font-medium">Zahlungsmethode auswählen</p>
            <ChevronRight className="h-4 w-4 mx-2" />
            <p className="text-gray-400">Fertig</p>
          </div>

          <div className="betragauswahlen mb-8">
            <h2 className="text-xl font-semibold mb-4">Betrag auswählen</h2>
            <div className="donation-options grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[50, 100, 200, 300, 500, 1000].map((amount) => (
                <div
                  key={amount}
                  className={`donation-option cursor-pointer p-3 border rounded-md text-center ${
                    donationAmount === amount ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-300"
                  } ${amount === 200 ? "recommended relative" : ""}`}
                  onClick={() => handleDonationChange(amount)}
                >
                  {amount === 200 && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                      Empfohlen
                    </div>
                  )}
                  <label className="cursor-pointer">
                    <input
                      type="radio"
                      name="donation"
                      value={amount}
                      checked={donationAmount === amount}
                      onChange={() => handleDonationChange(amount)}
                      className="sr-only"
                    />
                    {amount} €
                  </label>
                </div>
              ))}
            </div>

            <div className="endbetrag flex items-center border border-gray-300 rounded-md p-3 mb-8">
              <div className="linksbetragcol mr-4">
                <p className="euro text-xl font-bold">€</p>
                <p className="text-sm text-gray-500">EUR</p>
              </div>
              <div className="betrageingeben flex items-center flex-1">
                <Input
                  type="text"
                  className="text-xl font-bold border-none focus:ring-0 p-0"
                  maxLength={5}
                  value={donationAmount}
                  onChange={(e) => handleDonationChange(Number(e.target.value) || 0)}
                />
                <p className="text-xl font-bold">.00</p>
              </div>
            </div>
          </div>

          <div className="frewilligerbetrag mb-8">
            <h2 className="text-xl font-semibold mb-2">Freiwilliger Betrag an Plattform</h2>
            <p className="text-gray-600 mb-4">
              Das 0% Plattformgebühr-Modell für Organisatoren wird von freiwilligen Beiträgen von großzügigen Spendern
              wie dir unterstützt:
            </p>

            <div className="range-slider mb-6">
              <div className="mb-2 flex justify-between text-sm text-gray-500">
                <span>0%</span>
                <span>
                  {tipPercentage}% ({tipAmount.toFixed(2)}€)
                </span>
                <span>20%</span>
              </div>
              <Slider defaultValue={[9]} max={20} step={1} value={[tipPercentage]} onValueChange={handleTipChange} />
            </div>
          </div>

          <div className="frewilligerbetrag mb-8">
            <h2 className="text-xl font-semibold mb-4">Zahlungsmethoden</h2>

            <div className="payment-container space-y-3">
              <label
                className={`payment-option flex items-center gap-3 p-3 border rounded-md cursor-pointer ${
                  selectedPayment === "paypal" ? "border-blue-500 bg-blue-50" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === "paypal"}
                  onChange={() => setSelectedPayment("paypal")}
                  className="sr-only"
                />
                <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                  {selectedPayment === "paypal" && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                </div>
                <div className="bildpayname flex items-center gap-2">
                  <Image src="/placeholder.svg?height=24&width=80" alt="PayPal" width={80} height={24} />
                  <span>PayPal</span>
                </div>
              </label>

              <label
                className={`payment-option flex items-center gap-3 p-3 border rounded-md cursor-pointer ${
                  selectedPayment === "googlepay" ? "border-blue-500 bg-blue-50" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === "googlepay"}
                  onChange={() => setSelectedPayment("googlepay")}
                  className="sr-only"
                />
                <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                  {selectedPayment === "googlepay" && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                </div>
                <div className="bildpayname flex items-center gap-2">
                  <Image src="/placeholder.svg?height=24&width=80" alt="Google Pay" width={80} height={24} />
                  <span>Google Pay</span>
                </div>
              </label>

              <label
                className={`payment-option flex items-center gap-3 p-3 border rounded-md cursor-pointer ${
                  selectedPayment === "card" ? "border-blue-500 bg-blue-50" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === "card"}
                  onChange={() => setSelectedPayment("card")}
                  className="sr-only"
                />
                <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center">
                  {selectedPayment === "card" && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                </div>
                <div className="bildpayname flex items-center gap-2">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Credit Card" width={24} height={24} />
                  <span>Kredit- oder Debitkarte</span>
                </div>
              </label>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Deine Worte</h2>
          <div className="worteunterstuzung mb-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Dein Name <small>(optional)</small>
              </label>
              <Input type="text" placeholder="Dein Name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Deine Nachricht <small>(optional)</small>
              </label>
              <Textarea placeholder="Nachricht" className="h-24" />
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Abschluss</h2>
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="checkbox1" />
                  <label htmlFor="checkbox1" className="text-sm text-gray-600">
                    Meinen Namen nicht öffentlich in der Spendenaktion anzeigen.
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="checkbox2" />
                  <label htmlFor="checkbox2" className="text-sm text-gray-600">
                    Ja, ich möchte Neuigkeiten von der Plattform dazu erhalten, wie ich das Leben von Menschen positiv
                    verändern kann. Ich kann diese Neuigkeiten jederzeit abbestellen.
                  </label>
                </div>

                <hr className="my-4" />

                <div className="donation-summary">
                  <strong className="block mb-2">Deine Spende</strong>
                  <div className="donation-item flex justify-between mb-2">
                    <span className="text-gray-600">Deine Spende</span>
                    <span>{donationAmount.toFixed(2)} €</span>
                  </div>
                  <div className="donation-item flex justify-between mb-2">
                    <span className="text-gray-600">Freiwillige Unterstützung für Plattform</span>
                    <span>{tipAmount.toFixed(2)} €</span>
                  </div>
                  <hr className="my-2" />
                  <div className="donation-total flex justify-between font-bold">
                    <span>Heute fällige Gesamtsumme</span>
                    <span>{(donationAmount + tipAmount).toFixed(2)} €</span>
                  </div>
                </div>

                <Button className="w-full h-12 mt-4 bg-[#0070ba] hover:bg-[#005ea6]">
                  <Image src="/placeholder.svg?height=24&width=80" alt="PayPal" width={80} height={24} />
                </Button>

                <p className="terms text-xs text-gray-500 mt-2">
                  Indem du auf "PayPal" klickst, stimmst du den{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Nutzungsbedingungen
                  </Link>{" "}
                  und dem{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Datenschutzhinweis
                  </Link>{" "}
                  zu. Weitere Informationen zu{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    Preisgestaltung und Gebühren
                  </Link>
                  .
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
