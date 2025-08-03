import { useState } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Switch } from "@/components/ui/switch"
import { Check, Crown, Rocket, Star } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 29,
    yearlyPrice: 24,
    icon: Star,
    features: [
      "Up to 10,000 contacts",
      "Basic AI insights",
      "Email & SMS campaigns",
      "Standard analytics",
      "24/7 email support",
      "Mobile app access"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Ideal for growing marketing teams",
    monthlyPrice: 79,
    yearlyPrice: 65,
    icon: Rocket,
    features: [
      "Up to 50,000 contacts",
      "Advanced AI automation",
      "Multi-channel campaigns",
      "Predictive analytics",
      "Priority phone support",
      "Custom integrations",
      "A/B testing suite",
      "Lead scoring & nurturing"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 199,
    yearlyPrice: 165,
    icon: Crown,
    features: [
      "Unlimited contacts",
      "Full AI suite access",
      "White-label solution",
      "Advanced security",
      "Dedicated account manager",
      "Custom AI training",
      "API access",
      "SLA guarantee",
      "Custom reporting"
    ],
    popular: false
  }
]

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
              Simple, <GradientText gradient="primary">Transparent Pricing</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your business. All plans include our core AI features 
              with a 14-day free trial.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
                className="data-[state=checked]:bg-primary"
              />
              <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
              </span>
              <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Save 20%
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal 
              key={plan.name} 
              direction="up" 
              delay={400 + index * 200}
            >
              <GlassCard 
                hover="lift" 
                className={`relative h-full ${
                  plan.popular 
                    ? 'ring-2 ring-primary shadow-glow scale-105' 
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-2xl ${
                        plan.popular 
                          ? 'bg-gradient-primary' 
                          : 'bg-muted'
                      }`}>
                        <plan.icon className={`w-8 h-8 ${
                          plan.popular 
                            ? 'text-primary-foreground' 
                            : 'text-foreground'
                        }`} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                      {isYearly && (
                        <div className="text-sm text-success mt-1">
                          Billed annually
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.popular ? "glow" : "glass"} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={1000}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              All plans include 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="text-sm text-muted-foreground">
              Need a custom solution? 
              <span className="text-primary hover:text-primary-glow cursor-pointer ml-1">
                Contact our sales team →
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}