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
  ArrowRight,
  Clock,
  Gavel
} from "lucide-react"

export function GrievanceBoard() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Get current month and year
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
  const currentYear = currentDate.getFullYear()

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
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
            <Gavel className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Grievance Board</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Grievance{" "}
            <span className="gradient-text">Board</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Transparent reporting of complaint data and grievance resolution statistics for our research analyst services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Organization Details */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Organization Details</h2>
                  <p className="text-sm text-muted-foreground">Research Analyst Information</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-2">Name of Organisation</h3>
                  <p className="text-sm text-foreground">
                    <strong>Saurabh Mittal</strong> - Research Analyst
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <h3 className="font-semibold text-foreground mb-2">Status & SEBI Registration</h3>
                  <p className="text-sm text-foreground">
                    <strong>Status:</strong> SEBI registered Research Analyst<br />
                    <strong>SEBI Registration Number:</strong> INH000022835<br />
                    <strong>Registration Date:</strong> Aug 21, 2025
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-2">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground">
                    <div>
                      <p><strong>Email:</strong> Ra.saurabhmittal@gmail.com</p>
                      <p><strong>Phone:</strong> +91 7877788291</p>
                    </div>
                    <div>
                      <p><strong>Address:</strong> A 5, KHATU SHYAM APARTMENT</p>
                      <p>MOTI COLONY PALWAL, FARIDABAD, HARYANA, 121102</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Complaint Data Section */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Complaint Data</h2>
                  <p className="text-sm text-muted-foreground">Data for the month – {currentMonth} {currentYear}</p>
                </div>
              </div>

              {/* Complaint Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-3 text-left text-sm font-semibold text-foreground">Sr. No.</th>
                      <th className="border border-border p-3 text-left text-sm font-semibold text-foreground">Received From</th>
                      <th className="border border-border p-3 text-center text-sm font-semibold text-foreground">Pending at the end of Last Month</th>
                      <th className="border border-border p-3 text-center text-sm font-semibold text-foreground">Received</th>
                      <th className="border border-border p-3 text-center text-sm font-semibold text-foreground">Resolved*</th>
                      <th className="border border-border p-3 text-center text-sm font-semibold text-foreground">Total Pending#</th>
                      <th className="border border-border p-3 text-center text-sm font-semibold text-foreground">Pending complaints > 3 months</th>
                      <th className="border border-border p-3 text-center text-sm font-semibold text-foreground">Average Resolution time^ (in days)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="border border-border p-3 text-sm text-foreground">1</td>
                      <td className="border border-border p-3 text-sm text-foreground">Directly from Investors</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="border border-border p-3 text-sm text-foreground">2</td>
                      <td className="border border-border p-3 text-sm text-foreground">SEBI (SCORES)</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                    </tr>
                    <tr className="hover:bg-primary/5 transition-colors">
                      <td className="border border-border p-3 text-sm text-foreground">3</td>
                      <td className="border border-border p-3 text-sm text-foreground">Other Sources (if any)</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                      <td className="border border-border p-3 text-center text-sm text-foreground">0</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table Footnotes */}
              <div className="mt-6 space-y-2 text-xs text-muted-foreground">
                <p><strong>*</strong> Resolved: Complaints resolved during the current month</p>
                <p><strong>#</strong> Total Pending: Pending complaints at the end of current month</p>
                <p><strong>^</strong> Average Resolution time: Average time taken to resolve complaints in days</p>
              </div>
            </CardContent>
          </Card>

          {/* Grievance Redressal Process */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Grievance Redressal Process</h2>
                  <p className="text-sm text-muted-foreground">How we handle your complaints</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Direct Complaint</h3>
                    <p className="text-sm text-foreground">Contact us directly via email or phone for immediate assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">SEBI SCORES</h3>
                    <p className="text-sm text-foreground">File complaints through SEBI's centralized grievance redressal system</p>
                    <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm flex items-center gap-1 mt-1">
                      https://scores.sebi.gov.in <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Resolution Timeline</h3>
                    <p className="text-sm text-foreground">We strive to resolve all grievances within 21 days of receipt</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Grievances */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Contact for Grievances</h3>
                  <p className="text-sm text-muted-foreground">Get in touch with us for any complaints or concerns</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">Ra.saurabhmittal@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 7877788291</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        A 5, KHATU SHYAM APARTMENT<br />
                        MOTI COLONY PALWAL<br />
                        FARIDABAD, HARYANA, 121102
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">Commitment to Resolution</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We are committed to resolving all grievances promptly and fairly. All complaints are handled with confidentiality and professionalism.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need to File a Grievance?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us directly or use SEBI SCORES for official complaint filing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                className="gradient-primary text-primary-foreground hover:opacity-90 hover-lift hover-glow transition-all duration-300 group shadow-lg cursor-pointer"
              >
                Contact Us Directly
              </Button>
              <Button
                onClick={() => window.open('https://scores.sebi.gov.in', '_blank')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                SEBI SCORES
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


