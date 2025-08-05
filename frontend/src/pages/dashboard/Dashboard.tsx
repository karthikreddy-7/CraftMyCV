import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  FileText, 
  Edit3, 
  Download, 
  Trash2, 
  Eye,
  Calendar,
  TrendingUp,
  User,
  Settings
} from "lucide-react";

const recentResumes = [
  {
    id: 1,
    title: "Software Engineer - Google",
    template: "Modern",
    createdAt: "2024-01-15",
    status: "completed",
    downloads: 5
  },
  {
    id: 2,
    title: "Product Manager - Apple",
    template: "Professional",
    createdAt: "2024-01-12",
    status: "draft",
    downloads: 0
  },
  {
    id: 3,
    title: "Data Scientist - Microsoft",
    template: "Creative",
    createdAt: "2024-01-10",
    status: "completed",
    downloads: 3
  }
];

const stats = [
  { label: "Total Resumes", value: "12", icon: FileText, color: "text-blue-600" },
  { label: "This Month", value: "3", icon: Calendar, color: "text-green-600" },
  { label: "Downloads", value: "45", icon: Download, color: "text-purple-600" },
  { label: "Success Rate", value: "89%", icon: TrendingUp, color: "text-orange-600" }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-gradient">AutoResume AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Ready to create your next winning resume?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="flex items-center p-6">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mr-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Start building your next resume</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="hero" className="w-full justify-start" asChild>
                  <a href="/job-description">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Resume
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/templates">
                    <FileText className="w-4 h-4 mr-2" />
                    Browse Templates
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="/profile">
                    <User className="w-4 h-4 mr-2" />
                    Update Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Resumes */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Resumes</CardTitle>
                  <CardDescription>Your latest resume projects</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentResumes.map((resume) => (
                    <div key={resume.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{resume.title}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant={resume.status === 'completed' ? 'default' : 'secondary'}>
                              {resume.status}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {resume.template} • {resume.downloads} downloads
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}