import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, FileText, Star } from "lucide-react";

const templates = [
  {
    id: "modern",
    name: "Modern Professional",
    description: "Clean, minimalist design perfect for tech and creative roles",
    features: ["ATS Optimized", "Modern Layout", "Skills Highlighting"],
    popular: true,
    preview: "bg-gradient-to-br from-blue-50 to-blue-100"
  },
  {
    id: "classic",
    name: "Classic Executive",
    description: "Traditional format ideal for corporate and executive positions",
    features: ["Professional", "Traditional", "Executive Style"],
    popular: false,
    preview: "bg-gradient-to-br from-gray-50 to-gray-100"
  },
  {
    id: "creative",
    name: "Creative Designer",
    description: "Bold and creative design for designers and creative professionals",
    features: ["Eye-catching", "Creative Layout", "Portfolio Focus"],
    popular: false,
    preview: "bg-gradient-to-br from-purple-50 to-pink-100"
  }
];

export default function TemplateSelection() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedTemplate) {
      // Navigate to resume editor with selected template
      console.log("Selected template:", selectedTemplate);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FileText className="w-6 h-6 text-primary mr-3" />
              <h1 className="text-xl font-semibold">Choose Your Template</h1>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Select Your Resume Template
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a professionally designed template that matches your industry and personal style. 
            All templates are ATS-friendly and optimized for modern hiring practices.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template) => (
            <Card 
              key={template.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                selectedTemplate === template.id 
                  ? 'ring-2 ring-primary shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedTemplate(template.id)}
            >
              <CardContent className="p-6">
                {/* Preview */}
                <div className={`w-full h-48 rounded-lg mb-4 ${template.preview} flex items-center justify-center relative overflow-hidden`}>
                  {template.popular && (
                    <Badge className="absolute top-3 right-3 bg-orange-500">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                  <div className="w-20 h-20 bg-white/80 rounded-lg flex items-center justify-center">
                    <FileText className="w-10 h-10 text-gray-600" />
                  </div>
                  
                  {/* Mock resume content */}
                  <div className="absolute inset-4 bg-white/60 backdrop-blur-sm rounded border border-white/40 p-3">
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-400/40 rounded w-3/4"></div>
                      <div className="h-1 bg-gray-300/40 rounded w-1/2"></div>
                      <div className="space-y-1 mt-3">
                        <div className="h-1 bg-gray-300/40 rounded w-full"></div>
                        <div className="h-1 bg-gray-300/40 rounded w-4/5"></div>
                        <div className="h-1 bg-gray-300/40 rounded w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Template Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {template.name}
                    </h3>
                    {selectedTemplate === template.id && (
                      <CheckCircle className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {template.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {template.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
          <Button
            variant="hero"
            size="lg"
            disabled={!selectedTemplate}
            onClick={handleContinue}
          >
            Continue with Template
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Template Features */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            All Templates Include
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">ATS Optimized</h4>
              <p className="text-sm text-muted-foreground">
                Designed to pass Applicant Tracking Systems
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Professional Layout</h4>
              <p className="text-sm text-muted-foreground">
                Clean, organized sections for easy reading
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium mb-2">Fully Customizable</h4>
              <p className="text-sm text-muted-foreground">
                Edit colors, fonts, and layout to match your style
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}