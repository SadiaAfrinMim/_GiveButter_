import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Heart, Users, DollarSign, BarChart4, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-2">
                Fundraising Made Simple
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empower Your Cause, <span className="text-blue-600">Change Lives</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Start your fundraising journey today and make a difference. Our platform helps you raise funds for what
                matters most, with powerful tools and zero platform fees.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-lg text-lg">
                  <Link href="/campaigns/create" className="flex items-center gap-2">
                    Start Fundraising <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 hover:bg-blue-50 text-blue-700 px-8 py-6 rounded-lg text-lg"
                >
                  <Link href="/campaigns" className="flex items-center gap-2">
                    Explore Campaigns <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${i}`}
                        alt={`User ${i}`}
                        width={40}
                        height={40}
                        className="bg-gray-200"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">10,000+</span> fundraisers started this month
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Campaign+Image"
                  alt="Fundraising Campaign"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />

                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-48">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <BarChart4 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Total Raised</p>
                      <p className="text-lg font-bold text-gray-900">€2.4M+</p>
                    </div>
                  </div>
                </div>

                {/* Floating Donation Card */}
                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-56">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=40&width=40&text=JD"
                        alt="Donor"
                        width={40}
                        height={40}
                        className="bg-blue-100"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">John D. just donated</p>
                      <p className="text-lg font-bold text-blue-600">€50</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-70 blur-3xl"></div>
              <div className="absolute -z-10 bottom-0 right-0 w-32 h-32 bg-yellow-200 rounded-full opacity-60 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Login/Register Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                <p className="mb-6">
                  Create an account or log in to start fundraising, donate to causes you care about, or manage your
                  existing campaigns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                    <Link href="/auth/login" className="flex items-center gap-2">
                      Log In
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                    <Link href="/auth/login?signup=true" className="flex items-center gap-2">
                      Register
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Heart className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Support Causes</h3>
                      <p className="text-gray-600">Donate to campaigns that matter to you and track your impact.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <DollarSign className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Raise Funds</h3>
                      <p className="text-gray-600">Create campaigns and receive donations with zero platform fees.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Affiliate Program</h3>
                      <p className="text-gray-600">Earn by promoting campaigns and helping others raise funds.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Campaigns</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover campaigns that are making a difference and join the community of supporters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Campaign+${i}`}
                    alt={`Campaign ${i}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {["Medical", "Education", "Environment"][i - 1]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Help Fund {["Medical Treatment", "School Building", "Ocean Cleanup"][i - 1]}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {
                      [
                        "Support a life-saving treatment for someone in need.",
                        "Help build a school for underprivileged children.",
                        "Join our mission to clean the oceans and save marine life.",
                      ][i - 1]
                    }
                  </p>

                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: `${[75, 45, 60][i - 1]}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="font-medium text-gray-900">€{[15000, 8000, 12000][i - 1]} raised</span>
                      <span className="text-gray-600">of €{[20000, 18000, 20000][i - 1]}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=32&width=32&text=${i}`}
                          alt="Campaign Creator"
                          width={32}
                          height={32}
                          className="bg-gray-200"
                        />
                      </div>
                      <span className="text-sm text-gray-600">by {["Sarah", "Michael", "Emma"][i - 1]}</span>
                    </div>
                    <Link
                      href={`/campaigns/view?id=${i}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center gap-1"
                    >
                      View <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-200 hover:bg-blue-50 text-blue-700">
              <Link href="/campaigns" className="flex items-center gap-2">
                View All Campaigns <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start your fundraising journey in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Create Your Campaign",
                description: "Set up your fundraising page in minutes with photos, your story, and a fundraising goal.",
                icon: "📝",
              },
              {
                title: "Share With Everyone",
                description:
                  "Share your campaign on social media, email, and messaging apps to reach potential donors.",
                icon: "🌐",
              },
              {
                title: "Collect Donations",
                description: "Receive donations directly to your account with our secure payment processing.",
                icon: "💰",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 text-2xl mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/campaigns/create" className="flex items-center gap-2">
                Start Your Campaign <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from fundraisers and donors who have used our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I raised €15,000 for my medical treatment in just two weeks. The platform was incredibly easy to use and the support was amazing.",
                name: "Sarah Johnson",
                role: "Fundraiser",
              },
              {
                quote:
                  "As a regular donor, I appreciate how transparent the platform is. I can see exactly where my money is going and the impact it's making.",
                name: "Michael Brown",
                role: "Donor",
              },
              {
                quote:
                  "The affiliate program has been a great way for me to support causes I care about while also earning some extra income.",
                name: "Emma Davis",
                role: "Affiliate Partner",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-blue-600">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="bg-blue-100"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of fundraisers and donors who are changing lives every day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8">
              <Link href="/campaigns/create" className="flex items-center gap-2">
                Start Fundraising
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 px-8">
              <Link href="/campaigns" className="flex items-center gap-2">
                Donate Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
