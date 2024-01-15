"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';

const UploadFotoComponent: React.FC = () => {
  const [foto, setFoto] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string | null>(null);

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFoto = e.target.files[0];
      setFoto(selectedFoto);

      // Cria uma URL para a prévia da imagem
      setFotoPreview(URL.createObjectURL(selectedFoto));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!foto) {
        console.error('Nenhuma foto selecionada.');
        return;
      }

      const formData = new FormData();
      formData.append('foto', foto);

      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Upload bem-sucedido!');
      } else {
        console.error('Erro no upload:', response.statusText);
      }
    } catch (error) {
      console.error('Erro no upload:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFotoChange} />
        {fotoPreview && (
          <div>
            <img src={fotoPreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '150px' }} />
          </div>
        )}
        <button type="submit">Enviar Foto</button>
      </form>
    </div>
  );
};

export default UploadFotoComponent;
