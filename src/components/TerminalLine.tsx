import React from 'react';

interface TerminalLineProps {
  type: 'input' | 'output' | 'error';
  content: string;
  prompt?: string;
  isAscii?: boolean;
}

const urlRegex = /(https?:\/\/[^\s]+)/g;

const renderWithLinks = (text: string) => {
  return text.split(urlRegex).map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-link"
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export const TerminalLine: React.FC<TerminalLineProps> = ({
  type,
  content,
  prompt,
  isAscii,
}) => {
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

  // ASCII OUTPUT (leave untouched)
  if (isAscii) {
    return (
      <div className="terminal-line">
        <pre className="whitespace-pre font-mono font-bold ascii-gradient">
          {content}
        </pre>
      </div>
    );
  }

  // NORMAL OUTPUT (with clickable links)
  return (
    <div className="terminal-line">
      <pre className="terminal-output">
        {renderWithLinks(content)}
      </pre>
    </div>
  );
};
