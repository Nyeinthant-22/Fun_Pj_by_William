import React from 'react';
import './HabitCard.css';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

function HabitCard({ habit, onToggleComplete, onDelete }) {
  const { name, color, streak, lastCompleted } = habit;
  const today = new Date().toISOString().split('T')[0];
  const completedToday = lastCompleted === today;

  return (
    <div className="habit-card" style={{ borderTop: `4px solid ${color || 'var(--accent)'}` }}>
      <div className="habit-header">
        <h3>{name}</h3>
        <button className="delete-btn" onClick={() => onDelete(habit.id)}>
          <FaTrashAlt />
        </button>
      </div>

      <p className="streak">🔥 {streak} day streak</p>

      <button
        className={`complete-btn ${completedToday ? 'done' : ''}`}
        onClick={() => onToggleComplete(habit)}
      >
        <FaCheckCircle />
        {completedToday ? 'Completed' : 'Mark Done'}
      </button>
    </div>
  );
}

export default HabitCard;