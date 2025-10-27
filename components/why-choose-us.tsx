import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Heart, Zap } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "SEBI registered advisors with decades of combined experience in wealth management.",
  },
  {
    icon: Target,
    title: "Goal-Oriented Approach",
    description: "Every strategy is data driven to align with proper trade execution.",
  },
  {
    icon: Heart,
    title: "Client-First Philosophy",
    description: "Your success is our success. We prioritize your interests above all else.",
  },
  {
    icon: Zap,
    title: "Proactive Management",
    description: "Continuous monitoring and timely adjustments to keep your portfolio optimized.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-24 h-24 bg-primary-foreground/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-primary-foreground/15 rounded-full animate-float animate-delay-300"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-primary-foreground/5 rounded-full animate-float animate-delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Why Choose{" "}
            <span className="gradient-text">Saurabh Mittal?</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
            We combine expertise, technology, and personalized service to deliver exceptional wealth management
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-500 hover-lift animate-fade-in-up shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full gradient-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary-foreground group-hover:text-accent transition-colors duration-300">{reason.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed group-hover:text-primary-foreground/90 transition-colors duration-300">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
