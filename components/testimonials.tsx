"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, TrendingUp, Shield, Zap, Award, CheckCircle2, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    location: "Delhi",
    content:
      "I've been using Chahat's Equity + Options plan for 6 months now. The daily recommendations and options strategies have increased my portfolio by 35%. The ₹3,999 investment has paid for itself multiple times over.",
    rating: 5,
    plan: "Equity + Options",
    duration: "6 months",
    avatar: "RK",
    planIcon: Shield,
    highlight: "Portfolio Growth",
  },
  {
    name: "Priya Sharma",
    role: "IT Professional",
    location: "Mumbai",
    content:
      "Chahat's Complete Trading plan is worth every rupee. The futures and options guidance, combined with real-time alerts, helped me navigate volatile markets successfully. My returns improved by 40% in just 3 months.",
    rating: 5,
    plan: "Complete Trading",
    duration: "3 months",
    avatar: "PS",
    planIcon: Zap,
    highlight: "Market Navigation",
  },
  {
    name: "Amit Patel",
    role: "Entrepreneur",
    location: "Bangalore",
    content:
      "Started with the basic Equity plan and upgraded to Equity + Options. The personalized approach and weekly strategy sessions are game-changers. My investment knowledge has grown tremendously, and so have my returns.",
    rating: 5,
    plan: "Equity + Options",
    duration: "4 months",
    avatar: "AP",
    planIcon: TrendingUp,
    highlight: "Knowledge Growth",
  },
  {
    name: "Dr. Sunita Mehta",
    role: "Doctor",
    location: "Pune",
    content:
      "As a busy professional, I needed reliable investment guidance. Chahat's 6-month Complete Trading plan provided exactly that. The daily briefings and personal coaching helped me build a ₹50L+ portfolio in just 8 months.",
    rating: 5,
    plan: "Complete Trading",
    duration: "8 months",
    avatar: "SM",
    planIcon: Award,
    highlight: "Portfolio Building",
  },
  {
    name: "Vikram Singh",
    role: "Chartered Accountant",
    location: "Gurgaon",
    content:
      "The risk management strategies in the Equity + Options plan are exceptional. Chahat's team helped me hedge my positions perfectly during market downturns. The monthly fee is a small price for such professional guidance.",
    rating: 5,
    plan: "Equity + Options",
    duration: "5 months",
    avatar: "VS",
    planIcon: Shield,
    highlight: "Risk Management",
  },
  {
    name: "Anita Reddy",
    role: "Banking Executive",
    location: "Chennai",
    content:
      "I was skeptical about subscription-based investment advice, but Chahat's track record speaks for itself. The 3-month Equity plan delivered 28% returns. The transparency and regular portfolio reviews build complete trust.",
    rating: 5,
    plan: "Equity",
    duration: "3 months",
    avatar: "AR",
    planIcon: TrendingUp,
    highlight: "Trust Building",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000) // Change every 5 seconds

      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, isHovered])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 gradient-section relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent/15 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float animate-delay-400"></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 bg-accent/10 rounded-full animate-float animate-delay-300"></div>
        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-primary/15 rounded-full animate-float animate-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in max-w-fit mx-auto">
            <Award className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-primary text-center">Trusted by 500+ Investors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What Our{" "}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Real results from real clients. See how our investment plans have helped traders and investors achieve their financial goals with consistent returns and professional guidance.
          </p>
        </div>

        {/* Scrollable Testimonials Carousel */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="group hover:shadow-2xl transition-all duration-700 border-border/50 hover:border-primary/40 hover-lift gradient-card relative overflow-hidden mx-4">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <Quote className="w-12 h-12 text-primary" />
                    </div>

                    {/* Plan Badge */}
                    <div className="absolute -top-3 sm:-top-4 left-3 sm:left-6">
                      <Badge className="gradient-accent text-white px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium shadow-lg flex items-center gap-1 sm:gap-2">
                        <testimonial.planIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="hidden sm:inline">{testimonial.plan}</span>
                        <span className="sm:hidden">{testimonial.plan.split(' ')[0]}</span>
                      </Badge>
                    </div>

                    <CardContent className="p-8 lg:p-12 pt-12">
                      {/* Avatar & Basic Info */}
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {testimonial.name}
                          </div>
                          <div className="text-base text-muted-foreground">{testimonial.role}</div>
                          <div className="text-sm text-muted-foreground/70">{testimonial.location}</div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star 
                              key={i} 
                              className="w-5 h-5 fill-primary text-primary animate-pulse-slow" 
                              style={{ animationDelay: `${i * 0.1}s` }} 
                            />
                          ))}
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-lg text-foreground leading-relaxed mb-8 italic group-hover:text-primary/90 transition-colors duration-300">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Stats & Highlights */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="flex items-center justify-between p-4 rounded-xl bg-accent/5 border border-accent/10 group-hover:bg-accent/10 transition-colors duration-300">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                            <span className="font-medium text-foreground">Duration</span>
                          </div>
                          <span className="text-lg font-semibold text-accent">{testimonial.duration}</span>
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/10 group-hover:bg-primary/10 transition-colors duration-300">
                          <div className="flex items-center gap-3">
                            <Award className="w-5 h-5 text-primary" />
                            <span className="font-medium text-foreground">Highlight</span>
                          </div>
                          <span className="text-sm font-medium text-primary">{testimonial.highlight}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Auto-play Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoPlay}
              className="w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 w-full bg-primary/10 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-300"
              style={{ 
                width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
              }}
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
          <div className="text-center hover-lift p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-foreground mb-2 gradient-text">8+</div>
            <div className="text-sm text-muted-foreground">Years of Experience</div>
          </div>
          <div className="text-center hover-lift p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-foreground mb-2 gradient-text">5X</div>
            <div className="text-sm text-muted-foreground">Growth Portfolio</div>
          </div>
          <div className="text-center hover-lift p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-foreground mb-2 gradient-text">2k+</div>
            <div className="text-sm text-muted-foreground">Trade executed</div>
          </div>
          <div className="text-center hover-lift p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="text-3xl font-bold text-foreground mb-2 gradient-text">1:2</div>
            <div className="text-sm text-muted-foreground">Risk To Reward Ratio</div>
          </div>
        </div>
      </div>
    </section>
  )
}
