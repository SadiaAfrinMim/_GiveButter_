import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Campaigns() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="spendenaktion_open">
        <h1 className="text-3xl font-bold mb-6">Your Campaigns</h1>
        <h2 className="text-xl font-semibold mb-4">Published</h2>

        <div className="space-y-4">
          {/* Campaign 1 */}
          <div className="spendenlayput_verwaöten bg-white rounded-lg p-4 shadow-sm flex flex-col md:flex-row gap-4">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Campaign"
              width={150}
              height={150}
              className="rounded-lg object-cover"
            />

            <div className="spendenlayoutcolm flex-1">
              <p className="titelspendenkam text-lg font-medium mb-2">
                Support our Prom – Together unforgettable memories
              </p>
              <p className="text-gray-600 mb-4">0€ of 270€ raised</p>

              <div className="buttonsvershow flex flex-wrap gap-2">
                <Link href="/campaigns/manage">
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                  Delete
                </Button>
              </div>
            </div>
          </div>

          {/* Campaign 2 */}
          <div className="spendenlayput_verwaöten bg-white rounded-lg p-4 shadow-sm flex flex-col md:flex-row gap-4">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Campaign"
              width={150}
              height={150}
              className="rounded-lg object-cover"
            />

            <div className="spendenlayoutcolm flex-1">
              <p className="titelspendenkam text-lg font-medium mb-2">
                Support our Prom – Together unforgettable memories
              </p>
              <p className="text-gray-600 mb-4">0€ of 270€ raised</p>

              <div className="buttonsvershow flex flex-wrap gap-2">
                <Link href="/campaigns/manage">
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="spendenaktion_open mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Deleted</h2>
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900" id="rightallenaziegen">
              <span>Show All (1)</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="spendenlayput_verwaöten geloscht bg-white rounded-lg p-4 shadow-sm flex flex-col md:flex-row gap-4 hidden">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Campaign"
              width={150}
              height={150}
              className="rounded-lg object-cover"
            />

            <div className="spendenlayoutcolm flex-1">
              <p className="titelspendenkam text-lg font-medium mb-2">
                Support our Prom – Together unforgettable memories
              </p>
              <p className="text-gray-600 mb-4">0€ of 270€ raised</p>

              <div className="buttonsvershow flex flex-wrap gap-2">
                <Link href="/campaigns/manage">
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </Link>
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
