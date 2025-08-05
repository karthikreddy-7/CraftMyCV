import { Button } from "@/components/ui/button";
import { Brain, FileText, Zap, Download, Edit3, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Content",
    description: "Advanced AI analyzes job descriptions and generates tailored resume content that matches what employers are looking for.",
    color: "text-purple-600"
  },
  {
    icon: FileText,
    title: "Professional Templates",
    description: "Choose from expertly designed templates that are ATS-friendly and optimized for different industries.",
    color: "text-blue-600"
  },
  {
    icon: Edit3,
    title: "Smart Editor",
    description: "Intuitive WYSIWYG editor with real-time collaboration features and intelligent suggestions.",
    color: "text-green-600"
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Get your professional resume ready in minutes, not hours. Our AI works at lightning speed.",
    color: "text-yellow-600"
  },
  {
    icon: Download,
    title: "Multiple Formats",
    description: "Export to PDF, Word, or share online with a custom link. Always format-perfect across devices.",
    color: "text-red-600"
  },
  {
    icon: Shield,
    title: "Privacy Secure",
    description: "Your data is encrypted and never shared. We prioritize your privacy and professional information.",
    color: "text-indigo-600"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to 
            <span className="text-gradient"> land your dream job</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of AI-powered tools helps you create, customize, and optimize your resume for any position.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card-feature group cursor-pointer">
              <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            Try All Features Free
          </Button>
          <p className="text-sm text-muted-foreground mt-3">No credit card required • 14-day free trial</p>
        </div>
      </div>
    </section>
  );
}