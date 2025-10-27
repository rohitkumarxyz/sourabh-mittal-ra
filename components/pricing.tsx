"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, TrendingUp, Shield, Zap } from "lucide-react"
import { useState } from "react"

const subscriptionPlans = [
  {
    name: "Equity",
    description: "Perfect for equity-focused investors",
    icon: TrendingUp,
    plans: [
      {
        duration: "1 Month",
        price: "₹1,999",
        originalPrice: "₹2,499",
        features: [
          "Daily Equity Recommendations",
          "Technical Analysis Reports",
          "Market Updates",
          "Risk Management Guidance",
          "Email Support"
        ],
        popular: false
      },
      {
        duration: "3 Months",
        price: "₹2,999",
        originalPrice: "₹4,999",
        features: [
          "Daily Equity Recommendations",
          "Technical Analysis Reports",
          "Market Updates",
          "Risk Management Guidance",
          "Priority Email Support",
          "Portfolio Review"
        ],
        popular: true
      },
      {
        duration: "6 Months",
        price: "₹3,999",
        originalPrice: "₹7,499",
        features: [
          "Daily Equity Recommendations",
          "Technical Analysis Reports",
          "Market Updates",
          "Risk Management Guidance",
          "Priority Email Support",
          "Monthly Portfolio Review",
          "1-on-1 Consultation"
        ],
        popular: false
      }
    ]
  },
  {
    name: "Equity + Options",
    description: "Advanced strategies with options trading",
    icon: Shield,
    plans: [
      {
        duration: "1 Month",
        price: "₹2,999",
        originalPrice: "₹3,999",
        features: [
          "All Equity Features",
          "Options Strategies",
          "Options Chain Analysis",
          "Volatility Insights",
          "Risk Management Tools"
        ],
        popular: false
      },
      {
        duration: "3 Months",
        price: "₹3,999",
        originalPrice: "₹6,999",
        features: [
          "All Equity Features",
          "Options Strategies",
          "Options Chain Analysis",
          "Volatility Insights",
          "Risk Management Tools",
          "Weekly Strategy Sessions"
        ],
        popular: true
      },
      {
        duration: "6 Months",
        price: "₹4,999",
        originalPrice: "₹9,999",
        features: [
          "All Equity Features",
          "Options Strategies",
          "Options Chain Analysis",
          "Volatility Insights",
          "Risk Management Tools",
          "Weekly Strategy Sessions",
          "Personal Options Mentor"
        ],
        popular: false
      }
    ]
  },
  {
    name: "Equity + Futures + Options",
    description: "Complete trading solution for professionals",
    icon: Zap,
    plans: [
      {
        duration: "1 Month",
        price: "₹3,999",
        originalPrice: "₹5,999",
        features: [
          "All Previous Features",
          "Futures Trading Strategies",
          "Hedging Techniques",
          "Advanced Risk Management",
          "Real-time Alerts"
        ],
        popular: false
      },
      {
        duration: "3 Months",
        price: "₹4,999",
        originalPrice: "₹8,999",
        features: [
          "All Previous Features",
          "Futures Trading Strategies",
          "Hedging Techniques",
          "Advanced Risk Management",
          "Real-time Alerts",
          "Daily Market Briefings"
        ],
        popular: true
      },
      {
        duration: "6 Months",
        price: "₹5,999",
        originalPrice: "₹14,999",
        features: [
          "All Previous Features",
          "Futures Trading Strategies",
          "Hedging Techniques",
          "Advanced Risk Management",
          "Real-time Alerts",
          "Daily Market Briefings",
          "Personal Trading Coach"
        ],
        popular: false
      }
    ]
  }
]

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(0)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="pricing" className="py-20 lg:py-32 gradient-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-accent/15 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-primary/20 rounded-full animate-float animate-delay-400"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Choose Your{" "}
            <span className="gradient-text">Investment Plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional investment guidance tailored to your trading style and experience level.
          </p>
        </div>

        {/* Plan Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up">
          {subscriptionPlans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 cursor-pointer ${
                selectedPlan === index
                  ? "gradient-primary text-primary-foreground shadow-lg"
                  : "bg-white/50 border border-primary/20 hover:bg-primary/5"
              }`}
            >
              <div className="flex items-center gap-2">
                <plan.icon className="w-5 h-5" />
                <span className="font-medium">{plan.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionPlans[selectedPlan].plans.map((plan, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card pricing-card ${
                plan.popular ? "ring-2 ring-primary/50" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-accent text-white px-4 py-1">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {subscriptionPlans[selectedPlan].name}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {subscriptionPlans[selectedPlan].description}
                </p>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-foreground">{plan.price}</div>
                  <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                  <div className="text-sm text-primary font-medium">{plan.duration}</div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className={`w-full cursor-pointer ${
                    plan.popular
                      ? "gradient-primary text-primary-foreground hover:opacity-90"
                      : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  } hover-lift transition-all duration-300 group shadow-lg`}
                >
                  Get Started
                  <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            All plans include 24/7 market support and regular portfolio reviews
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>SEBI Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Proven Strategies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
