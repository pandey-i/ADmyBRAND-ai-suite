import { useState } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { GlassCard } from "@/components/ui/glass-card"
import { GradientText } from "@/components/ui/gradient-text"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { useToast } from "@/hooks/use-toast"
import { Send, CheckCircle } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  company: string
  message: string
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    })

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <ScrollReveal direction="up">
        <GlassCard className="text-center">
          <div className="py-12">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">
              <GradientText gradient="primary">Thank you!</GradientText>
            </h3>
            <p className="text-muted-foreground">
              Your message has been sent successfully. Our team will contact you soon.
            </p>
          </div>
        </GlassCard>
      </ScrollReveal>
    )
  }

  return (
    <ScrollReveal direction="up">
      <GlassCard>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Get in <GradientText gradient="primary">Touch</GradientText>
            </h3>
            <p className="text-muted-foreground">
              Ready to transform your marketing? Let's talk about your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell us about your marketing goals and how we can help..."
            />
          </div>

          <Button 
            type="submit" 
            variant="glow" 
            size="lg" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our Privacy Policy and Terms of Service.
          </p>
        </form>
      </GlassCard>
    </ScrollReveal>
  )
}