import { useState, useEffect } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { GradientText } from "@/components/ui/gradient-text"
import { Menu, X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" }
]

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "glass border-b border-glass-border py-4" 
          : "bg-transparent py-6"
      )}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-outfit font-bold">
                <GradientText gradient="primary">ADmyBRAND</GradientText>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Sign In
              </button>
              <Button variant="glow" className="group">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-x-0 top-0 z-40 md:hidden transition-all duration-300 ease-out",
        isMobileMenuOpen 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="glass border-b border-glass-border pt-24 pb-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              
              <div className="border-t border-border pt-6 mt-6">
                <div className="flex flex-col gap-4">
                  <button className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
                    Sign In
                  </button>
                  <Button variant="glow" className="justify-center group">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}