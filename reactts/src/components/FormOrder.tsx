import React, { useState } from 'react';

interface FormOrderProps {
  onSubmit(order: { name: string; cups: number }): void;
}

const FormOrder = ({ onSubmit }: FormOrderProps) => {
  const [name, setName] = useState<string>('Masala');
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, cups });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Chai Name</label>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />

      <label htmlFor="">Chai Cups</label>
      <input
        type="number"
        value={cups}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
      />

      <input type="submit" />
    </form>
  );
};

export default FormOrder;
