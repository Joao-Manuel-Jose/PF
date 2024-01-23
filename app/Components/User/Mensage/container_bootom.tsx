import React, { useState, ChangeEvent, FormEvent } from 'react';

interface InputComponentProps {
  onSubmit: (value: string) => void;
}

const InputComponent= () => {
  /*const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };*/

  return (
    <div className="absoloute  bottom-0 left-0 right-0 w-[50%]">
      <form className="flex items-center justify-between p-4 bg-gray-200">
        <input
          type="text"
          placeholder="Digite algo..."
          className="w-2/3 border p-2 mr-2"

        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default InputComponent;
