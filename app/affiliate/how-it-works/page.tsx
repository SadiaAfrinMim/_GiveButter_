import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import AffiliateSidebar from "@/components/affiliate-sidebar"

export default function AffiliateHowItWorks() {
  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <AffiliateSidebar activePage="how-it-works" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hallo, Linus</b>&nbsp;&bull;&nbsp; So funktioniert das Affiliate Programm
              </div>
              <p className="text-gray-600">
                Hier findest du alle Informationen, wie du mit dem Affiliate Programm Geld verdienen kannst
              </p>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Was ist das Affiliate Programm?</h2>
              <p className="text-gray-600 mb-4">
                Mit unserem Affiliate Programm kannst du Geld verdienen, indem du Kampagnen teilst und neue Spender
                gewinnst. Für jede Spende, die über deinen Link getätigt wird, erhältst du eine Provision.
              </p>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Affiliate+Erklärvideo"
                  alt="Affiliate Erklärvideo"
                  width={400}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">So funktioniert es</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Wähle eine Kampagne, die du unterstützen möchtest</li>
                <li>Generiere deinen persönlichen Affiliate-Link</li>
                <li>Teile den Link in deinen sozialen Netzwerken oder per E-Mail</li>
                <li>Verdiene eine Provision für jede Spende, die über deinen Link getätigt wird</li>
                <li>Lasse dir deine Einnahmen auf dein Bankkonto auszahlen</li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Provisionen und Auszahlungen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Provisionsstruktur</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>5% Provision auf jede Spende, die über deinen Link getätigt wird</li>
                  <li>Zusätzliche Boni für regelmäßige Spender</li>
                  <li>Höhere Provisionen für erfolgreiche Affiliates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Auszahlungen</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Mindestauszahlungsbetrag: 10€</li>
                  <li>Auszahlungen werden monatlich durchgeführt</li>
                  <li>Auszahlung per Banküberweisung</li>
                  <li>Transaktionsgebühren werden von uns übernommen</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Häufig gestellte Fragen</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Wie erstelle ich einen Affiliate-Link?</h3>
                <p className="text-gray-600">
                  Gehe zur Kampagne, die du unterstützen möchtest, und klicke auf den "Als Affiliate teilen" Button.
                  Dein persönlicher Link wird automatisch generiert.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Wie lange ist mein Affiliate-Link gültig?</h3>
                <p className="text-gray-600">
                  Dein Affiliate-Link ist unbegrenzt gültig, solange die Kampagne aktiv ist.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Wann erhalte ich meine Provision?</h3>
                <p className="text-gray-600">
                  Provisionen werden am Ende jedes Monats berechnet und in der ersten Woche des Folgemonats ausgezahlt.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
