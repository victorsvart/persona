'use client';

import {
  Plus,
  Trash2,
  Calendar,
  Building2,
  Briefcase,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Edit,
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  professional_experiences,
  ProfessionalExperienceValues,
} from '@/types/forms/work-experience.schema';
import { UserProfessionalExperience } from '@/prisma/generated/prisma';
import { useState } from 'react';
import { toast } from 'sonner';
import { Badge } from './ui/badge';
import { saveWorkExperience, deleteWorkExperience } from '@/app/dashboard/work-experience/actions';

type Props = {
  experienceFields: Array<UserProfessionalExperience>;
};

export const WorkExperienceForm: React.FC<Props> = ({ 
  experienceFields
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedExperience, setSelectedExperience] =
    useState<UserProfessionalExperience | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [experienceToDelete, setExperienceToDelete] = useState<string | null>(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(experienceFields.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExperiences = experienceFields.slice(startIndex, endIndex);

  const form = useForm<ProfessionalExperienceValues>({
    resolver: zodResolver(professional_experiences),
    defaultValues: {
      institution: '',
      role: '',
      start_date: '',
      end_date: '',
      summary: '',
      at_university: false,
    },
  });

  const handleAddExperience = () => {
    const newExperience: UserProfessionalExperience = {
      id: '',
      institution: '',
      role: '',
      start_date: new Date(),
      end_date: new Date(),
      summary: '',
      at_university: false,
      userId: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      version: 1,
    };
    setSelectedExperience(newExperience);
    setIsEditing(true);
    form.reset({
      institution: '',
      role: '',
      start_date: '',
      end_date: '',
      summary: '',
      at_university: false,
    });
  };

  const handleEditExperience = (experience: UserProfessionalExperience) => {
    setSelectedExperience(experience);
    setIsEditing(true);
    form.reset({
      institution: experience.institution,
      role: experience.role,
      start_date:
        experience.start_date instanceof Date
          ? experience.start_date.toISOString().split('T')[0]
          : experience.start_date || '',
      end_date:
        experience.end_date instanceof Date
          ? experience.end_date.toISOString().split('T')[0]
          : experience.end_date || '',
      summary: experience.summary || '',
      at_university: experience.at_university,
    });
  };

  const handleBackToCards = () => {
    setSelectedExperience(null);
    setIsEditing(false);
    form.reset();
  };

  const handleRemoveExperience = (experienceId: string) => {
    setExperienceToDelete(experienceId);
    setDeleteDialogOpen(true);
  };

  const confirmDeleteExperience = async () => {
    if (!experienceToDelete) return;

    setIsSubmitting(true);
    try {
      const result = await deleteWorkExperience(experienceToDelete);
      
      if (result) {
        toast.error(result.message || 'Failed to delete work experience');
        return;
      }

      toast.success('Work experience deleted successfully!');
      setDeleteDialogOpen(false);
      setExperienceToDelete(null);
      handleBackToCards();
    } catch (error) {
      console.error('Error deleting work experience:', error);
      toast.error('Failed to delete work experience. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (date: Date | string | null) => {
    if (!date) return '';
    if (date instanceof Date) {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });
    }
    if (typeof date === 'string') {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
      });
    }
    return '';
  };

  const renderExperienceCards = () => {
    if (currentExperiences.length === 0) {
      return (
        <Card className="p-12 text-center bg-muted/50">
          <div className="mx-auto w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
            <Briefcase className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            No work experiences yet
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start building your professional profile by adding your work
            experiences. This will help showcase your career journey.
          </p>
          <Button onClick={handleAddExperience}>
            <Plus className="h-4 w-4 mr-2" /> Add Your First Experience
          </Button>
        </Card>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentExperiences.map((experience, idx) => (
          <Card
            key={experience.id || idx}
            className="p-6 cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary/20"
            onClick={() => handleEditExperience(experience)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">
                      {experience.institution}
                    </h3>
                    <Badge
                      variant={
                        experience.at_university ? 'secondary' : 'default'
                      }
                    >
                      {experience.at_university ? 'Academic' : 'Work'}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {experience.role}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditExperience(experience);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(experience.start_date)}</span>
                  {experience.end_date && (
                    <>
                      <span>-</span>
                      <span>{formatDate(experience.end_date)}</span>
                    </>
                  )}
                </div>
              </div>
              {experience.summary && (
                <p
                  className="text-sm text-muted-foreground overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {experience.summary}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="flex items-center justify-center gap-2 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className="w-8 h-8 p-0"
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  const onSubmit = async (data: ProfessionalExperienceValues) => {
    setIsSubmitting(true);
    try {
      const result = await saveWorkExperience(data, selectedExperience?.id);
      
      if (result) {
        toast.error(result.message || 'Failed to save work experience');
        return;
      }

      toast.success('Work experience saved successfully!');
      handleBackToCards();
    } catch (error) {
      console.error('Error saving work experience:', error);
      toast.error('Failed to save work experience. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="p-6 bg-muted/50">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-primary/10">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <p className="text-muted-foreground">
              Add details about your previous roles and professional
              experiences.
            </p>
          </div>
        </div>
      </Card>

      {!isEditing ? (
        // Cards View
        <div className="space-y-6">
          {/* Add Experience Card */}
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Plus className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Add New Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Click to add a new work experience entry
                  </p>
                </div>
              </div>
              <Button type="button" onClick={handleAddExperience}>
                <Plus className="h-4 w-4 mr-2" /> Add Experience
              </Button>
            </div>
          </Card>

          {/* Experience Cards */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Your Experiences</h3>
              {experienceFields.length > 0 && (
                <div className="text-sm text-muted-foreground">
                  {experienceFields.length} experience
                  {experienceFields.length !== 1 ? 's' : ''}
                </div>
              )}
            </div>
            {renderExperienceCards()}
            {renderPagination()}
          </Card>
        </div>
      ) : (
        // Form View
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Card className="p-8">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">
                        {selectedExperience?.institution || 'New Experience'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedExperience?.id
                          ? 'Edit work experience'
                          : 'Add new work experience'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBackToCards}
                    >
                      Back to experiences
                    </Button>
                    {selectedExperience?.id && (
                      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                        <AlertDialogTrigger asChild>
                          <Button
                            type="button"
                            size="icon"
                            variant="destructive"
                            onClick={() => setExperienceToDelete(selectedExperience?.id || null)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Delete Work Experience</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this work experience? This action cannot be undone.
                              <br />
                              <br />
                              <strong>{selectedExperience?.institution}</strong> - {selectedExperience?.role}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel disabled={isSubmitting}>
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={confirmDeleteExperience}
                              disabled={isSubmitting}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              {isSubmitting ? 'Deleting...' : 'Delete'}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    )}
                  </div>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4 bg-muted/50">
                    <FormField
                      control={form.control}
                      name="institution"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            Institution *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Google, Microsoft, University"
                              {...field}
                              value={field.value || ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </Card>

                  <Card className="p-4 bg-muted/50">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4" />
                            Role *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Software Engineer, Intern, Research Assistant"
                              {...field}
                              value={field.value || ''}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </Card>
                </div>

                {/* Date Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-4 bg-muted/50">
                    <FormField
                      control={form.control}
                      name="start_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Start Date *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              {...field}
                              value={
                                field.value
                                  ? typeof field.value === 'string'
                                    ? field.value
                                    : field.value instanceof Date
                                      ? field.value.toISOString().split('T')[0]
                                      : ''
                                  : ''
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </Card>

                  <Card className="p-4 bg-muted/50">
                    <FormField
                      control={form.control}
                      name="end_date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            End Date
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              {...field}
                              value={
                                field.value
                                  ? typeof field.value === 'string'
                                    ? field.value
                                    : field.value instanceof Date
                                      ? field.value.toISOString().split('T')[0]
                                      : ''
                                  : ''
                              }
                            />
                          </FormControl>
                          <FormDescription>
                            Leave empty if this is your current position
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </Card>
                </div>

                {/* Summary */}
                <Card className="p-4 bg-muted/50">
                  <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Summary</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your key responsibilities, achievements, and skills gained in this role..."
                            className="min-h-[120px] resize-y"
                            {...field}
                            value={field.value || ''}
                          />
                        </FormControl>
                        <FormDescription>
                          Highlight your key achievements and responsibilities
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </Card>

                {/* University Checkbox */}
                <Card className="p-4 bg-muted/50">
                  <FormField
                    control={form.control}
                    name="at_university"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value || false}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            This was at a university or school
                          </FormLabel>
                          <FormDescription>
                            Check if this experience was part of your academic
                            journey
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </Card>

                {/* Save Button */}
                <Card className="p-6 bg-muted/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Ready to Save?</h3>
                        <p className="text-sm text-muted-foreground">
                          Save this work experience to your profile.
                        </p>
                      </div>
                    </div>
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                          Saving...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Save Experience
                        </div>
                      )}
                    </Button>
                  </div>
                </Card>
              </div>
            </Card>
          </form>
        </Form>
      )}
    </div>
  );
};
