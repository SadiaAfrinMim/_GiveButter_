import Link from "next/link"

interface CampaignSidebarProps {
  activePage: string
}

export default function CampaignSidebar({ activePage }: CampaignSidebarProps) {
  return (
    <div className="xl:w-56 shrink-0">
      <div className="w-full xl:w-56 overflow-auto shrink-0 xl:block whitespace-nowrap py-1">
        <Link
          href="/campaigns/manage"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "home" ? "selected bg-gray-100" : ""}
          `}
        >
          Home
        </Link>
        <Link
          href="/campaigns/manage/edit"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "edit" ? "selected bg-gray-100" : ""}
          `}
        >
          Edit
        </Link>
        <Link
          href="/campaigns/manage/updates"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "updates" ? "selected bg-gray-100" : ""}
          `}
        >
          Updates
        </Link>
        <Link
          href="/campaigns/manage/payouts"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "payouts" ? "selected bg-gray-100" : ""}
          `}
        >
          Payouts
        </Link>
        <Link
          href="/campaigns/manage/affiliate"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "affiliate" ? "selected bg-gray-100 text-primary" : "text-primary"}
          `}
        >
          Affiliate
        </Link>
        <Link
          href="/campaigns/manage/donations"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "donations" ? "selected bg-gray-100" : ""}
          `}
        >
          Donations
        </Link>
      </div>

      <div className="hidden xl:block my-4">
        <Link
          href="/campaigns"
          className="rounded-md w-full flex items-center justify-center border border-transparent text-base font-medium transform-gpu transition hover:shadow-m px-2 py-1 text-sm md:px-3 md:py-0.75 md:text-base hover:-translate-y-0.5 shadow rounded-m bg-white hover:bg-gray-50 text-black"
        >
          Back to all campaigns
        </Link>
      </div>
    </div>
  )
}
