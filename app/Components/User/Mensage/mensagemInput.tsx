import { ChangeEvent, FormEvent, useState } from "react";
interface MessageInputProps {
    onSendMessage: (message: string) => void;
  }

export function MensagemInput({ onSendMessage }:MessageInputProps){
    const [message, setMessage] = useState('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
      };
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (message.trim() !== '') {
          onSendMessage(message);
          setMessage('');
        }
      };
return(
    <div className="relative">
    <form onSubmit={handleSubmit} className="absolute bottom-0 bg-white 
    p-4 border-t border-gray-300">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          className="flex-1 border p-2 mr-2"
          value={message}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Enviar
        </button>
      </div>
    </form>
    </div>
    )

}