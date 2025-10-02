import React from 'react';

interface TerminalLineProps {
  type: 'input' | 'output' | 'error';
  content: string;
  prompt?: string;
  isAscii?: boolean;
}

export const TerminalLine: React.FC<TerminalLineProps> = ({ type, content, prompt, isAscii }) => {
  if (type === 'input') {
    return (
      <div className="terminal-line">
        <span className="terminal-prompt">{prompt} </span>
        <span className="text-terminal-command">{content}</span>
      </div>
    );
  }

  if (type === 'error') {
    return (
      <div className="terminal-line">
        <pre className="terminal-output terminal-error">{content}</pre>
      </div>
    );
  }

  // OUTPUT
  return (
    <div className="terminal-line">
      {isAscii ? (
        <pre className="whitespace-pre font-mono font-bold ascii-gradient">
          {content}
        </pre>
      ) : (
        <pre className="terminal-output">{content}</pre>
      )}
    </div>
  );
};
