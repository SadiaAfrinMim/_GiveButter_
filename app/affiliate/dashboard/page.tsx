"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChartIcon as ChartLineUp, ArrowUp } from "lucide-react"
import AffiliateSidebar from "@/components/affiliate-sidebar"

export default function AffiliateDashboard() {
  const [selectedCampaign, setSelectedCampaign] = useState("all")

  // Sample data for recent orders
  const recentOrders = [
    {
      id: 1,
      campaign: "Link",
      customer: "Alice Johnson",
      date: "Mar 12, 2025",
      total: "$320.00",
      provision: "$7.50",
    },
    {
      id: 2,
      campaign: "Link",
      customer: "Michael Smith",
      date: "Mar 11, 2025",
      total: "$150.00",
      provision: "$7.50",
    },
    {
      id: 3,
      campaign: "Link",
      customer: "Sophia Brown",
      date: "Mar 10, 2025",
      total: "$75.00",
      provision: "$7.50",
    },
  ]

  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <AffiliateSidebar activePage="dashboard" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hallo, Linus</b>&nbsp;&bull;&nbsp; Du betrachtest: Gegen Krebs
              </div>
              <p className="text-gray-600">
                Um zwischen den Einnhamen zu wechseln von den verscheidenen Kampagnen bitte bennutze das Options Feld
              </p>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="auswahlstatskampagne mb-6">
          <Select value={selectedCampaign} onValueChange={setSelectedCampaign}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue placeholder="Kampagne auswählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Alle kampagnen</SelectItem>
              <SelectItem value="cancer">Gegen Krebs</SelectItem>
              <SelectItem value="war">gegen Krieg</SelectItem>
              <SelectItem value="elon">Für Elon Musk</SelectItem>
              <SelectItem value="merz">Für Merz</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="Umsaetzecontainer grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Revenue Total */}
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-2">Revenue Total</p>
              <ChartLineUp className="h-8 w-8 text-blue-500 mb-2" />
              <p className="umsatzgeld text-2xl font-bold mb-2">24,780€</p>
              <div className="comparedtolast flex items-center gap-2 text-sm text-gray-600">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <p className="percentgrow text-green-500">12%</p>
                <p>from last day</p>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Today */}
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-2">Revenue Today</p>
              <ChartLineUp className="h-8 w-8 text-blue-500 mb-2" />
              <p className="umsatzgeld text-2xl font-bold mb-2">24,780€</p>
              <div className="comparedtolast flex items-center gap-2 text-sm text-gray-600">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <p className="percentgrow text-green-500">12%</p>
                <p>from last day</p>
              </div>
            </CardContent>
          </Card>

          {/* Revenue this Month */}
          <Card>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-2">Revenue this Month</p>
              <ChartLineUp className="h-8 w-8 text-blue-500 mb-2" />
              <p className="umsatzgeld text-2xl font-bold mb-2">24,780€</p>
              <div className="comparedtolast flex items-center gap-2 text-sm text-gray-600">
                <ArrowUp className="h-4 w-4 text-green-500" />
                <p className="percentgrow text-green-500">12%</p>
                <p>from last day</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="recent-provisionsorders bg-white rounded-lg p-6">
          <div className="recent-orders-header mb-4">
            <h2 className="text-xl font-semibold">Recent Orders</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 text-left">
                <tr>
                  <th className="p-3 text-sm font-medium text-gray-500">KAMPAGNE</th>
                  <th className="p-3 text-sm font-medium text-gray-500">CUSTOMER</th>
                  <th className="p-3 text-sm font-medium text-gray-500">DATE</th>
                  <th className="p-3 text-sm font-medium text-gray-500">TOTAL</th>
                  <th className="p-3 text-sm font-medium text-gray-500">PROVISION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="p-3 text-sm text-blue-600 underline">
                      <Link href="#">{order.campaign}</Link>
                    </td>
                    <td className="p-3 text-sm">{order.customer}</td>
                    <td className="p-3 text-sm">{order.date}</td>
                    <td className="p-3 text-sm">{order.total}</td>
                    <td className="p-3 text-sm font-medium text-green-600">{order.provision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
