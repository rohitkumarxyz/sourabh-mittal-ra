"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

const highlights = [
  "SEBI Registered Research Analyst",
  "NISM Certified Research Analyst",
  "Research Based Strategies",
  "Transparent Fee Structure",
  "Ongoing Portfolio Monitoring",
  "Real Time Market Updates",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full animate-float animate-delay-300"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted hover-lift transition-all duration-500">
              <img src="/professional-financial-advisor-meeting-with-client.jpg" alt="Financial consulting with Saurabh Mittal" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 gradient-primary text-primary-foreground p-6 rounded-xl shadow-xl hover-lift animate-scale-in">
              <div className="text-3xl font-bold">8+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Your Trusted Partner in{" "}
              <span className="gradient-text">Wealth Creation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 8 years of experience in wealth management, we've helped hundreds of individuals and families
              achieve their financial dreams. Our team of certified financial planners brings deep expertise and
              personalized attention to every client.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in building long-term relationships based on trust, transparency, and exceptional results. Your
              financial success is our mission.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in-up hover-lift p-3 rounded-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 animate-pulse-slow" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="gradient-primary text-primary-foreground hover:opacity-90 hover-lift hover-glow transition-all duration-300 group shadow-lg cursor-pointer"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
