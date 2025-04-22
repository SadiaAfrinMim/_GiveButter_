import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, DollarSign, BarChart4 } from "lucide-react"

export default function AffiliateLanding() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Affiliate Programm</h1>
          <p className="text-xl text-gray-600">Verdiene Geld, indem du Kampagnen teilst und neue Spender gewinnst</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teilen</h3>
              <p className="text-gray-600">
                Teile Kampagnen mit deinem persönlichen Affiliate-Link in sozialen Netzwerken oder per E-Mail
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verdienen</h3>
              <p className="text-gray-600">
                Erhalte eine Provision für jede Spende, die über deinen persönlichen Link getätigt wird
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-purple-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart4 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verfolgen</h3>
              <p className="text-gray-600">
                Verfolge deine Einnahmen und Statistiken in Echtzeit in deinem persönlichen Dashboard
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Bereit, loszulegen?</h2>
              <p className="text-blue-100 mb-4 md:mb-0">
                Registriere dich jetzt für das Affiliate-Programm und beginne, Geld zu verdienen
              </p>
            </div>
            <Link href="/affiliate/setup">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                <span>Jetzt registrieren</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">So funktioniert es</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Registriere dich für das Affiliate-Programm</h3>
                    <p className="text-gray-600">
                      Fülle das Anmeldeformular aus und akzeptiere die Nutzungsbedingungen
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Wähle eine Kampagne</h3>
                    <p className="text-gray-600">
                      Suche nach Kampagnen, die du unterstützen möchtest, und generiere deinen persönlichen
                      Affiliate-Link
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teile deinen Link</h3>
                    <p className="text-gray-600">
                      Teile deinen Affiliate-Link in sozialen Netzwerken, per E-Mail oder auf deiner Website
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Verdiene Provisionen</h3>
                    <p className="text-gray-600">
                      Erhalte eine Provision für jede Spende, die über deinen Link getätigt wird
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Affiliate+Program"
                alt="Affiliate Program"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">5%</div>
                <div className="text-sm text-gray-600">Provision pro Spende</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Häufig gestellte Fragen</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Wie hoch ist die Provision?</h3>
              <p className="text-gray-600">
                Du erhältst 5% Provision auf jede Spende, die über deinen Affiliate-Link getätigt wird.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Wann erhalte ich meine Auszahlung?</h3>
              <p className="text-gray-600">
                Auszahlungen werden monatlich durchgeführt, sobald du den Mindestbetrag von 10€ erreicht hast.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Kann ich mehrere Kampagnen bewerben?</h3>
              <p className="text-gray-600">
                Ja, du kannst so viele Kampagnen bewerben, wie du möchtest. Für jede Kampagne erhältst du einen
                individuellen Affiliate-Link.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Wie lange ist mein Affiliate-Link gültig?</h3>
              <p className="text-gray-600">
                Dein Affiliate-Link ist unbegrenzt gültig, solange die Kampagne aktiv ist.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/affiliate/setup">
            <Button size="lg" className="px-8">
              Jetzt mit Affiliate starten
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
