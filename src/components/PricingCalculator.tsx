import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Calculator, TrendingUp, Users, Mail } from "lucide-react"

export const PricingCalculator = () => {
  const [contacts, setContacts] = useState([25000])
  const [emailsPerMonth, setEmailsPerMonth] = useState([100000])
  const [isYearly, setIsYearly] = useState(false)

  // Pricing logic
  const calculatePrice = () => {
    const contactCount = contacts[0]
    const emailCount = emailsPerMonth[0]
    
    let basePrice = 79 // Professional plan base
    
    // Contact pricing tiers
    if (contactCount <= 10000) basePrice = 29
    else if (contactCount <= 50000) basePrice = 79
    else if (contactCount <= 100000) basePrice = 149
    else basePrice = 199

    // Email volume pricing
    const emailCost = Math.max(0, (emailCount - 50000) * 0.0002)
    
    const monthlyPrice = basePrice + emailCost
    const yearlyPrice = monthlyPrice * 12 * 0.8 // 20% discount
    
    return isYearly ? yearlyPrice : monthlyPrice
  }

  const currentPrice = calculatePrice()
  const savings = isYearly ? (calculatePrice() / 0.8 - calculatePrice()) : 0

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-mesh/5">
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
              <GradientText gradient="primary">Pricing Calculator</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Customize your plan based on your needs. Get an instant quote tailored to your business size.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Controls */}
            <ScrollReveal direction="left" delay={400}>
              <GlassCard className="h-fit">
                <div className="flex items-center gap-3 mb-8">
                  <Calculator className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">Configure Your Plan</h3>
                </div>

                <div className="space-y-8">
                  {/* Number of Contacts */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-5 h-5 text-primary" />
                      <label className="text-lg font-semibold">Number of Contacts</label>
                    </div>
                    <div className="mb-4">
                      <Slider
                        value={contacts}
                        onValueChange={setContacts}
                        max={200000}
                        min={1000}
                        step={1000}
                        className="w-full"
                      />
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-gradient">
                        <AnimatedCounter value={contacts[0]} />
                      </span>
                      <span className="text-muted-foreground ml-2">contacts</span>
                    </div>
                  </div>

                  {/* Emails per Month */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Mail className="w-5 h-5 text-primary" />
                      <label className="text-lg font-semibold">Emails per Month</label>
                    </div>
                    <div className="mb-4">
                      <Slider
                        value={emailsPerMonth}
                        onValueChange={setEmailsPerMonth}
                        max={500000}
                        min={10000}
                        step={10000}
                        className="w-full"
                      />
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-gradient">
                        <AnimatedCounter value={emailsPerMonth[0]} />
                      </span>
                      <span className="text-muted-foreground ml-2">emails/month</span>
                    </div>
                  </div>

                  {/* Billing Period */}
                  <div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/30">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="font-semibold">Annual Billing</span>
                        <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded-full">
                          Save 20%
                        </span>
                      </div>
                      <Switch
                        checked={isYearly}
                        onCheckedChange={setIsYearly}
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Price Display */}
            <ScrollReveal direction="right" delay={600}>
              <GlassCard className="text-center h-fit">
                <h3 className="text-2xl font-bold mb-8">Your Custom Quote</h3>
                
                <div className="mb-8">
                  <div className="text-6xl font-bold mb-2">
                    <GradientText gradient="primary">
                      $<AnimatedCounter value={Math.round(currentPrice)} />
                    </GradientText>
                  </div>
                  <div className="text-muted-foreground">
                    per {isYearly ? 'year' : 'month'}
                  </div>
                  
                  {isYearly && savings > 0 && (
                    <div className="mt-4 inline-block">
                      <div className="bg-success/20 text-success px-4 py-2 rounded-full">
                        Save ${Math.round(savings)} annually
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <span>Contacts included</span>
                    <span className="font-semibold">
                      <AnimatedCounter value={contacts[0]} />
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <span>Monthly emails</span>
                    <span className="font-semibold">
                      <AnimatedCounter value={emailsPerMonth[0]} />
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <span>AI features</span>
                    <span className="font-semibold text-success">Full access</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <span>Support</span>
                    <span className="font-semibold text-success">24/7 Priority</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full btn-primary">
                    Start Free Trial
                  </button>
                  <p className="text-xs text-muted-foreground">
                    14-day free trial • No setup fees • Cancel anytime
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}