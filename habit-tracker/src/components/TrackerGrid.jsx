import React from 'react';
import './TrackerGrid.css';

function TrackerGrid({ history }) {
  const last7 = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const iso = date.toISOString().split('T')[0];
    const dayData = history?.find(h => h.date === iso);
    return { date: iso, completed: !!dayData?.completed };
  }).reverse();

  return (
    <div className="tracker-grid">
      {last7.map(day => (
        <div
          key={day.date}
          className={`day ${day.completed ? 'done' : ''}`}
          title={day.date}
        />
      ))}
    </div>
  );
}

export default TrackerGrid;