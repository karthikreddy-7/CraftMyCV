import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Save, 
  Download, 
  Eye, 
  Edit3, 
  FileText, 
  Loader2,
  RefreshCw,
  Share2
} from "lucide-react";

interface ResumeSection {
  id: string;
  title: string;
  content: string;
  editable: boolean;
}

const initialSections: ResumeSection[] = [
  {
    id: "header",
    title: "Header",
    content: "John Doe\nSoftware Engineer\nSan Francisco, CA | john@example.com | (555) 123-4567\nlinkedin.com/in/johndoe | github.com/johndoe",
    editable: true
  },
  {
    id: "summary",
    title: "Professional Summary",
    content: "Experienced Software Engineer with 5+ years of expertise in developing scalable web applications using React, Node.js, and cloud technologies. Proven track record of leading cross-functional teams and delivering high-quality software solutions that drive business growth. Passionate about clean code, agile methodologies, and continuous learning.",
    editable: true
  },
  {
    id: "experience",
    title: "Work Experience",
    content: "Senior Software Engineer | Tech Corp | 2021 - Present\n• Led development of microservices architecture serving 1M+ users\n• Improved application performance by 40% through code optimization\n• Mentored 3 junior developers and conducted technical interviews\n• Collaborated with product team to define technical requirements\n\nSoftware Engineer | StartupXYZ | 2019 - 2021\n• Developed full-stack web applications using React and Node.js\n• Implemented CI/CD pipelines reducing deployment time by 60%\n• Built REST APIs handling 10k+ requests per minute\n• Participated in agile development processes and sprint planning",
    editable: true
  },
  {
    id: "skills",
    title: "Technical Skills",
    content: "Programming Languages: JavaScript, TypeScript, Python, Java\nFrameworks & Libraries: React, Node.js, Express, Redux, Next.js\nDatabases: PostgreSQL, MongoDB, Redis\nCloud & DevOps: AWS, Docker, Kubernetes, Jenkins\nTools: Git, Jira, Slack, VS Code",
    editable: true
  },
  {
    id: "education",
    title: "Education",
    content: "Bachelor of Science in Computer Science | State University | 2019\nGPA: 3.8/4.0\nRelevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems",
    editable: true
  }
];

export default function ResumeEditor() {
  const [sections, setSections] = useState<ResumeSection[]>(initialSections);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const updateSection = (id: string, newContent: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, content: newContent } : section
    ));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate save
    setTimeout(() => {
      setIsSaving(false);
    }, 1000);
  };

  const handleDownload = () => {
    // Generate PDF download
    console.log("Downloading resume...");
  };

  const handleRegenerate = async () => {
    setIsGenerating(true);
    // Simulate AI regeneration
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Edit3 className="w-6 h-6 text-primary mr-3" />
              <h1 className="text-xl font-semibold">Resume Editor</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRegenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                Regenerate with AI
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button variant="hero" size="sm" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Editor Panel */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {sections.map((section) => (
                    <div key={section.id} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground">
                          {section.title}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingSection(
                            editingSection === section.id ? null : section.id
                          )}
                        >
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      {editingSection === section.id ? (
                        <div className="space-y-3">
                          <Textarea
                            value={section.content}
                            onChange={(e) => updateSection(section.id, e.target.value)}
                            rows={section.id === 'header' ? 4 : 8}
                            className="resize-none"
                          />
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              onClick={() => setEditingSection(null)}
                            >
                              Done
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingSection(null)}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-line text-sm">
                          {section.content}
                        </div>
                      )}
                      
                      {section.id !== sections[sections.length - 1].id && (
                        <Separator className="my-6" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Live Preview</h3>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  
                  {/* Resume Preview */}
                  <div className="bg-white border rounded-lg p-6 shadow-sm" style={{ minHeight: '800px' }}>
                    {sections.map((section) => (
                      <div key={section.id} className="mb-6">
                        {section.id === 'header' ? (
                          <div className="text-center border-b pb-4 mb-6">
                            <div className="whitespace-pre-line text-sm">
                              {section.content.split('\n').map((line, index) => (
                                <div key={index} className={
                                  index === 0 ? 'text-xl font-bold mb-1' :
                                  index === 1 ? 'text-lg text-primary mb-2' :
                                  'text-xs text-gray-600'
                                }>
                                  {line}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <>
                            <h4 className="text-sm font-bold text-primary mb-2 uppercase tracking-wide border-b border-gray-200 pb-1">
                              {section.title}
                            </h4>
                            <div className="whitespace-pre-line text-xs leading-relaxed">
                              {section.content}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Button variant="hero" className="w-full" onClick={handleDownload}>
                      <Download className="w-4 h-4 mr-2" />
                      Download as PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}