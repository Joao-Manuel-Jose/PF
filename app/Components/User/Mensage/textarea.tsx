// AutoExpandingTextarea.tsx
import React, { useState, useRef, ChangeEvent } from 'react';


interface AutoExpandingTextareaProps {
  className?: string;
}

function AutoExpandingTextarea({ className }:AutoExpandingTextareaProps){
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    setText(newText);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <textarea
      ref={textareaRef}
      className={`resize-none h-8 mx-auto  w-[100%] rounded-2xl
      text-gray-700 outline-none   bg-white py-1
    px-2 md:w-2/3 ${className || ''}`}
      value={text}
      onChange={handleInputChange} required
    />
  );
};

export default AutoExpandingTextarea;
