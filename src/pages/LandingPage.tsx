import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { PricingSection } from "@/components/sections/PricingSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { Footer } from "@/components/sections/Footer"
import { ContactForm } from "@/components/ContactForm"
import { PricingCalculator } from "@/components/PricingCalculator"
import { FloatingOrbField } from "@/components/3D/FloatingOrb"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { GradientText } from "@/components/ui/gradient-text"

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Floating 3D Background Elements */}
      <FloatingOrbField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Features Section */}
        <FeaturesSection />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Interactive Pricing Calculator */}
        <PricingCalculator />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Contact Section */}
        <section className="py-24 relative overflow-hidden" id="contact">
          <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
          
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
                  Ready to <GradientText gradient="secondary">Transform</GradientText> Your Marketing?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Join thousands of marketers who've revolutionized their results with AI. 
                  Let's discuss how we can help you achieve your goals.
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}