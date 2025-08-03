import { LandingPage } from "./LandingPage"
import { useEffect } from "react"

const Index = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: hsl(var(--background));
      }
      
      ::-webkit-scrollbar-thumb {
        background: hsl(var(--primary) / 0.3);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: hsl(var(--primary) / 0.5);
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return <LandingPage />
};

export default Index;
