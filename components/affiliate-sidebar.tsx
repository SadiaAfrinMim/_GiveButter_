import Link from "next/link"

interface AffiliateSidebarProps {
  activePage: string
}

export default function AffiliateSidebar({ activePage }: AffiliateSidebarProps) {
  return (
    <div className="xl:w-56 shrink-0">
      <div className="w-full xl:w-56 overflow-auto shrink-0 xl:block whitespace-nowrap py-1">
        <Link
          href="/affiliate/dashboard"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "dashboard" ? "selected bg-gray-100" : ""}
          `}
        >
          Dashboard
        </Link>
        <Link
          href="/affiliate/active-links"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "active-links" ? "selected bg-gray-100" : ""}
          `}
        >
          Aktive Affiliate Links
        </Link>
        <Link
          href="/affiliate/request-payout"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "request-payout" ? "selected bg-gray-100" : ""}
          `}
        >
          Auszahlungen beantragen
        </Link>
        <Link
          href="/affiliate/how-it-works"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "how-it-works" ? "selected bg-gray-100 text-primary" : "text-primary"}
          `}
        >
          So funktioniert's
        </Link>
        <Link
          href="/affiliate/payments"
          className={`
            inline-block xl:block rounded-lg
            px-2 py-0.5 xl:px-3 xl:py-1.5
            xl:text-lg font-semibold xl:font-bold
            hover:bg-gray-600/10
            ${activePage === "payments" ? "selected bg-gray-100" : ""}
          `}
        >
          Verkäufe
        </Link>
      </div>

      <div className="hidden xl:block my-4">
        <Link
          href="/campaigns"
          className="rounded-md w-full flex items-center justify-center border border-transparent text-base font-medium transform-gpu transition hover:shadow-m px-2 py-1 text-sm md:px-3 md:py-0.75 md:text-base hover:-translate-y-0.5 shadow rounded-m bg-white hover:bg-gray-50 text-black"
        >
          Zurück zu allen Seiten
        </Link>
      </div>
    </div>
  )
}
