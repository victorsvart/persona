import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  WebApplicationStructuredData,
  OrganizationStructuredData,
} from '@/components/structured-data';
import { Sparkles, CheckCircle, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  return (
    <>
      <WebApplicationStructuredData />
      <OrganizationStructuredData />

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Persona</h1>
            <nav className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1">
          <section className="container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                AI-Powered Resume Builder
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Transform Your Job Search with{' '}
                <span className="text-primary">AI-Powered Resumes</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create targeted, ATS-optimized resumes for each job application.
                Track applications, manage your professional profile, and land
                your dream job faster.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Link href="/signup">
                  <Button size="lg" className="text-lg px-8">
                    Start Building Free
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-muted/50 py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Everything You Need to Land Your Dream Job
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-background p-6 rounded-lg border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    AI-Powered Generation
                  </h3>
                  <p className="text-muted-foreground">
                    Generate tailored resumes instantly using advanced AI.
                    Customize content for each job application automatically.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">ATS Optimized</h3>
                  <p className="text-muted-foreground">
                    Ensure your resume passes Applicant Tracking Systems with
                    our optimized formatting and keyword suggestions.
                  </p>
                </div>

                <div className="bg-background p-6 rounded-lg border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Application Tracking
                  </h3>
                  <p className="text-muted-foreground">
                    Keep track of all your job applications, deadlines, and
                    follow-ups in one organized dashboard.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center space-y-6 bg-primary/5 border border-primary/20 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Transform Your Job Search?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join thousands of job seekers who are landing their dream jobs
                  with Persona. Start creating your professional profile today.
                </p>
                <Link href="/signup">
                  <Button size="lg" className="text-lg px-8">
                    Get Started for Free
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Persona. All rights reserved.
              </p>
              <nav className="flex gap-6">
                <Link
                  href="/login"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Sign Up
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
