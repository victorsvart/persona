'use server';

import { getApplicationByIdFromCache } from '../../actions';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';

export default async function CurriculumPage({
  params,
}: {
  params: { application_id: string };
}) {
  const { application_id } = await params;
  const application = await getApplicationByIdFromCache(application_id);

  if (!application) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p className="text-muted-foreground">Application not found.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col justify-between rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">
                {application.company_name}
              </CardTitle>
              <CardDescription>{application.role}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-2 text-sm">
              {application.details && (
                <p className="text-muted-foreground leading-relaxed">
                  {application.details}
                </p>
              )}

              <div className="border-t pt-2 space-y-1 text-xs text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">
                    Application ID:
                  </span>{' '}
                  {application.id}
                </p>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end">
              <Button
                variant="ghost"
                className="text-sm font-medium text-primary hover:underline"
              >
                <Link href={`/dashboard/${application_id}/info`}>Edit →</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col rounded-xl shadow-md flex-1">
            <CardHeader>
              <CardTitle className="text-lg">Chat</CardTitle>
              <CardDescription>
                Add details about your application
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-60 md:h-80 p-4">
                <div className="space-y-3 text-sm">
                  <div className="flex flex-col items-start">
                    <div className="bg-muted px-3 py-2 rounded-xl">
                      Hey! Want me to refine your resumé?
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="bg-primary text-primary-foreground px-3 py-2 rounded-xl">
                      Add about my experience at Nvidia
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="bg-muted px-3 py-2 rounded-xl">...</div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>

            <CardFooter className="flex items-center gap-2">
              <Input placeholder="Type a message..." className="flex-1" />
              <Button size="sm">Send</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex items-center justify-center bg-muted/30 rounded-xl min-h-[100vh] p-4">
          <div className="bg-white text-black shadow-xl rounded-md w-full max-w-[794px] aspect-[1/1.4142] overflow-y-auto p-10 print:shadow-none">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-700 mb-4">Software Engineer</p>

            <section>
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">
                Experience
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-sm leading-relaxed">
                <li>
                  <strong>Frontend Developer</strong> — TechCorp (2021–2024)
                  <p>
                    Built modern UIs with React and optimized performance across
                    multi-tenant systems.
                  </p>
                </li>
                <li>
                  <strong>Intern</strong> — OpenAI (2020–2021)
                  <p>
                    Assisted in the development of internal tooling for model
                    evaluation workflows.
                  </p>
                </li>
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">
                Education
              </h2>
              <p className="text-sm leading-relaxed">
                <strong>MIT</strong> — B.Sc. in Computer Science (2016–2020)
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">
                Skills
              </h2>
              <p className="text-sm leading-relaxed">
                React, Node.js, TypeScript, Go, PostgreSQL, Docker, AWS
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-lg font-semibold border-b pb-1 mb-2">
                Projects
              </h2>
              <ul className="list-disc pl-6 text-sm leading-relaxed">
                <li>
                  <strong>Realtime Chat App:</strong> Encrypted multi-threaded
                  chat system built with Python.
                </li>
                <li>
                  <strong>GHG Report Generator:</strong> Dynamic PDF reporting
                  tool for emissions data (Brazil’s GHG Protocol).
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
