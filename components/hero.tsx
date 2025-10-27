"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero pt-16 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/15 rounded-full animate-float animate-delay-400"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float animate-delay-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-card border border-primary/20 mb-8 animate-fade-in hover-lift shadow-lg">
            <span className="text-sm font-medium text-foreground">Trusted by 500+ High Net Worth Individuals</span>
          </div>
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance animate-fade-in-up">
            Research Based Stock Picks with{" "}
            <span className="gradient-text">Expert Financial Guidance</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed text-pretty animate-fade-in-up">
            Data Driven research based stock picks  to achieve your financial goals. From investment planning
            to retirement strategies, we help you secure your financial future.
          </p>

          {/* Pricing Highlight */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="text-sm font-medium text-primary">Starting from ₹1,999/month</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Equity, Options & Futures</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="gradient-primary text-primary-foreground hover:opacity-90 text-base px-8 py-6 w-full sm:w-auto hover-lift hover-glow transition-all duration-300 group shadow-lg cursor-pointer"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("pricing")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-base px-8 py-6 w-full sm:w-auto hover-lift border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-md cursor-pointer"
            >
              View Pricing Plans
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border animate-fade-in">
            <div className="text-center hover-lift p-4 rounded-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 gradient-text">8+</div>
  
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center hover-lift p-4 rounded-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 gradient-text">5X</div>
              <div className="text-sm text-muted-foreground">Growth  Portfolio</div>
            </div>
            <div className="text-center hover-lift p-4 rounded-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 gradient-text">2k+</div>
              <div className="text-sm text-muted-foreground">Trade executed</div>
            </div>
            <div className="text-center hover-lift p-4 rounded-lg transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2 gradient-text">1:2</div>
              <div className="text-sm text-muted-foreground">Risk To Reward Ratio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
