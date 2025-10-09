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
import { ApplicationResume } from '@/components/application-resume';

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

  const htmlTest =
    '<!DOCTYPE html> <html> <head> <meta charset="UTF-8" /> <title>Victor Moraes - Frontend Developer Resume</title> </head> <body> <section> <h2>Contact Information</h2> <p> Victor Moraes<br> São Paulo, Brazil<br> Phone: +55 11 91234-5678<br> Email: victor.moraes@email.com </p> </section> <section> <h2>Professional Summary</h2> <p>Experienced Frontend Developer specialized in creating responsive and user-centric web interfaces. Adept at utilizing modern frameworks and technologies to improve user experience and streamline frontend development processes. Passionate about clean code, performance optimization, and collaborative team environments.</p> </section> <section> <h2>Work Experience</h2> <h3>Frontend Developer, Innovatech Solutions</h3> <p>June 2019 – Present</p> <ul> <li>Developed and maintained dynamic, mobile-friendly websites using React.js, HTML5, and CSS3, improving site performance and user engagement.</li> <li>Collaborated with backend engineers and designers to create seamless UI/UX designs.</li> <li>Implemented component-based architecture, reducing code redundancy and easing maintenance.</li> </ul> <h3>Junior Frontend Developer, Web Creators</h3> <p>January 2017 – May 2019</p> <ul> <li>Participated in the development of client websites with a focus on responsive design and accessibility.</li> <li>Optimized site loading times and improved browser compatibility across devices.</li> </ul> </section> <section> <h2>Education</h2> <p>B.Sc. in Computer Science<br>University of São Paulo, 2016</p> </section> <section> <h2>Skills</h2> <ul> <li>HTML5, CSS3, JavaScript</li> <li>React.js, Vue.js</li> <li>Responsive Design & Mobile First</li> <li>Git & Version Control</li> <li>CSS Preprocessors (SASS, LESS)</li> </ul> </section> <section> <h2>Certifications</h2> <ul> <li>Certified Front-End Developer – freeCodeCamp</li> <li>JavaScript Algorithms and Data Structures – Coursera</li> </ul> </section> </body> </html>';

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
              {application.job_description && (
                <p className="text-muted-foreground leading-relaxed">
                  {application.job_description}
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
        <ApplicationResume resumeHTML={htmlTest} />
      </div>
    </div>
  );
}
