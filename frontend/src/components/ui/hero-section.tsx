import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, FileText, Brain } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-animated opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <Sparkles className="w-8 h-8 text-white/60" />
      </div>
      <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '2s' }}>
        <FileText className="w-6 h-6 text-white/40" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <Brain className="w-10 h-10 text-white/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Resume Builder
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Create Perfect 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                AI Resumes
              </span>
              in Minutes
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
              Transform any job description into a tailored, professional resume using advanced AI. 
              Stand out from the crowd with personalized content that gets you noticed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Start Building Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-white/60">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm">Resumes Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div className="text-sm">User Rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="AutoResume AI Dashboard"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm font-medium text-foreground">AI Generated</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg animate-float" style={{ animationDelay: '3s' }}>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">PDF Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}