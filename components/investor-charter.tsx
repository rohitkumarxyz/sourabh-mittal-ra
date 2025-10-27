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
  Eye,
  Target,
  Clock,
  Gavel,
  UserCheck,
  XCircle
} from "lucide-react"

export function InvestorCharter() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

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
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Investor Charter - RA</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Investor Charter in Respect of{" "}
            <span className="gradient-text">Research Analysts</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Comprehensive investor charter outlining our commitment to transparency, fairness, and investor protection in research analyst services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Vision and Mission */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">A. Vision and Mission Statements for Investors</h2>
                  <p className="text-sm text-muted-foreground">Our commitment to investor welfare</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Vision
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    Invest with knowledge & safety.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    Mission
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Business Details */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">B. Details of Business Transacted by the Research Analyst</h2>
                  <p className="text-sm text-muted-foreground">Our business activities and commitments</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">To publish research report based on the research activities of the RA</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">To provide an independent unbiased view on securities</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">To offer unbiased recommendation, disclosing the financial interests in recommended securities</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">To provide research recommendation, based on analysis of publicly available information and known observations</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">To conduct audit annually</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services Provided */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">C. Details of Services Provided to Investors</h2>
                  <p className="text-sm text-muted-foreground">Our service commitments (No Indicative Timelines)</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3">Service Delivery</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Onboarding of Clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Sharing of terms and conditions of research services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Completing KYC of fee paying clients</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <h3 className="font-semibold text-foreground mb-3">Disclosure to Clients</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To disclose the extent of use of Artificial Intelligence tools in providing research services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To distribute research reports and recommendations to the clients without discrimination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To maintain confidentiality w.r.t publication of the research report until made available in the public domain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To treat all clients with honesty and integrity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grievance Redressal */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <Gavel className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">D. Details of Grievance Redressal Mechanism</h2>
                  <p className="text-sm text-muted-foreground">How to access grievance redressal</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3">Mode of Filing Complaint with Research Analyst</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <h3 className="font-semibold text-foreground mb-3">Mode of Filing Complaint on SCORES or with RAASB</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-foreground font-medium">SCORES 2.0</p>
                        <p className="text-sm text-muted-foreground">A web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner</p>
                        <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm flex items-center gap-1 mt-1">
                          https://scores.sebi.gov.in <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50 border border-accent/20">
                      <p className="text-sm text-foreground font-medium mb-2">Two level review for complaint/grievance against Research Analyst:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• First review done by designated body (RAASB)</li>
                        <li>• Second review done by SEBI</li>
                      </ul>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-foreground font-medium">Email to designated email ID of RAASB</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3">SMARTODR Platform</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR platform for its resolution through online conciliation or arbitration.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                  <h3 className="font-semibold text-foreground mb-3">Physical Complaints</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    With regard to physical complaints, investors may send their complaints to:
                  </p>
                  <div className="mt-2 p-3 rounded-lg bg-background/50 border border-accent/20">
                    <p className="text-sm text-foreground">
                      Office of Investor Assistance and Education,<br />
                      Securities and Exchange Board of India,<br />
                      SEBI Bhavan, Plot No. C4-A, 'G' Block,<br />
                      Bandra-Kurla Complex, Bandra (E),<br />
                      Mumbai – 400 051
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rights of Investors */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">E. Rights of Investors</h2>
                  <p className="text-sm text-muted-foreground">Your rights as an investor</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <UserCheck className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to Privacy and Confidentiality</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Eye className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to Transparent Practices</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to fair and Equitable Treatment</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Info className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to Adequate Information</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to Initial and Continuing Disclosure</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to receive information about all the statutory and regulatory disclosures</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Eye className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to Fair & True Advertisement</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to Awareness about Service Parameters and Turnaround Times</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to be informed of the timelines for each service</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Gavel className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to be Heard and Satisfactory Grievance Redressal</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to have timely redressal</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Users className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <AlertTriangle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <UserCheck className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Additional Rights to vulnerable consumers – Right to get access to services in a suitable manner even if differently abled</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right to provide feedback on the financial products and services used</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                  <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Right against coercive, unfair, and one-sided clauses in financial agreements</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expectations from Investors */}
          <Card className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-accent/30 hover-lift animate-fade-in-up gradient-card">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">F. Expectations from the Investors (Responsibilities of Investors)</h2>
                  <p className="text-sm text-muted-foreground">Your responsibilities as an investor</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Do's
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Always deal with SEBI registered Research Analyst</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ensure that the Research Analyst has a valid registration certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Check for SEBI registration number: Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website</span>
                      <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm flex items-center gap-1 ml-2">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Always pay attention towards disclosures made in the research reports before investing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Inform SEBI about Research Analyst offering assured or guaranteed returns</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-destructive/5 border border-destructive/10">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-destructive" />
                    Don'ts
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Do not provide funds for investment to the Research Analyst</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Don't fall prey to luring advertisements or market rumors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <span>Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst</span>
                    </li>
                  </ul>
                </div>
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
              Contact us for any questions about our investor charter or services.
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

