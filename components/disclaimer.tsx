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
  FileCheck,
  Globe,
  Smartphone,
  TrendingUp,
  Lock
} from "lucide-react"

export function Disclaimer() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="disclaimer" className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/15 rounded-full animate-float animate-delay-200"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float animate-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6 animate-fade-in">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Important Legal Disclaimer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Legal{" "}
            <span className="gradient-text">Disclaimer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Research based legal disclaimers and terms of service for all investment advisory and research services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* SEBI Registration Disclaimer */}
          <Card className="border-2 border-destructive/20 bg-destructive/5">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">SEBI Registration Disclaimer</h3>
                  <p className="text-sm text-muted-foreground">Important regulatory information</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  <strong>Saurabh Mittal</strong> is registered with SEBI as Research Analyst vide Registration number <strong>INH000022835</strong> on Aug 21, 2025 pursuant to which it provides Research Analyst services to its clients.
                </p>
                
                <p>
                  <strong>Investment in securities market are subject to market risks.</strong> Read all the related documents carefully before investing.
                </p>
                
                <p>
                  Registration granted by SEBI and certification from NISM is no way guarantee performance of the intermediary or provide any assurance of returns to investors.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Investment Risks */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-destructive/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Investment Risks & Limitations</h3>
                  <p className="text-sm text-muted-foreground">Market risks and investment limitations</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  Investment in equity shares has its own risks. Sincere efforts have been made to present the right investment perspective. The information contained herein is based on analysis and on sources that I consider reliable. I, however does not vouch for the consistency or the completeness thereof.
                </p>
                
                <p>
                  This material is for personal information and I am not responsible for any loss incurred due to it & take no responsibility whatsoever for any financial profits or loss which may arise from the recommendations above.
                </p>
                
                <p>
                  <strong>I do Research & analysis only and provide recommendations based on it.</strong> I do not execute trades on behalf of Clients, hold Clients' funds, or provide any assured returns.
                </p>
                
                <p>
                  I do not provide any promise or assurance of favourable view for a particular industry or sector or business group in any manner. The investor is requested to take into consideration all the risk factors including their financial condition and suitability to risk return profile before investing.
                </p>
                
                <p>
                  <strong>All investments or trading carry market risk.</strong> Past performance (If any) is not indicative of future returns, and I does not assure or promise any specific gain or outcome.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Information Accuracy */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Information Accuracy & Liability</h3>
                  <p className="text-sm text-muted-foreground">Data accuracy and liability limitations</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  The information and views in this website & all the services that I provide are believed to be reliable, but I do not accept any responsibility (or liability) for errors of fact or opinion. Users have the right to choose the product/s that suits them the most.
                </p>
                
                <p>
                  I or any other person related to me might be holding positions in the stocks recommended.
                </p>
                
                <p>
                  The research recommendations are provided to all our clients who are entitled to receive the research reports. Any Client (Paid or Unpaid), any third party or anyone else have no rights to forward or share our calls or SMS or Reports or Any Information Provided by us to/with anyone (through any medium) which is received directly or indirectly by them. If found so, then serious legal actions can be taken.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Service Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/30 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-foreground">Service Scope</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I am not engaged in Managing of fund, Portfolio management or Investment Advisory services.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Independence</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I ensure that the individuals employed as research analyst are separate from other employees who are performing sales trading, dealing, corporate finance advisory or any other activity that may affect the independence of our research report/recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-accent/30 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="w-5 h-5 text-accent" />
                  <h4 className="font-semibold text-foreground">Opinion vs Advice</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If a client wants an opinion on a specific position, such suggestion/view under any circumstances shall be considered as an opinion (not advice). I am not liable for any losses whatsoever the client may incur in accepting this opinion.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">No Conflicts</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I do not have any association in any manner with any issuer of products/securities; this ensures that there are no actual or potential conflicts of interest.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Website Terms */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Website Terms & Conditions</h3>
                  <p className="text-sm text-muted-foreground">Website usage and liability</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  By accessing https://wealthconsultant.in/ or any of its associate/group sites, you have read, understood and agree to be legally bound by the terms of the following disclaimer and user agreement.
                </p>
                
                <p>
                  I had taken due care and caution in compilation of data for its website. I also advise users to check with other certified experts before taking any investment decision. However, I do not guarantee the consistency, adequacy or completeness of any information and is not responsible for any errors or omissions or for the results obtained from the use of such information.
                </p>
                
                <p>
                  I do hereby especially state that it has no financial liability whatsoever to any user on account of the use of information provided on its website.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Social Media Disclaimers */}
          <Card className="border-2 border-accent/20 bg-accent/5">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-6">
                <Smartphone className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Social Media Disclaimers</h3>
                  <p className="text-sm text-muted-foreground">Important information about social media content</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  All research, analysis, and recommendations shared through WhatsApp broadcasts, Telegram channels, or any other public platforms are provided solely for educational and informational purposes and should not be considered as investment advice.
                </p>
                
                <p>
                  Everything posted on social media (Twitter/Facebook/Telegram/YouTube channel) is for education / illustration purposes and should not be counted as recommendations or investment advice.
                </p>
                
                <p>
                  Any matter displayed in this content are purely for Knowledge purpose and shall not be treated as an advice or opinion of any kind. Neither Saurabh Mittal nor the marketing agents related to the firm shall be held liable/responsible in any manner whatsoever for any losses the viewers may incur due to acting upon this content.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trading Risks */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-destructive/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Trading Risks & Responsibilities</h3>
                  <p className="text-sm text-muted-foreground">Trading risks and user responsibilities</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  Stock trading is inherently risky, and you agree to assume complete and full responsibility for the outcomes of all trading decisions that you make.
                </p>
                
                <p>
                  You, and not me, assume the entire cost and risk of any trading you choose to undertake. You are solely responsible for making your own investment decisions. If you choose to engage in transactions with or without seeking advice from a licensed and qualified financial advisor or entity, then such decision and any consequences flowing there from are your sole responsibility.
                </p>
                
                <p>
                  I or any employees are in no way liable for the use of the information by others in investing or trading in investment vehicles.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Jurisdiction & Legal */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Jurisdiction & Legal Terms</h3>
                  <p className="text-sm text-muted-foreground">Legal jurisdiction and terms</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-foreground leading-relaxed">
                <p>
                  I do hereby expressly disclaims any implied warranties imputed by the laws of any jurisdiction. I consider ourselves and intend to be subject to the jurisdiction only of the courts of Haryana in India.
                </p>
                
                <p>
                  If you don't agree with any of our disclaimers above, please do not read the material on any of our pages. Although access to users outside India is not denied, Saurabh Mittal shall have no legal liabilities whatsoever in any laws of any jurisdiction other than India.
                </p>
                
                <p>
                  I also reserve the right to make changes to our site and these disclaimers, terms, and conditions at any time.
                </p>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span className="font-semibold text-foreground">Important Notice</span>
                </div>
                <p className="text-sm text-foreground">
                  By using this website and services, you acknowledge that you have read, understood, and agree to be bound by all terms and conditions stated in this disclaimer.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need More Information?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us for any questions about our services or legal terms.
            </p>
            <Button
              onClick={scrollToContact}
              className="gradient-primary text-primary-foreground hover:opacity-90 hover-lift hover-glow transition-all duration-300 group shadow-lg cursor-pointer"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
