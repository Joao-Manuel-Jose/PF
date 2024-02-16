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
    <div className='relative'>
    <textarea
      ref={textareaRef}
      className={`resize-none h-8 min-h-10 max-h-36  mx-auto  w-full  rounded-2xl
      text-gray-700 outline-none   bg-green-100 py-1 
    px-2 md:w-full ${className || ''}`}
      value={text}
      onChange={handleInputChange} required
    />
    </div>
  );
};

export default AutoExpandingTextarea;
