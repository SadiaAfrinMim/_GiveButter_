"use client"

import { Share } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShareButtonProps {
  title?: string
  text?: string
  url?: string
  className?: string
}

export default function ShareButton({
  title = "Check out this fundraising campaign",
  text = "I found this amazing fundraising campaign that I think you might be interested in.",
  url,
  className,
}: ShareButtonProps) {
  const handleShare = async () => {
    const shareUrl = url || window.location.href

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        })
        console.log("Successfully shared")
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      try {
        await navigator.clipboard.writeText(shareUrl)
        alert("Link copied to clipboard!")
      } catch (error) {
        console.error("Failed to copy:", error)
        // Final fallback
        prompt("Copy this link:", shareUrl)
      }
    }
  }

  return (
    <Button variant="outline" className={`flex items-center gap-2 ${className}`} onClick={handleShare}>
      <Share className="h-4 w-4" />
      Share
    </Button>
  )
}
