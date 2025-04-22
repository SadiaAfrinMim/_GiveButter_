"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X, Sliders, User } from "lucide-react"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Bildung"])
  const [locationSearchResults, setLocationSearchResults] = useState(["Wunstorf, Niederaschsen", "Wulmnstorf, Bayern"])
  const [postalCode, setPostalCode] = useState("")
  const drawerRef = useRef<HTMLDivElement>(null)

  // Sample campaign data
  const campaigns = [
    {
      id: 1,
      title: "Save Hoylake's dunes",
      category: "Krankheit",
      description:
        "Hallo, ich benötige Geld, da ich mir neue Fortnie Skins kaufen möchte. Ich bin NOSKIN und werde in der Schule dafür ausgelacht",
      image: "/placeholder.svg?height=200&width=300",
      donors: 52,
      progress: 33,
      raised: 3060,
      goal: 18000,
    },
    {
      id: 2,
      title: "Save Hoylake's dunes",
      category: "Krankheit",
      description:
        "Hallo, ich benötige Geld, da ich mir neue Fortnie Skins kaufen möchte. Ich bin NOSKIN und werde in der Schule dafür ausgelacht",
      image: "/placeholder.svg?height=200&width=300",
      donors: 52,
      progress: 33,
      raised: 3060,
      goal: 18000,
    },
    {
      id: 3,
      title: "Save Hoylake's dunes",
      category: "Krankheit",
      description:
        "Hallo, ich benötige Geld, da ich mir neue Fortnie Skins kaufen möchte. Ich bin NOSKIN und werde in der Schule dafür ausgelacht",
      image: "/placeholder.svg?height=200&width=300",
      donors: 52,
      progress: 33,
      raised: 3060,
      goal: 18000,
    },
  ]

  // State for search results
  const [searchResults, setSearchResults] = useState(campaigns)

  // Handle outside click to close drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node) && filterDrawerOpen) {
        setFilterDrawerOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [filterDrawerOpen])

  // Handle category selection
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  // Clear search input
  const clearSearch = () => {
    setSearchTerm("")
  }

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories([])
    setPostalCode("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="suchenanzeige max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-center">Finde Spendenaktionen und Nonprofit-Organsationen</h1>
        <p className="textunderanzeige text-gray-600 text-center mb-8">
          Finde Spendenaktionen nach Name, Ort, Titel oder Stichwort
        </p>

        {/* Search Bar */}
        <div className="search-bar relative mb-6">
          <div className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Suche nach einer Kampagne"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-10 pr-10 border border-gray-300 rounded-lg outline-none"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Filter Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2">
            <button
              onClick={() => setFilterDrawerOpen(true)}
              className="filterneu flex items-center gap-2 relative border border-gray-300 rounded-lg px-3 py-2"
            >
              {selectedCategories.length > 0 && (
                <span className="anzahlfilter absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {selectedCategories.length}
                </span>
              )}
              Filter
              <Sliders className="h-4 w-4" />
            </button>
            <button onClick={resetFilters} className="text-blue-600 underline text-sm">
              Filter zurücksetzen
            </button>
          </div>
        </div>

        {/* Filter Drawer */}
        <div
          ref={drawerRef}
          className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white shadow-lg w-80 ${
            filterDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="obenfilter flex justify-between items-center mb-4">
            <p className="font-bold">FILTER</p>
            <button
              type="button"
              onClick={() => setFilterDrawerOpen(false)}
              className="text-gray-500 hover:text-gray-700 p-1"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <hr className="my-4" />

          <div className="filtercontainer space-y-6">
            {/* Location Filter */}
            <div>
              <label className="block font-medium mb-1">Ort</label>
              <p className="text-sm text-gray-600 mb-2">Weltweit nach einer Stadt oder Postleitzahl suchen</p>

              <div className="relative mb-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <Search className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  placeholder="Postleitzahl eingeben"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="pl-10 w-full py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {postalCode && (
                <div className="search_result block space-y-2 mt-2">
                  {locationSearchResults.map((location, index) => (
                    <div
                      key={index}
                      className="such_ergebnis_ort flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      <Search className="h-4 w-4 text-gray-500" />
                      <p>{location}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Category Filter */}
            <div>
              <label className="block font-medium mb-1">Kategorie</label>
              <p className="text-sm text-gray-600 mb-2">Wähle eine oder mehrere Optionen aus</p>

              <div className="categories flex flex-wrap gap-2">
                {[
                  "Bildung",
                  "Tiere",
                  "Umwelt",
                  "Unternehmen",
                  "Medizinisches",
                  "Bestattung",
                  "Notfälle",
                  "Lokale Projekte",
                ].map((category) => (
                  <span
                    key={category}
                    className={`category px-3 py-1 text-sm border rounded-full cursor-pointer ${
                      selectedCategories.includes(category)
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Cards */}
        <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((campaign) => (
            <div
              key={campaign.id}
              className="card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Link href={`/campaigns/view?id=${campaign.id}`} className="block">
                <div className="relative">
                  <Image
                    src={campaign.image || "/placeholder.svg"}
                    alt={campaign.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <span className="categoriekamapgne absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                    {campaign.category}
                  </span>
                </div>

                <div className="card-content p-4">
                  <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
                  <p className="description text-gray-600 text-sm mb-4 line-clamp-2">{campaign.description}</p>

                  <div className="anzahlspender flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <User className="h-4 w-4" />
                    <p>{campaign.donors} Spender:innen</p>
                  </div>

                  <div className="relative h-3 bg-gray-100 rounded-full mb-2 overflow-visible">
                    <div
                      className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                    <div
                      className="absolute top-0 h-6 -mt-1.5 bg-green-500 text-white text-xs font-bold px-1.5 rounded-full flex items-center justify-center"
                      style={{ left: `${campaign.progress}%`, transform: "translateX(-50%)" }}
                    >
                      {campaign.progress}%
                    </div>
                  </div>

                  <div className="flex justify-between text-sm">
                    <p className="font-semibold">{campaign.raised.toLocaleString()}€</p>
                    <p className="text-gray-500">{campaign.goal.toLocaleString()}€</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
