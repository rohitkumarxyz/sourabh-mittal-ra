"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Gift, TrendingUp, Shield, Zap, Clock, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem("chahat-popup-seen")
    const lastVisit = localStorage.getItem("chahat-last-visit")
    const now = Date.now()
    
    // Show popup if:
    // 1. User hasn't seen it before, OR
    // 2. It's been more than 7 days since last visit, OR
    // 3. It's been more than 30 days since popup was shown
    const shouldShow = !hasSeenPopup || 
      (lastVisit && (now - parseInt(lastVisit)) > 7 * 24 * 60 * 60 * 1000) ||
      (hasSeenPopup && (now - parseInt(hasSeenPopup)) > 30 * 24 * 60 * 60 * 1000)

    if (shouldShow) {
      // Show popup after 30 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 30000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setHasShown(true)
    // Mark as seen with timestamp
    localStorage.setItem("chahat-popup-seen", Date.now().toString())
    localStorage.setItem("chahat-last-visit", Date.now().toString())
  }

  const handleGetStarted = () => {
    // Scroll to contact section
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    handleClose()
  }

  const handleViewPricing = () => {
    // Scroll to pricing section
    const element = document.getElementById("pricing")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    handleClose()
  }

  if (!isVisible || hasShown) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <Card className="w-full max-w-md mx-auto gradient-card border-primary/20 shadow-2xl animate-scale-in">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Saurabh Mittal Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Welcome!</h3>
                <p className="text-sm text-muted-foreground">Get started with expert guidance</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground cursor-pointer"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Special Offer Badge */}
          <div className="text-center mb-6">
            <Badge className="gradient-accent text-white px-4 py-2 mb-4 animate-pulse">
              <Gift className="w-4 h-4 mr-2" />
              Limited Time Offer
            </Badge>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Start Your Investment Journey
            </h2>
            <p className="text-muted-foreground text-sm">
              Join 500+ successful investors with our proven strategies
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
              <TrendingUp className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-foreground text-sm">Daily Market Calls</div>
                <div className="text-xs text-muted-foreground">Expert recommendations</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
              <Shield className="w-5 h-5 text-accent" />
              <div>
                <div className="font-medium text-foreground text-sm">Risk Management</div>
                <div className="text-xs text-muted-foreground">Protect your capital</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
              <Zap className="w-5 h-5 text-primary" />
              <div>
                <div className="font-medium text-foreground text-sm">Real-time Alerts</div>
                <div className="text-xs text-muted-foreground">Never miss opportunities</div>
              </div>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-6 border border-primary/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground mb-1">Starting from ₹1,999</div>
              <div className="text-sm text-muted-foreground mb-2">per month</div>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Limited time offer</span>
                <Star className="w-3 h-3 text-yellow-500" />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleGetStarted}
              className="w-full gradient-primary text-primary-foreground hover:opacity-90 hover-lift transition-all duration-300 cursor-pointer"
            >
              Get Started Now
            </Button>
            <Button
              onClick={handleViewPricing}
              variant="outline"
              className="w-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              View All Plans
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 pt-4 border-t border-border/50">
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-primary" />
                <span>SEBI Registered</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
