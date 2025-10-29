"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Shield, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2,
  Users,
  Building,
  Calendar,
  Award
} from "lucide-react"

export function Compliance() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="compliance" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/15 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float animate-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">SEBI Registered & Compliant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Regulatory{" "}
            <span className="gradient-text">Compliance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Transparent, compliant, and regulated financial advisory services with full SEBI registration and regulatory oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* SEBI Registration Details */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">SEBI Registration</h3>
                  <p className="text-sm text-muted-foreground">Research Analyst Registration</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <span className="text-sm font-medium text-foreground">Registration Type</span>
                  <span className="text-sm font-semibold text-primary">Individual</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <span className="text-sm font-medium text-foreground">Registration Number</span>
                  <span className="text-sm font-semibold text-accent">INH000022835                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <span className="text-sm font-medium text-foreground">Validity</span>
                  <span className="text-sm font-semibold text-primary">Aug 21, 2025 - Perpetual</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <span className="text-sm font-medium text-foreground">BSE Enlistment</span>
                  <span className="text-sm font-semibold text-accent">6761</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
                  <p className="text-sm text-muted-foreground">Compliance Officer Details</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-foreground block">Phone</span>
                    <span className="text-sm text-muted-foreground">+91 7877788291 </span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Mail className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-foreground block">Email</span>
                    <span className="text-sm text-muted-foreground">Ra.saurabhmittal@gmail.com                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <span className="text-sm font-medium text-foreground block">Registered Address</span>
                    <span className="text-sm text-muted-foreground">A 5, KHATU SHYAM APARTMENT MOTI COLONY PALWAL, FARIDABAD, HARYANA, 121102</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Links */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Important Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 hover-lift cursor-pointer">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Investor Charter</h4>
                <p className="text-sm text-muted-foreground">Your rights and our commitments</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 hover-lift cursor-pointer">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Grievance Redressal</h4>
                <p className="text-sm text-muted-foreground">Report issues and concerns</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 hover-lift cursor-pointer">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Disclaimer</h4>
                <p className="text-sm text-muted-foreground">Important legal information</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 hover-lift cursor-pointer">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Privacy Policy</h4>
                <p className="text-sm text-muted-foreground">Data protection and privacy</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16">
          <Card className="border-2 border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Important Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">Please read carefully before investing</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  <strong>Investment in securities market are subject to market risks.</strong> Read all the related documents carefully before investing. The securities quoted on the page above are for illustration only and are not recommendatory.
                </p>
                
                <p>
                  Registration granted by SEBI, Enlistment as RA with Exchange and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. The recommendations provided are based on our analysis and available information at a given time.
                </p>
                
                <p>
                  <strong>Investors should make investment decisions at their own risk and discretion.</strong> Past performance does not guarantee future results. Please consult with your financial advisor before making any investment decisions.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">SEBI Registration Verified</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our registration with SEBI ensures compliance with all regulatory requirements and investor protection measures.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get started with our SEBI-registered Research  services and experience professional guidance.
            </p>
            <Button
              onClick={scrollToContact}
              className="gradient-primary text-primary-foreground hover:opacity-90 hover-lift hover-glow transition-all duration-300 group shadow-lg cursor-pointer"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
