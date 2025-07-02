import React, { useState } from 'react';
import { Button } from './button';
import { Card } from './card';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';

interface CodePreviewProps {
  code: string;
  preview: React.ReactNode | (() => React.ReactNode);
}

export function CodePreview({ code, preview }: CodePreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const toggleCode = () => {
    setShowCode(!showCode);
    if (!showCode && !showPreview) setShowPreview(true);
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
    if (!showPreview && !showCode) setShowCode(true);
  };

  const highlightedCode = highlight(code, languages.jsx, 'jsx');

  return (
    <Card className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={togglePreview}
            className={`hover:scale-105 transition-transform ${showPreview ? 'bg-primary/10 text-primary' : ''}`}
          >
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleCode}
            className={`hover:scale-105 transition-transform ${showCode ? 'bg-primary/10 text-primary' : ''}`}
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </Button>
        </div>
      </div>
      
      <div className="space-y-4">
        {showPreview && (
          <div className="p-4 bg-muted/5 rounded-lg">
            {typeof preview === 'function' ? preview() : preview}
          </div>
        )}
        {showCode && (
          <div className="relative bg-muted rounded-lg overflow-hidden">
            <pre className="p-4 text-sm font-mono whitespace-pre-wrap">
              <code className="language-jsx" dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
            </pre>
          </div>
        )}
      </div>
    </Card>
  );
}
