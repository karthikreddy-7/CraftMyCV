import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Brain, Loader2, ArrowRight, CheckCircle } from "lucide-react";

export default function JobDescription() {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<{
    skills: string[];
    keywords: string[];
    requirements: string[];
  } | null>(null);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysisResults({
        skills: ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"],
        keywords: ["Software Engineer", "Full Stack", "Agile", "CI/CD", "REST APIs"],
        requirements: [
          "5+ years of software development experience",
          "Experience with modern JavaScript frameworks",
          "Knowledge of cloud platforms (AWS/Azure)",
          "Strong problem-solving skills",
          "Bachelor's degree in Computer Science or related field"
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleGenerateResume = () => {
    // Navigate to template selection or resume generation
    console.log("Generating resume with:", { jobDescription, analysisResults });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <FileText className="w-6 h-6 text-primary mr-3" />
              <h1 className="text-xl font-semibold">Job Description Analysis</h1>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Description Input */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Paste Job Description
                </CardTitle>
                <CardDescription>
                  Copy and paste the complete job posting. Our AI will analyze it to create a perfectly tailored resume.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the complete job description here...

Example:
We are seeking a Senior Software Engineer to join our growing team. The ideal candidate will have:

• 5+ years of experience in software development
• Proficiency in React, Node.js, and TypeScript
• Experience with cloud platforms (AWS preferred)
• Strong problem-solving and communication skills
• Bachelor's degree in Computer Science or related field

Responsibilities:
• Develop and maintain scalable web applications
• Collaborate with cross-functional teams
• Participate in code reviews and technical discussions
• Mentor junior developers

We offer competitive salary, equity, and comprehensive benefits..."
                  rows={12}
                  className="resize-none"
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    {jobDescription.length} characters
                  </p>
                  <Button
                    onClick={handleAnalyze}
                    disabled={!jobDescription.trim() || isAnalyzing}
                    variant="hero"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4 mr-2" />
                        Analyze Job Description
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Results */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">AI Analysis</CardTitle>
                <CardDescription>
                  Key insights from the job description
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!analysisResults && !isAnalyzing && (
                  <div className="text-center py-8">
                    <Brain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Paste a job description and click "Analyze" to see AI insights
                    </p>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-8">
                    <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
                    <p className="text-primary font-medium">Analyzing job requirements...</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Our AI is extracting key skills and requirements
                    </p>
                  </div>
                )}

                {analysisResults && (
                  <div className="space-y-6">
                    <div className="flex items-center text-success">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">Analysis Complete</span>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResults.skills.map((skill, index) => (
                          <Badge key={index} variant="default">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Key Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResults.keywords.map((keyword, index) => (
                          <Badge key={index} variant="secondary">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {analysisResults.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      onClick={handleGenerateResume}
                      variant="hero"
                      className="w-full"
                    >
                      Generate Tailored Resume
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}