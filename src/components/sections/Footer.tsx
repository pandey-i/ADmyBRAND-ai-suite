import { GradientText } from "@/components/ui/gradient-text"
import { Button } from "@/components/ui/enhanced-button"
import { GlassCard } from "@/components/ui/glass-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube 
} from "lucide-react"

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "API Documentation", href: "#api" },
    { name: "Changelog", href: "#changelog" }
  ],
  Company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press Kit", href: "#press" },
    { name: "Contact", href: "#contact" },
    { name: "Partners", href: "#partners" }
  ],
  Resources: [
    { name: "Blog", href: "#blog" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Webinars", href: "#webinars" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" }
  ],
  Legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
    { name: "Security", href: "#security" }
  ]
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-5" />
      
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-16">
          <ScrollReveal direction="up" delay={200}>
            <GlassCard className="text-center">
              <h3 className="text-3xl font-outfit font-bold mb-4">
                Stay ahead with <GradientText gradient="primary">AI insights</GradientText>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get the latest marketing AI trends, case studies, and exclusive tips 
                delivered to your inbox weekly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
                <Button variant="glow" className="sm:w-auto">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe at any time. 25,000+ marketers trust our newsletter.
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <ScrollReveal direction="up" delay={300} className="lg:col-span-2">
            <div>
              <h3 className="text-2xl font-outfit font-bold mb-4">
                <GradientText gradient="primary">ADmyBRAND</GradientText> AI Suite
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Revolutionizing digital marketing with AI-powered automation, 
                predictive analytics, and personalized customer experiences.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@admybrand.ai</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <ScrollReveal 
              key={category} 
              direction="up" 
              delay={400 + index * 100}
            >
              <div>
                <h4 className="font-semibold mb-6">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6">
          <ScrollReveal direction="up" delay={600}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © 2024 ADmyBRAND AI Suite. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <span className="text-muted-foreground">Status:</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-success font-medium">All systems operational</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  )
}