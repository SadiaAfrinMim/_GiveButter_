import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Building, CreditCard, AlertCircle } from "lucide-react"
import AffiliateSidebar from "@/components/affiliate-sidebar"

export default function AffiliateRequestPayout() {
  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <AffiliateSidebar activePage="request-payout" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hallo, Linus</b>&nbsp;&bull;&nbsp; Auszahlung beantragen
              </div>
              <p className="text-gray-600">Hier kannst du deine Einnahmen auf dein Bankkonto auszahlen lassen</p>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Building className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold">Aktueller Kontostand</h2>
              </div>
              <p className="text-3xl font-bold mb-2">€24.50</p>
              <p className="text-sm text-gray-600">Verfügbar zur Auszahlung</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <CreditCard className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-lg font-semibold">Letzte Auszahlung</h2>
              </div>
              <p className="text-3xl font-bold mb-2">€4.60</p>
              <p className="text-sm text-gray-600">24 Feb. 2025</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                </div>
                <h2 className="text-lg font-semibold">Mindestbetrag</h2>
              </div>
              <p className="text-3xl font-bold mb-2">€10.00</p>
              <p className="text-sm text-gray-600">Erforderlich für Auszahlung</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Auszahlung beantragen</h2>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800">Hinweis</p>
                  <p className="text-blue-700 text-sm">
                    Auszahlungen werden innerhalb von 3-5 Werktagen auf dein Bankkonto überwiesen. Der Mindestbetrag für
                    eine Auszahlung beträgt €10.00.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Auszahlungsbetrag (€)</label>
                <Input type="number" placeholder="Betrag eingeben" min="10" max="24.50" defaultValue="24.50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bankkonto</label>
                <div className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg bg-gray-50">
                  <Building className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">***7000</p>
                    <p className="text-sm text-gray-600">Sparkasse</p>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-2">Auszahlung beantragen</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Auszahlungshistorie</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="p-3 text-sm font-medium text-gray-500">DATUM</th>
                    <th className="p-3 text-sm font-medium text-gray-500">BETRAG</th>
                    <th className="p-3 text-sm font-medium text-gray-500">STATUS</th>
                    <th className="p-3 text-sm font-medium text-gray-500">BANKKONTO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-3 text-sm">24 Feb. 2025</td>
                    <td className="p-3 text-sm font-medium">€4.60</td>
                    <td className="p-3 text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Abgeschlossen
                      </span>
                    </td>
                    <td className="p-3 text-sm">***7000</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-sm">15 Jan. 2025</td>
                    <td className="p-3 text-sm font-medium">€12.30</td>
                    <td className="p-3 text-sm">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        Abgeschlossen
                      </span>
                    </td>
                    <td className="p-3 text-sm">***7000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
