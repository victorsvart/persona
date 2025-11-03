'use client';

import * as React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { IconFileText } from '@tabler/icons-react';

interface HtmlPreviewProps {
  html: string | null;
}

export function HtmlPreview({ html }: HtmlPreviewProps) {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);

  React.useEffect(() => {
    if (!iframeRef.current || !html) return;

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

    if (!iframeDoc) return;

    // Create a complete HTML document with default styling for the resume
    const fullHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1a1a1a;
      background: white;
      padding: 2rem;
      max-width: 850px;
      margin: 0 auto;
    }
    
    header {
      border-bottom: 2px solid #2563eb;
      padding-bottom: 1rem;
      margin-bottom: 1.5rem;
    }
    
    header h1 {
      font-size: 2rem;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 0.5rem;
    }
    
    header p {
      color: #4b5563;
      font-size: 0.95rem;
    }
    
    section {
      margin-bottom: 1.5rem;
    }
    
    section h2 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #2563eb;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 0.25rem;
    }
    
    article {
      margin-bottom: 1.25rem;
    }
    
    article h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 0.25rem;
    }
    
    article > p {
      color: #4b5563;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    
    ul {
      list-style-position: outside;
      margin-left: 1.25rem;
      margin-top: 0.5rem;
    }
    
    li {
      margin-bottom: 0.25rem;
      color: #374151;
      font-size: 0.95rem;
    }
    
    section > p {
      color: #374151;
      font-size: 0.95rem;
      line-height: 1.6;
    }
    
    /* Print styles */
    @media print {
      body {
        padding: 0;
        max-width: 100%;
      }
      
      section {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
${html}
</body>
</html>`;

    iframeDoc.open();
    iframeDoc.write(fullHtml);
    iframeDoc.close();
  }, [html]);

  if (!html) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <IconFileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <h3 className="text-lg font-semibold">No Resume Generated Yet</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Start chatting to generate your tailored resume
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-50 border-l">
      <iframe
        ref={iframeRef}
        title="Resume Preview"
        className="w-full h-full border-0"
        sandbox="allow-same-origin"
      />
    </div>
  );
}

