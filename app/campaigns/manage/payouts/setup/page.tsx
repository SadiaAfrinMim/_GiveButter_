import Link from "next/link"
import { Input } from "@/components/ui/input"
import CampaignSidebar from "@/components/campaign-sidebar"

export default function CampaignPayoutSetup() {
  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <CampaignSidebar activePage="payouts" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hello, Linus</b>&nbsp;&bull;&nbsp; You are viewing: Setup Bank Account
              </div>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="kontaktdatenbank bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Data for your campaign account</h2>
          <h4 className="text-gray-600 mb-6">
            You are opening an account with our payment service provider Stripe for your donations. They will be paid
            out to your bank account from there. To verify your identity, Stripe needs the following information.
          </h4>

          <h2 className="text-lg font-semibold mb-2">1. Personal Data</h2>
          <p className="mb-4">
            You can change your first and last name in the{" "}
            <Link href="/profile" className="text-blue-600 hover:underline">
              profile settings
            </Link>
            .
          </p>

          <div className="mb-4">
            <label className="text-sm text-gray-500 font-medium block mb-1">
              Your first name <small>(required)</small>
            </label>
            <div className="relative">
              <Input type="text" placeholder="First name" className="pr-10" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
