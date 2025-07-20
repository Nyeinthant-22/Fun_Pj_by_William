import React from 'react';
import HabitCard from './HabitCard';
import './HabitList.css';

function HabitList({ habits, onToggleComplete, onDelete }) {
  if (!habits.length) {
    return <p>No habits yet. Add one!</p>;
  }

  return (
    <div className="habit-list">
      {habits.map(habit => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default HabitList;