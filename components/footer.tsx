import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
          
              <h3 className="text-xl font-bold">Saurabh Mittal</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Your trusted partner in building and preserving wealth for over 8+ years.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>


          {/* Pricing Plans */}
          <div>
            <h4 className="font-semibold mb-4">Investment Plans</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#pricing" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Equity Plans - ₹1,999/month
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Equity + Options - ₹2,999/month
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Equity + Futures + Options - ₹3,999/month
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  View All Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/compliance" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Compliance
                </a>
              </li>
              <li>
                <a href="/disclosures" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Disclosures
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/disclaimer" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Terms of Service
                </a>
                </li>

              <li>
                <a href="/investor-charter" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Investor Charter
                </a>
              </li>
              <li>
                <a href="/grievance-board" className="hover:text-primary-foreground transition-colors cursor-pointer">
                  Grievance Board
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Officer Details */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Principal Officer */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Principal Officer</h4>
              <div className="space-y-1 text-xs text-primary-foreground/80">
                <p><strong>Name:</strong> Saurabh Mittal</p>
                <p><strong>Email:</strong> Ra.saurabhmittal@gmail.com</p>
                <p><strong>Phone:</strong> +91 7877788291</p>
              </div>
            </div>

            {/* Compliance Officer */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-primary-foreground mb-3 text-sm">Compliance Officer</h4>
              <div className="space-y-1 text-xs text-primary-foreground/80">
                <p><strong>Name:</strong> Saurabh Mittal</p>
                <p><strong>Email:</strong> Ra.saurabhmittal@gmail.com</p>
                <p><strong>Phone:</strong> +91 7877788291</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© 2025 Saurabh Mittal. All rights reserved.</p>
            <p>SEBI Registered Research Analyst | Registration No: INH000022835</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
