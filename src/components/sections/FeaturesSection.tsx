import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientText } from "@/components/ui/gradient-text"
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Users, 
  MessageSquare,
  TrendingUp,
  Shield
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms analyze customer behavior patterns to deliver actionable insights that drive conversions.",
    color: "text-blue-400"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Laser-focused audience segmentation using AI to reach the right customers at the perfect moment with personalized messaging.",
    color: "text-purple-400"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live dashboard with comprehensive metrics, performance tracking, and predictive forecasting for data-driven decisions.",
    color: "text-cyan-400"
  },
  {
    icon: Zap,
    title: "Automation Engine",
    description: "Streamline your marketing workflows with intelligent automation that adapts and optimizes campaigns in real-time.",
    color: "text-yellow-400"
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description: "Visualize and optimize every touchpoint in your customer's journey with AI-powered journey orchestration.",
    color: "text-green-400"
  },
  {
    icon: MessageSquare,
    title: "Smart Content Generation",
    description: "AI-generated copy, creative assets, and personalized content that resonates with your target audience at scale.",
    color: "text-pink-400"
  },
  {
    icon: TrendingUp,
    title: "Predictive Modeling",
    description: "Forecast market trends, customer lifetime value, and campaign performance with advanced predictive analytics.",
    color: "text-orange-400"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection.",
    color: "text-red-400"
  }
]

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
              Powerful Features for{" "}
              <GradientText gradient="secondary">Modern Marketers</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your marketing campaigns 
              with the power of artificial intelligence.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={feature.title} 
              direction="up" 
              delay={300 + index * 100}
              className="h-full"
            >
              <GlassCard hover="lift" className="h-full group cursor-pointer">
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color.replace('text-', 'from-')} to-transparent mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-gradient transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={1000}>
          <div className="text-center mt-16">
            <GlassCard className="inline-block">
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Ready to experience the future of marketing?
                </div>
                <div className="text-primary font-semibold cursor-pointer hover:text-primary-glow transition-colors">
                  Explore All Features →
                </div>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}