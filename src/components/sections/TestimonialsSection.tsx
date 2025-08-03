import { useState, useEffect } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Button } from "@/components/ui/enhanced-button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=100&h=100&fit=crop&crop=face",
    content: "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in qualified leads within just 3 months. The AI insights are incredibly accurate and actionable.",
    rating: 5,
    result: "+300% Lead Generation"
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO & Founder",
    company: "GrowthLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "The automation features saved us 20+ hours per week while improving our campaign performance by 250%. It's like having an entire marketing team powered by AI.",
    rating: 5,
    result: "+250% Campaign Performance"
  },
  {
    name: "Emily Johnson",
    role: "Growth Marketing Manager",
    company: "Innovate Solutions",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "The predictive analytics helped us identify high-value customers before our competitors. Our customer acquisition cost dropped by 40% while revenue increased by 180%.",
    rating: 5,
    result: "-40% Acquisition Cost"
  },
  {
    name: "David Kim",
    role: "Digital Marketing Head",
    company: "CloudTech",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Implementation was seamless and the ROI was immediate. The AI-generated content performs better than anything our team created manually. Absolutely game-changing.",
    rating: 5,
    result: "+450% Content Engagement"
  }
]

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-outfit font-bold mb-6">
              Loved by <GradientText gradient="secondary">Marketing Teams</GradientText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of marketers who've transformed their results with ADmyBRAND AI Suite.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Testimonial Carousel */}
        <ScrollReveal direction="up" delay={400}>
          <div className="max-w-4xl mx-auto relative">
            <GlassCard className="text-center p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Result Badge */}
              <div className="inline-block mb-8">
                <div className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full font-semibold">
                  {testimonials[currentTestimonial].result}
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-primary"
                />
                <div className="text-left">
                  <div className="font-semibold text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-primary font-medium">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Navigation Buttons */}
            <Button
              variant="glass"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="glass"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </ScrollReveal>

        {/* Testimonial Indicators */}
        <ScrollReveal direction="up" delay={600}>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Company Logos */}
        <ScrollReveal direction="up" delay={800}>
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-center text-muted-foreground mb-8">
              Trusted by innovative companies worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
              {["TechFlow", "GrowthLab", "Innovate", "CloudTech"].map((company, index) => (
                <div key={company} className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">
                    {company}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}