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
  Award,
  Info,
  AlertCircle,
  FileCheck
} from "lucide-react"

export function Disclosures() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="disclosures" className="py-20 lg:py-32 bg-background relative overflow-hidden">
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
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">SEBI Compliant Disclosures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Research{" "}
            <span className="gradient-text">Disclosures</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Complete transparency and regulatory compliance disclosures as per SEBI Research Analyst Regulations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* About the Research Analyst */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">1. About the Research Analyst</h3>
                  <p className="text-sm text-muted-foreground">Professional Background & Registration</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  <strong>Saurabh Mittal</strong> is a Research Analyst having its office at A 5, KHATU SHYAM APARTMENT MOTI COLONY PALWAL, FARIDABAD, HARYANA, 121102
                </p>
                
                <p>
                  <strong>Saurabh Mittal</strong> is registered with SEBI as a Research Analyst vide Registration number <strong>INH000022835</strong> on Aug 21, 2025, pursuant to which it provides Research Analyst services to its clients.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Business Activities */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">2. Details of Business Activities</h3>
                  <p className="text-sm text-muted-foreground">Services & Research Methodology</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  <strong>Saurabh Mittal</strong> provides research recommendations based on both fundamental and technical analysis. He provides research calls and investment insights through various digital platforms, and subscribers can join paid services by paying the amount for that subscription plan.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Conditions */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">3. Terms and Conditions</h3>
                  <p className="text-sm text-muted-foreground">Research Report Issuance Terms</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  <strong>Saurabh Mittal</strong> has exercised due diligence in checking the correctness and authenticity of the information contained herein, so far as it relates to current and historical information, but does not guarantee its accuracy or completeness. The opinions expressed are based on our current research as of the date appearing in the material and may be subject to change from time to time without notice.
                </p>
                
                <p>
                  <strong>Saurabh Mittal</strong> does not accept any liability arising from the use of this document or the information contained herein. The recipients of this material should rely on their own judgment and take their own professional advice before acting on this information.
                </p>
                
                <p>
                  <strong>Saurabh Mittal</strong> shall not be in any way responsible for any loss or damage that may arise to any person/s from any inadvertent error in the information contained, views and opinions expressed in this publication.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Conflict of Interest Disclosures */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">4. Conflict of Interest Disclosures</h3>
                  <p className="text-sm text-muted-foreground">Financial Interest & Ownership</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Do not hold any financial interest in the Company.</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Do not have any actual/beneficial ownership of more than 1% in the company.</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Do not have any other material conflict of interest.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Disclosures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">5. Third Party Relationships</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Saurabh Mittal</strong> or its associates are not affiliated with any other intermediaries or have received any brokerage or commission from any third party.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/30 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-foreground">6. Compensation History</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Saurabh Mittal</strong> or its associates have not received any compensation from the Company covered by Research Analyst during the past twelve months.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">7. Public Offerings</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Saurabh Mittal</strong> or its associates have not managed or co-managed public offering of securities of the Company during the past twelve months.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/30 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-foreground">8. Employment History</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Saurabh Mittal</strong> or its associates has not served as an officer, director or employee of the Company and has not been engaged in the market making activity of the Company.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Information Source Disclaimer */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">9. Information Source & Reliability</h3>
                  <p className="text-sm text-muted-foreground">Data Accuracy & Investment Decisions</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  <strong>Saurabh Mittal</strong> have ensured that the facts mentioned in the research report are taken from the reliable source and information. However, the investors are advised to independently evaluate the market conditions/ risks involved before making the investment decision.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">SEBI Registration Verified</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  All disclosures are made in compliance with SEBI Research Analyst Regulations, 2014.
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
              Get started with our SEBI-registered investment advisory services and experience professional guidance.
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
