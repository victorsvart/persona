import { SignupForm } from "@/components/signup-form"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Create your free Persona account and start building AI-powered, ATS-optimized resumes tailored for each job application. Join thousands of job seekers landing their dream jobs.',
  openGraph: {
    title: 'Sign Up for Persona',
    description:
      'Create your free Persona account and start building AI-powered, ATS-optimized resumes tailored for each job application.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SignupPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  )
}
