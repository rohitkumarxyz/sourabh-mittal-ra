import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Process />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="https://wa.me/917877788291" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
          title="WhatsApp +91 78777 88291"
        >
          <img 
            src="/whatsapp.png" 
            alt="WhatsApp" 
            className="w-8 h-8"
          />
        </a>
      </div>
    </main>
  )
}
