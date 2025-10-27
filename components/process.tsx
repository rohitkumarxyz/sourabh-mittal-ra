import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Build your portfolio",
    description:
      "We begin with a comprehensive discussion to understand your financial situation, goals, and risk tolerance to build your portfolio.",
  },
  {
    number: "02",
    title: "Financial Analysis",
    description: "Our experts conduct a thorough analysis of your current portfolio, assets, and liabilities.",
  },
  {
    number: "03",
    title: "Strategy Development",
    description: "We create a customized wealth management plan tailored to your specific objectives.",
  },
  {
    number: "04",
    title: "Implementation",
    description: "We execute the strategy with precision, ensuring optimal asset allocation and investment selection.",
  },
  {
    number: "05",
    title: "Ongoing Management",
    description: "Regular portfolio reviews and adjustments to keep you on track toward your financial goals.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/15 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-primary/20 rounded-full animate-float animate-delay-400"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our{" "}
            <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A systematic approach to building and preserving your wealth, backed by years of experience and proven
            results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-500 border-border hover:border-accent/50 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                        <span className="text-2xl font-bold text-accent group-hover:text-primary transition-colors duration-300">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
