import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How quickly can I see results with ADmyBRAND AI Suite?",
    answer: "Most customers see initial improvements within the first week, with significant results typically appearing within 30 days. Our AI algorithms start learning from your data immediately and optimize campaigns in real-time."
  },
  {
    question: "Is my data secure with ADmyBRAND AI?",
    answer: "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is stored in secure, geographically distributed data centers with 99.99% uptime SLA."
  },
  {
    question: "Do I need technical expertise to use the platform?",
    answer: "Not at all! Our platform is designed for marketers, not developers. The intuitive interface and AI-powered automation handle the complex technical aspects, while our support team provides comprehensive onboarding and training."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer: "Yes! We offer native integrations with 200+ popular marketing tools including Salesforce, HubSpot, Mailchimp, Google Analytics, Facebook Ads, and more. Our API also allows custom integrations."
  },
  {
    question: "What makes your AI different from other marketing platforms?",
    answer: "Our AI is specifically trained on marketing data and continuously learns from millions of campaigns. Unlike generic AI, our models understand marketing nuances, seasonal patterns, and industry-specific behaviors to deliver superior results."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can upgrade or cancel anytime during or after the trial period."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 support via chat and email for all plans, with phone support for Professional and Enterprise customers. Enterprise customers also get a dedicated Customer Success Manager and priority support."
  },
  {
    question: "Can I customize the AI models for my specific industry?",
    answer: "Enterprise customers can access custom AI training to optimize models for their specific industry, audience, and business goals. This includes custom data sets, specialized algorithms, and industry-specific insights."
  }
]

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]) // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
              Frequently Asked{" "}
              <GradientText gradient="primary">Questions</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about ADmyBRAND AI Suite. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={300 + index * 100}
            >
              <GlassCard 
                className={cn(
                  "mb-4 cursor-pointer transition-all duration-300",
                  openItems.includes(index) ? "ring-1 ring-primary/30" : ""
                )}
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-lg font-semibold pr-8 flex-grow">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
                      openItems.includes(index) ? "rotate-180 text-primary" : ""
                    )}
                  />
                </div>
                
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal direction="up" delay={1000}>
          <div className="text-center mt-16">
            <GlassCard className="inline-block">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team is here to help you get started with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button className="text-primary font-semibold hover:text-primary-glow transition-colors">
                    Contact Support →
                  </button>
                  <span className="text-muted-foreground hidden sm:block">or</span>
                  <button className="text-primary font-semibold hover:text-primary-glow transition-colors">
                    Schedule a Demo →
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}