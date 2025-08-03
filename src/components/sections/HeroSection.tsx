import { Button } from "@/components/ui/enhanced-button"
import { GradientText } from "@/components/ui/gradient-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { CyclingTypingEffect } from "@/components/ui/cycling-typing-effect"
import { StarryBackground } from "@/components/ui/starry-background"
import { ArrowRight, Play, Star } from "lucide-react"
import heroImage from "@/assets/hero-dashboard.jpg"

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-24">
      {/* Starry Background */}
      <StarryBackground />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <ScrollReveal direction="up" delay={200}>
              <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 50,000+ marketers</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold mb-6 leading-tight">
                <CyclingTypingEffect 
                  texts={[
                    "Transform Your Business",
                    "Revolutionize Marketing", 
                    "Boost Your Revenue",
                    "Automate Success"
                  ]}
                  typingSpeed={40}
                  deletingSpeed={25}
                  pauseDuration={1200}
                />
                <br />
                <GradientText gradient="primary" animate="shift" className="text-glow">
                  with AI Power
                </GradientText>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                ADmyBRAND AI Suite revolutionizes digital marketing with intelligent automation, 
                predictive analytics, and personalized customer experiences that drive 300% better results.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="glow" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="glass" size="xl" className="group">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1000}>
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">300%</div>
                  <div className="text-sm text-muted-foreground">ROI Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Image */}
          <ScrollReveal direction="right" delay={600}>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="ADmyBRAND AI Dashboard" 
                  className="w-full h-auto rounded-3xl shadow-2xl animate-float"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl animate-glow" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 glass-card p-4 animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Live Analytics</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card p-4 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-bold text-gradient">+247%</div>
                  <span className="text-sm text-muted-foreground">Conversion Rate</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}