'use client';

import {
  Plus,
  Trash2,
  Calendar,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Edit,
  PlusIcon,
  FolderGit2,
  FileText,
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
  personal_projects_schema,
  PersonalProjectsValues,
} from '@/types/forms/personal-projects.schema';
import { UserPersonalProjects } from '@/prisma/generated/prisma';
import { useState } from 'react';
import { toast } from 'sonner';
import {
  deletePersonalProject,
  savePersonalProject,
} from '@/app/[locale]/dashboard/personal-projects/actions';

type Props = {
  personalProjects: Array<UserPersonalProjects>;
};

export const PersonalProjectsForm: React.FC<Props> = ({
  personalProjects,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<UserPersonalProjects | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(personalProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = personalProjects.slice(startIndex, endIndex);

  const form = useForm<PersonalProjectsValues>({
    resolver: zodResolver(personal_projects_schema),
    defaultValues: {
      name: '',
      year_worked_on: new Date().getFullYear(),
      description: '',
    },
  });

  const handleAddProject = () => {
    const newProject: UserPersonalProjects = {
      id: '',
      name: '',
      year_worked_on: new Date().getFullYear(),
      description: '',
      userId: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setSelectedProject(newProject);
    setIsEditing(true);
    form.reset({
      name: '',
      year_worked_on: new Date().getFullYear(),
      description: '',
    });
  };

  const handleEditProject = (project: UserPersonalProjects) => {
    setSelectedProject(project);
    setIsEditing(true);
    form.reset({
      name: project.name,
      year_worked_on: project.year_worked_on,
      description: project.description,
    });
  };

  const handleBackToCards = () => {
    setSelectedProject(null);
    setIsEditing(false);
    form.reset();
  };

  const confirmDeleteProject = async () => {
    if (!projectToDelete) return;

    setIsSubmitting(true);
    try {
      const error = await deletePersonalProject(projectToDelete);

      if (error) {
        toast.error(error.message || 'Failed to delete personal project');
        return;
      }

      toast.success('Personal project deleted successfully!');
      setDeleteDialogOpen(false);
      setProjectToDelete(null);
      handleBackToCards();
    } catch (error) {
      console.error('Error deleting personal project:', error);
      toast.error('Failed to delete personal project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderProjectCards = () => {
    if (currentProjects.length === 0) {
      return (
        <Card className="p-12 text-center bg-muted/50">
          <div className="mx-auto w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
            <FolderGit2 className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            No personal projects yet
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Start building your project portfolio by adding your personal
            projects. This will help showcase your initiative and skills.
          </p>
          <Button onClick={handleAddProject}>
            <Plus className="h-4 w-4 mr-2" /> Add Your First Project
          </Button>
        </Card>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentProjects.map((project, idx) => (
          <Card
            key={project.id || idx}
            className="p-6 cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-primary/20"
            onClick={() => handleEditProject(project)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{project.year_worked_on}</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditProject(project);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.description && (
                <p
                  className="text-sm text-muted-foreground overflow-hidden"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {project.description}
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

  const onSubmit = async (data: PersonalProjectsValues) => {
    setIsSubmitting(true);
    try {
      const result = await savePersonalProject(data, selectedProject?.id);

      if (result) {
        toast.error(result.message || 'Failed to save personal project');
        return;
      }

      toast.success('Personal project saved successfully!');
      handleBackToCards();
    } catch (error) {
      console.error('Error saving personal project:', error);
      toast.error('Failed to save personal project. Please try again.');
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
            <FolderGit2 className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Personal Projects</h2>
            <p className="text-muted-foreground">
              Add details about your personal projects, side hustles, and
              independent work.
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
                <h3 className="text-lg font-semibold">Your Projects</h3>
                {personalProjects.length > 0 && (
                  <div className="text-sm text-muted-foreground">
                    {personalProjects.length} project
                    {personalProjects.length !== 1 ? 's' : ''}
                  </div>
                )}
              </div>
              <Button onClick={handleAddProject} className="flex gap-2">
                <PlusIcon />
                Add Project
              </Button>
            </div>
            {renderProjectCards()}
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
                      <FolderGit2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">
                        {selectedProject?.name || 'New Project'}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedProject?.id
                          ? 'Edit project information'
                          : 'Add new project information'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBackToCards}
                    >
                      Back to projects
                    </Button>
                    {selectedProject?.id && (
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
                              setProjectToDelete(selectedProject?.id || null)
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Delete Personal Project
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this project? This
                              action cannot be undone.
                              <br />
                              <br />
                              <strong>{selectedProject?.name}</strong> (
                              {selectedProject?.year_worked_on})
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel disabled={isSubmitting}>
                              Cancel
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={confirmDeleteProject}
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
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Project Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. E-commerce Platform, Mobile App"
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
                      name="year_worked_on"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Year Worked On *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder={`e.g. ${new Date().getFullYear()}`}
                              {...field}
                              value={field.value || ''}
                              onChange={(e) =>
                                field.onChange(parseInt(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </Card>
                </div>

                {/* Description */}
                <Card className="p-4 bg-muted/50">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe what you built, technologies used, challenges overcome, and impact. Include metrics if available..."
                            className="min-h-[150px] resize-y"
                            {...field}
                            value={field.value || ''}
                          />
                        </FormControl>
                        <FormDescription>
                          Provide a detailed description of your project,
                          including technologies, features, and outcomes
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
                          Save this project to your profile.
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
                          Save Project
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

