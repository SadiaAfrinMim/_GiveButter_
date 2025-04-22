import Link from "next/link"
import { Button } from "@/components/ui/button"
import CampaignSidebar from "@/components/campaign-sidebar"

export default function CampaignPayouts() {
  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <CampaignSidebar activePage="payouts" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hello, Linus</b>&nbsp;&bull;&nbsp; You are viewing: Setup Payouts
              </div>
            </div>
            <div>
              <Link href="/campaigns/view">
                <Button variant="outline">View</Button>
              </Link>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="kreditkartenauszahlung bg-white rounded-lg p-6 w-fit">
          <h2 className="text-xl font-semibold mb-2">Credit Card, Bank Transfer</h2>
          <p className="text-gray-600 mb-4">Activate payment methods and get verified with Stripe.</p>

          <Link href="/campaigns/manage/payouts/setup">
            <Button className="jetztbankaktivieren bg-amber-400 hover:bg-amber-500 text-black font-semibold">
              Activate Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
