import React, { useState } from 'react';
import './HabitForm.css';

function HabitForm({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ name, color: null });
    setName('');
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New habit e.g. Drink water"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default HabitForm;