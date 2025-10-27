import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, PiggyBank, LineChart, Building2, Users } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Investement Planning",
    description: "Strategic portfolio management to achieve your financial goals.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Advanced risk management strategies to protect your investments and maximize returns..",
  },
  {
    icon: PiggyBank,
    title: "Real Time Market Updates",
    description: "Get instant market updates, signals, and expert advice through multiple channels..",
  },
  {
    icon: LineChart,
    title: "Expert Market Analysis",
    description: "Our team of experienced analysts provides comprehensive market research and insights.",
  },
  {
    icon: Building2,
    title: "Risk to Reward Ratio",
    description: "Proven Track Record of successful trades with optmize risk to reward ratio.",
  },
  {
    icon: Users,
    title: "Family Office Services",
    description: "Holistic wealth management for high net worth families and their legacy.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 gradient-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-accent/15 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float animate-delay-400"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Research Based{" "}
            <span className="gradient-text">Trading Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty mb-6">
            From investment strategies to legacy planning, we provide end-to-end financial services designed to grow and
            protect your wealth.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <span className="text-sm font-medium text-primary">Professional Investment Plans</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Starting ₹1,999/month</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 lg:p-8">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
