"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0 animate-fade-in">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>

              <h1 className="text-xl lg:text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300">
               Saurabh Mittal
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 relative group cursor-pointer"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 relative group cursor-pointer"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>

      <button
        onClick={() => scrollToSection("pricing")}
        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 relative group cursor-pointer"
      >
        Pricing
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button
        onClick={() => scrollToSection("testimonials")}
        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 relative group cursor-pointer"
      >
        Testimonials
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </button>
      <a
        href="/compliance"
        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 relative group cursor-pointer"
      >
        Compliance
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        href="/disclosures"
        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 relative group cursor-pointer"
      >
        Disclosures
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </a>
      <a
        href="/disclaimer"
        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-105 relative group cursor-pointer"
      >
        Disclaimer
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift hover-glow transition-all duration-300 cursor-pointer"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-foreground cursor-pointer">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors text-left cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors text-left cursor-pointer"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors text-left cursor-pointer"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors text-left cursor-pointer"
              >
                Testimonials
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full cursor-pointer"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
