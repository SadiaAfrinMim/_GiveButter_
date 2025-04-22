"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { X, Menu, User, ChevronDown, ChevronRight, HeartHandshake, Globe, Rocket, Gift, BookOpen, Shield } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const isLoggedIn = true // Replace with actual auth state

  // Close dropdown after delay
  const handleDropdownMouseLeave = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }

    dropdownTimeoutRef.current = setTimeout(() => {
      if (dropdownOpen === dropdown) {
        setDropdownOpen(null)
      }
    }, 300)
  }

  const handleDropdownMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setDropdownOpen(dropdown)
  }

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".mobile-menu") && !target.closest(".hamburger-btn") && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
      if (!target.closest(".profile-menu") && !target.closest(".profile-btn") && profileMenuOpen) {
        setProfileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen, profileMenuOpen])

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setProfileMenuOpen(false)
    setDropdownOpen(null)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile header - left side (profile) */}
          <div className="grid grid-cols-3 md:hidden">
            <button 
              className="profile-btn p-2 rounded-full hover:bg-gray-100"
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
            >
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Logo - center on mobile */}
          <div className="flex md:hidden">
            <Link href="/" className="flex ga items-center">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto bg-red-500"
              /> 
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              className="hamburger-btn p-2 rounded-full hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex gap-2 items-center">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={140} 
                height={44} 
                className="h-9 w-auto bg-red-500"
              /><p className="text-xl font-bold">GiveButter</p>
            </Link>

            {/* Search link */}
            <Link 
              href="/search" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Suchen
            </Link>

            {/* Categories dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => handleDropdownMouseEnter("categories")} 
              onMouseLeave={() => handleDropdownMouseLeave("categories")}
            >
              <button className="flex items-center space-x-1 group">
                <span className="text-gray-700 group-hover:text-primary transition-colors duration-200 font-medium">
                  Kategorien
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-primary transition-transform duration-200" />
              </button>
              
              {dropdownOpen === "categories" && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg z-50 p-6 w-[32rem] border border-gray-100 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center">
                        <HeartHandshake className="h-5 w-5 text-primary mr-2" />
                        Unterstütze wichtige Anliegen
                      </h3>
                    </div>
                    
                    {[
                      { name: "Haustiere", link: "/categories/pets", icon: <Gift className="h-4 w-4 text-primary" /> },
                      { name: "Beerdigungen", link: "/categories/funerals", icon: <Shield className="h-4 w-4 text-primary" /> },
                      { name: "Reisen", link: "/categories/travel", icon: <Globe className="h-4 w-4 text-primary" /> },
                      { name: "Familie", link: "/categories/family", icon: <HeartHandshake className="h-4 w-4 text-primary" /> },
                      { name: "Unternehmen", link: "/categories/business", icon: <Rocket className="h-4 w-4 text-primary" /> },
                      { name: "Schule", link: "/categories/education", icon: <BookOpen className="h-4 w-4 text-primary" /> },
                    ].map(({ name, link, icon }) => (
                      <Link 
                        key={link} 
                        href={link} 
                        className="flex items-center space-x-3 p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="p-1.5 rounded-lg bg-primary/10">
                          {icon}
                        </div>
                        <span className="text-gray-700 font-medium">{name}</span>
                      </Link>
                    ))}
                    
                    <div className="col-span-2 mt-2">
                      <Link 
                        href="/categories" 
                        className="flex items-center justify-between p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-primary font-medium"
                      >
                        <span>Alle Kategorien entdecken</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About link */}
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Über uns
            </Link>

            {/* Services dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => handleDropdownMouseEnter("services")} 
              onMouseLeave={() => handleDropdownMouseLeave("services")}
            >
              <button className="flex items-center space-x-1 group">
                <span className="text-gray-700 group-hover:text-primary transition-colors duration-200 font-medium">
                  Dienste
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-primary transition-transform duration-200" />
              </button>
              
              {dropdownOpen === "services" && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg z-50 p-6 w-[28rem] border border-gray-100 animate-fadeIn">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Für Spendenempfänger</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Alles was du wissen musst, um erfolgreich Spenden zu sammeln
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Kampagne starten", link: "/campaigns/create" },
                        { name: "Erfolgsgeschichten", link: "/success-stories" },
                        { name: "Spendentipps", link: "/fundraising-tips" },
                        { name: "Transparenz", link: "/transparency" },
                      ].map(({ name, link }) => (
                        <Link
                          key={link}
                          href={link}
                          className="p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-gray-700 font-medium"
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="pt-2 border-t border-gray-100">
                      <Link 
                        href="/services" 
                        className="flex items-center justify-between p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-primary font-medium"
                      >
                        <span>Alle Dienste anzeigen</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  className="profile-btn flex items-center space-x-2 group"
                  onClick={() => setDropdownOpen(dropdownOpen === "profile" ? null : "profile")}
                >
                  <div className="relative">
                    <Image 
                      src="/user-avatar.jpg" 
                      alt="User" 
                      width={36} 
                      height={36} 
                      className="rounded-full border-2 border-transparent group-hover:border-primary transition-colors duration-200"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-3 h-3 border-2 border-white"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Linus</span>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${dropdownOpen === "profile" ? "rotate-180" : ""}`} />
                </button>
                
                {dropdownOpen === "profile" && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-lg z-50 py-2 w-64 border border-gray-100 animate-fadeIn">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-medium text-gray-900">Angemeldet als</p>
                      <p className="text-sm text-gray-500">linus@example.com</p>
                    </div>
                    
                    <div className="space-y-1 px-2 py-2">
                      {[
                        { label: "Profil", href: "/profile" },
                        { label: "Deine Spendenaktion", href: "/campaigns" },
                        { label: "Account Einstellungen", href: "/settings" },
                        { label: "So hilft deine Spende", href: "/help/donation" },
                        { label: "Hilfe Center", href: "/help" },
                        { label: "Affiliate", href: "/affiliate" },
                      ].map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors duration-200"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="px-4 py-3 border-t border-gray-100">
                      <Link 
                        href="/auth/logout" 
                        className="text-primary font-medium hover:underline"
                      >
                        Abmelden
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="outline" className="px-6">
                    Anmelden
                  </Button>
                </Link>
                <Link href="/campaigns/create">
                  <Button className="px-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                    Kampagne starten
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden fixed inset-0 bg-white z-40 pt-16 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Navigation
                </h3>
                <nav className="space-y-1">
                  {[
                    { name: "Suchen", href: "/search" },
                    { name: "Über uns", href: "/about" },
                    { name: "Kategorien", href: "/categories" },
                    { name: "Dienste", href: "/services" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>

              {!isLoggedIn && (
                <div className="space-y-3 pt-4">
                  <Link href="/auth/login">
                    <Button variant="outline" className="w-full">
                      Anmelden
                    </Button>
                  </Link>
                  <Link href="/campaigns/create">
                    <Button className="w-full shadow-lg">
                      Kampagne starten
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Profile Menu */}
      {profileMenuOpen && isLoggedIn && (
        <div className="profile-menu md:hidden fixed inset-0 bg-white z-40 pt-16 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center space-x-4 pb-6 border-b border-gray-100">
              <Image 
                src="/user-avatar.jpg" 
                alt="User" 
                width={64} 
                height={64} 
                className="rounded-full border-2 border-primary"
              />
              <div>
                <h2 className="font-bold text-lg">Linus</h2>
                <p className="text-sm text-gray-500">linus@example.com</p>
              </div>
            </div>

            <div className="space-y-1 py-4 border-b border-gray-100">
              {[
                { name: "Profil", href: "/profile" },
                { name: "Deine Spendenaktionen", href: "/campaigns" },
                { name: "Account Einstellungen", href: "/settings" },
                { name: "Hilfe Center", href: "/donations" },
                { name: "Spendenaktionen Starten", href: "/campaigns/create" },
             {   name: "Affiliate", href: "/affiliate"}
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/auth/logout"
                className="block py-3 px-4 rounded-lg text-primary font-medium"
              >
                Abmelden
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}