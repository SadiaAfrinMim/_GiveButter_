import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LineChartIcon as ChartLineUp } from "lucide-react";
import CampaignSidebar from "@/components/campaign-sidebar";

export default function CampaignManage() {
  const notificationsEnabled = true; // Example state, replace with useState if needed

  return (
    <div className="dashboardanzeige container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <CampaignSidebar activePage="home" />

      <div className="sectionanzeige flex-1">
        <div className="kampagnewelcome bg-white rounded-lg p-6 mb-6">
          <div className="welcometextandshow flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="kampagnewelcome-text mb-4 md:mb-0">
              <div className="mb-2">
                <b>Hello, Linus</b>&nbsp;&bull;&nbsp; You are managing: Campaign Title
              </div>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center gap-2"
              >
                https://yourcustomcampaign.html
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <div>
              <Link href="/campaigns/view">
                <Button variant="outline">View</Button>
              </Link>
            </div>
          </div>
          <hr className="my-4" />
        </div>

        <div className="earningtotal mb-8">
          <div className="gauge-container relative h-48 w-full mb-8 bg-white rounded-lg p-6">
            <svg className="w-full h-full" viewBox="0 0 200 100" style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05))" }}>
              <path d="M10,100 A90,90 0 0,1 190,100" fill="none" stroke="#f0fdf4" strokeWidth="18" strokeLinecap="round" />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4ade80" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
              <path
                d="M10,100 A90,90 0 0,1 190,100"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="18"
                strokeLinecap="round"
                strokeDasharray="282.6"
                strokeDashoffset="113.04"
                style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
              />
              <circle
                cx="190"
                cy="100"
                r="8"
                fill="#22c55e"
                className="animate-pulse"
                style={{
                  transform: 'rotate(-120deg)',
                  transformOrigin: '100px 100px',
                  animation: 'pulse 2s infinite'
                }}
              />
            </svg>

            <div className="gauge-labels absolute bottom-0 w-full flex justify-between px-8">
              <span className="text-sm font-medium text-gray-500">0€</span>
              <span className="text-sm font-medium text-gray-500">20,000€</span>
            </div>

            <div className="center-display absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="flex items-end justify-center">
                <span className="text-4xl font-bold text-gray-900">18,651</span>
                <span className="text-xl font-medium text-gray-500 ml-1">€</span>
              </div>
              <div className="flex items-center justify-center mt-1">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium text-gray-600">60% funded</span>
              </div>
            </div>

            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200"
              style={{
                left: 'calc(50% + 45px * cos(120deg))',
                top: 'calc(50% - 45px * sin(120deg))'
              }}
            >
              <span className="text-xs font-semibold text-green-600">60%</span>
            </div>
          </div>

          <div className="totaleanrings grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="symbolearning bg-red-100 p-3 rounded-full">
                  <ChartLineUp className="h-6 w-6 text-red-600" />
                </div>
                <div className="eanringsdata">
                  <p className="betragdata text-xl font-bold">18,651€</p>
                  <p className="text-gray-600">Total received</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="symbolearning bg-blue-100 p-3 rounded-full">
                  <ChartLineUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="eanringsdata">
                  <p className="betragdata text-xl font-bold">18,111€</p>
                  <p className="text-gray-600">Balance after fees</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="symbolearning bg-yellow-100 p-3 rounded-full">
                  <ChartLineUp className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="eanringsdata">
                  <p className="betragdata text-xl font-bold">540€</p>
                  <p className="text-gray-600">Fees</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
