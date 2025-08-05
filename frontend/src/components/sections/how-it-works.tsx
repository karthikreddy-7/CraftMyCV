import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, FileText, Brain, Download } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Your Profile",
    description: "Add your personal information, work experience, skills, and education in our smart form."
  },
  {
    icon: FileText,
    number: "02", 
    title: "Paste Job Description",
    description: "Copy and paste the job posting you're applying for. Our AI will analyze the requirements."
  },
  {
    icon: Brain,
    number: "03",
    title: "AI Generates Resume",
    description: "Our advanced AI creates tailored content that perfectly matches the job requirements."
  },
  {
    icon: Download,
    number: "04",
    title: "Download & Apply",
    description: "Review, edit if needed, and download your professional resume as a PDF file."
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How AutoResume AI
            <span className="text-gradient"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create professional, tailored resumes in just 4 simple steps. Our AI does the heavy lifting while you focus on landing your dream job.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10">
                    {step.number}
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            Start Building Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <p className="text-sm text-muted-foreground mt-3">Get your first resume free</p>
        </div>
      </div>
    </section>
  );
}