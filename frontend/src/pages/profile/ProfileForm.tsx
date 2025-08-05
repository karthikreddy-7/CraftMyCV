import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2, Save, User, Briefcase, GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
  gpa?: string;
}

interface ProfileFormData {
  // Personal Info
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  summary: string;
  
  // Work Experience
  workExperience: WorkExperience[];
  
  // Education
  education: Education[];
  
  // Skills
  skills: string[];
}

const defaultValues: ProfileFormData = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  website: "",
  summary: "",
  workExperience: [{
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    current: false,
    description: ""
  }],
  education: [{
    institution: "",
    degree: "",
    field: "",
    graduationDate: "",
    gpa: ""
  }],
  skills: []
};

export default function ProfileForm() {
  const [skillInput, setSkillInput] = useState("");
  const { register, control, handleSubmit, setValue, watch, formState: { errors } } = useForm<ProfileFormData>({
    defaultValues
  });

  const { fields: workFields, append: appendWork, remove: removeWork } = useFieldArray({
    control,
    name: "workExperience"
  });

  const { fields: educationFields, append: appendEducation, remove: removeEducation } = useFieldArray({
    control,
    name: "education"
  });

  const skills = watch("skills");

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setValue("skills", [...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setValue("skills", skills.filter(s => s !== skill));
  };

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile data:", data);
    // Save to backend/localStorage
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <User className="w-6 h-6 text-primary mr-3" />
              <h1 className="text-xl font-semibold">Complete Your Profile</h1>
            </div>
            <Button variant="outline" onClick={() => window.history.back()}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Your basic contact information and professional summary
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    {...register("fullName", { required: "Full name is required" })}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    {...register("phone")}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    {...register("location")}
                    placeholder="San Francisco, CA"
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    {...register("linkedin")}
                    placeholder="linkedin.com/in/johndoe"
                  />
                </div>
                <div>
                  <Label htmlFor="website">Website/Portfolio</Label>
                  <Input
                    id="website"
                    {...register("website")}
                    placeholder="johndoe.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea
                  id="summary"
                  {...register("summary")}
                  placeholder="Brief summary of your professional background and key achievements..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Work Experience
              </CardTitle>
              <CardDescription>
                Add your professional work history
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {workFields.map((field, index) => (
                <div key={field.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Position {index + 1}</h4>
                    {workFields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeWork(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Company *</Label>
                      <Input
                        {...register(`workExperience.${index}.company`, { required: true })}
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <Label>Position *</Label>
                      <Input
                        {...register(`workExperience.${index}.position`, { required: true })}
                        placeholder="Job Title"
                      />
                    </div>
                    <div>
                      <Label>Start Date</Label>
                      <Input
                        type="month"
                        {...register(`workExperience.${index}.startDate`)}
                      />
                    </div>
                    <div>
                      <Label>End Date</Label>
                      <Input
                        type="month"
                        {...register(`workExperience.${index}.endDate`)}
                        disabled={watch(`workExperience.${index}.current`)}
                      />
                      <div className="flex items-center mt-2">
                        <input
                          type="checkbox"
                          {...register(`workExperience.${index}.current`)}
                          className="mr-2"
                        />
                        <Label className="text-sm">Currently working here</Label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Label>Description</Label>
                    <Textarea
                      {...register(`workExperience.${index}.description`)}
                      placeholder="Describe your responsibilities and achievements..."
                      rows={3}
                    />
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendWork({
                  company: "",
                  position: "",
                  startDate: "",
                  endDate: "",
                  current: false,
                  description: ""
                })}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Work Experience
              </Button>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                Education
              </CardTitle>
              <CardDescription>
                Add your educational background
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {educationFields.map((field, index) => (
                <div key={field.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Education {index + 1}</h4>
                    {educationFields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeEducation(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Institution *</Label>
                      <Input
                        {...register(`education.${index}.institution`, { required: true })}
                        placeholder="University Name"
                      />
                    </div>
                    <div>
                      <Label>Degree *</Label>
                      <Input
                        {...register(`education.${index}.degree`, { required: true })}
                        placeholder="Bachelor's, Master's, etc."
                      />
                    </div>
                    <div>
                      <Label>Field of Study</Label>
                      <Input
                        {...register(`education.${index}.field`)}
                        placeholder="Computer Science, Business, etc."
                      />
                    </div>
                    <div>
                      <Label>Graduation Date</Label>
                      <Input
                        type="month"
                        {...register(`education.${index}.graduationDate`)}
                      />
                    </div>
                    <div>
                      <Label>GPA (Optional)</Label>
                      <Input
                        {...register(`education.${index}.gpa`)}
                        placeholder="3.8/4.0"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendEducation({
                  institution: "",
                  degree: "",
                  field: "",
                  graduationDate: "",
                  gpa: ""
                })}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Education
              </Button>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Skills
              </CardTitle>
              <CardDescription>
                Add your technical and professional skills
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="Add a skill..."
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                />
                <Button type="button" onClick={addSkill}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {skill}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => removeSkill(skill)}
                    >
                      ×
                    </Button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-end">
            <Button type="submit" variant="hero" size="lg">
              <Save className="w-4 h-4 mr-2" />
              Save Profile
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}