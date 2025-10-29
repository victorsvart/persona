'use client';

import {
  Plus,
  Trash2,
  Calendar,
  Building2,
  GraduationCap,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Edit,
  PlusIcon,
  BookOpen,
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
  academic_info,
  AcademicInfoValues,
} from '@/types/forms/academic.schema';
import { UserAcademicInformation } from '@/prisma/generated/prisma';
import { useState } from 'react';
import { toast } from 'sonner';
import { formatDate, toISOString } from '@/lib/utils';
import {
  deleteAcademicInfo,
  saveAcademicInfo,
} from '@/app/[locale]/dashboard/academic/actions';

type Props = {
  academicFields: Array<UserAcademicInformation>;
};

export const AcademicForm: React.FC<Props> = ({ academicFields }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAcademic, setSelectedAcademic] =
    useState<UserAcademicInformation | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [academicToDelete, setAcademicToDelete] = useState<string | null>(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(academicFields.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAcademics = academicFields.slice(startIndex, endIndex);

  const form = useForm<AcademicInfoValues>({
    resolver: zodResolver(academic_info),
    defaultValues: {
      institution: '',
      major: '',
      start_date: '',
      end_date: '',
      summary: '',
    },
  });

  const handleAddAcademic = () => {
    const newAcademic: UserAcademicInformation = {
      id: '',
      institution: '',
      major: '',
      start_date: new Date(),
      end_date: new Date(),
      summary: '',
      userId: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setSelectedAcademic(newAcademic);
    setIsEditing(true);
    form.reset({
      institution: '',
      major: '',
      start_date: '',
      end_date: '',
      summary: '',
    });
  };

  const handleEditAcademic = (academic: UserAcademicInformation) => {
    setSelectedAcademic(academic);
    setIsEditing(true);
    form.reset({
      institution: academic.institution,
      major: academic.major,
      start_date:
        academic.start_date instanceof Date
          ? academic.start_date.toISOString().split('T')[0]
          : academic.start_date || '',
      end_date:
        academic.end_date instanceof Date
          ? academic.end_date.toISOString().split('T')[0]
          : academic.end_date || '',
      summary: academic.summary || '',
    });
  };

  const handleBackToCards = () => {
    setSelectedAcademic(null);
    setIsEditing(false);
    form.reset();
  };

  const confirmDeleteAcademic = async () => {
    if (!academicToDelete) return;

    setIsSubmitting(true);
    try {
      const error = await deleteAcademicInfo(academicToDelete);

      if (error) {
        toast.error(error.message || 'Failed to delete academic information');
        return;
      }

      toast.success('Academic information deleted successfully!');
      setDeleteDialogOpen(false);
      setAcademicToDelete(null);
      handleBackToCards();
    } catch (error) {
      console.error('Error deleting academic information:', error);
      toast.error('Failed to delete academic information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderAcademicCards = () => {
    if (currentAcademics.length === 0) {
      return (
        <Card className="p-12 text-center bg-muted/50">
          <div className="mx-auto w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
            <GraduationCap className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            No academic experiences yet
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start building your academic profile by adding your education
            history. This will help showcase your educational journey.
          </p>
          <Button onClick={handleAddAcademic}>
            <Plus className="h-4 w-4 mr-2" /> Add Your First Education
          </Button>
        </Card>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentAcademics.map((academic, idx) => (
          <Card
            key={academic.id || idx}
            className="p-6 cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary/20"
            onClick={() => handleEditAcademic(academic)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    {academic.institution}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {academic.major}
                  </p>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditAcademic(academic);
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
                  <span>{formatDate(academic.start_date)}</span>
                  {academic.end_date && (
                    <>
                      <span>-</span>
                      <span>{formatDate(academic.end_date)}</span>
                    </>
                  )}
                </div>
              </div>
              {academic.summary && (
                <p
                  className="text-sm text-muted-foreground overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {academic.summary}
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

  const onSubmit = async (data: AcademicInfoValues) => {
    setIsSubmitting(true);
    try {
      const result = await saveAcademicInfo(data, selectedAcademic?.id);

      if (result) {
        toast.error(result.message || 'Failed to save academic information');
        return;
      }

      toast.success('Academic information saved successfully!');
      handleBackToCards();
    } catch (error) {
      console.error('Error saving academic information:', error);
      toast.error('Failed to save academic information. Please try again.');
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
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Academic Experience</h2>
            <p className="text-muted-foreground">
              Add details about your education, degrees, and academic
              achievements.
            </p>
          </div>
        </div>
      </Card>

      {!isEditing ? (
        // Cards View
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Your Education</h3>
                {academicFields.length > 0 && (
                  <div className="text-sm text-muted-foreground">
                    {academicFields.length} education
                    {academicFields.length !== 1 ? 's' : ''}
                  </div>
                )}
              </div>
              <Button onClick={handleAddAcademic} className="flex gap-2">
                <PlusIcon />
                Add Education
              </Button>
            </div>
            {renderAcademicCards()}
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
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">
                        {selectedAcademic?.institution || 'New Education'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedAcademic?.id
                          ? 'Edit academic information'
                          : 'Add new academic information'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBackToCards}
                    >
                      Back to education
                    </Button>
                    {selectedAcademic?.id && (
                      <AlertDialog
                        open={deleteDialogOpen}
                        onOpenChange={setDeleteDialogOpen}
                      >
                        <AlertDialogTrigger asChild>
                          <Button
                            type="button"
                            size="icon"
                            variant="destructive"
                            onClick={() =>
                              setAcademicToDelete(selectedAcademic?.id || null)
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Delete Academic Information
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this academic
                              information? This action cannot be undone.
                              <br />
                              <br />
                              <strong>
                                {selectedAcademic?.institution}
                              </strong> - {selectedAcademic?.major}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel disabled={isSubmitting}>
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={confirmDeleteAcademic}
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
                              placeholder="e.g. Harvard University, MIT"
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
                      name="major"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Degree/Major *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Computer Science, B.S. Mathematics"
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
                            Leave empty if you are currently studying here
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
                        <FormLabel>Achievements & Activities</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe relevant coursework, honors, activities, GPA (if strong), and any notable achievements..."
                            className="min-h-[120px] resize-y"
                            {...field}
                            value={field.value || ''}
                          />
                        </FormControl>
                        <FormDescription>
                          Highlight your academic achievements and activities
                        </FormDescription>
                        <FormMessage />
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
                          Save this academic information to your profile.
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
                          Save Education
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
