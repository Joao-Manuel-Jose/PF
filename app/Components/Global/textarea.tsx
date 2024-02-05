// AutoExpandingTextarea.tsx
import React, { useState, useRef, ChangeEvent, TextareaHTMLAttributes } from 'react';


interface AutoExpandingTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className ,...props}:AutoExpandingTextareaProps){


  return (
    <textarea
     
      className={`resize-none h-10  mx-auto  w-[100%] rounded-2xl
      text-gray-700 outline-none   bg-white py-1  focus:ring-1 shadow
    px-2 md:w-full ${className || ''}`}
    {...props}
    />
  );
};