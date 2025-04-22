import { Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AffiliateSidebar from "@/components/affiliate-sidebar"

export default function AffiliatePayments() {
  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <AffiliateSidebar activePage="payments" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hello, Linus</b>&nbsp;&bull;&nbsp; You are viewing: Payments
              </div>
              <p className="text-gray-600">
                To switch between earnings from different campaigns, please use the Options field
              </p>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <h2 className="text-xl font-semibold mb-4">Bank Account</h2>
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Building className="h-6 w-6 text-gray-600" />
                <div className="flex flex-col">
                  <p className="font-medium">Transferred to ***7000</p>
                  <p className="text-gray-600 text-sm">Bank Account</p>
                </div>
              </div>
              <button className="font-semibold text-blue-600 hover:text-blue-800">Edit</button>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-xl font-semibold mb-4">Activity</h2>
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>24 Feb. 2025</span>
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-gray-600" />
                  <span>Transferred to ***7000</span>
                </div>
              </div>
              <span className="font-bold">4.60€</span>
            </div>
          </CardContent>
        </Card>

        <div className="aufstellung-container bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Statement</h2>

          <div className="total-section mb-6">
            <div className="total-title flex justify-between mb-2">
              <span>Total paid out</span>
              <span>€5.00</span>
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: "92%" }}></div>
              <div className="absolute top-0 left-[92%] h-full bg-yellow-500" style={{ width: "8%" }}></div>
            </div>
          </div>

          <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-lg font-semibold">€0.00</span>
                </div>
                <div className="text-sm text-gray-600">Current Balance</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-lg font-semibold">€4.60</span>
                </div>
                <div className="text-sm text-gray-600">Transferred</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <span className="text-lg font-semibold">€0.00</span>
                </div>
                <div className="text-sm text-gray-600">In Process</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <span className="text-lg font-semibold">€0.40</span>
                </div>
                <div className="text-sm text-gray-600">Transaction Fees</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
