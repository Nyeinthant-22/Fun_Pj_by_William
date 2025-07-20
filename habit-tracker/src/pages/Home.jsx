import React, { useEffect, useState } from 'react';
import { collection, addDoc, doc, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../hooks/useAuth';
import { logOut } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';
import HabitForm from '../components/HabitForm';
import HabitList from '../components/HabitList';

function Home() {
  const { currentUser } = useAuth();
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) return;

    const colRef = collection(db, 'users', currentUser.uid, 'habits');
    const unsub = onSnapshot(colRef, snapshot => {
      const data = snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
      setHabits(data);
    });

    return unsub;
  }, [currentUser]);

  const addHabit = async ({ name, color }) => {
    if (!currentUser) return;
    const colRef = collection(db, 'users', currentUser.uid, 'habits');
    await addDoc(colRef, {
      name,
      color,
      streak: 0,
      lastCompleted: null,
      createdAt: new Date().toISOString(),
    });
  };

  const toggleComplete = async habit => {
    if (!currentUser) return;
    const today = new Date().toISOString().split('T')[0];

    let { streak, lastCompleted } = habit;

    if (lastCompleted === today) {
      return; // Already completed today
    }

    const isYesterday =
      lastCompleted &&
      new Date(today) - new Date(lastCompleted) === 24 * 60 * 60 * 1000;

    const newStreak = isYesterday ? streak + 1 : 1;

    const docRef = doc(db, 'users', currentUser.uid, 'habits', habit.id);
    await updateDoc(docRef, {
      streak: newStreak,
      lastCompleted: today,
    });
  };

  const deleteHabit = async id => {
    if (!currentUser) return;
    const docRef = doc(db, 'users', currentUser.uid, 'habits', id);
    await deleteDoc(docRef);
  };

  const handleLogout = async () => {
    await logOut();
    navigate('/login');
  };

  return (
    <div className="container">
      <header>
        <h1>Habit Tracker</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <main style={{ padding: '1rem 2rem' }}>
        <HabitForm onAdd={addHabit} />
        <HabitList habits={habits} onToggleComplete={toggleComplete} onDelete={deleteHabit} />
      </main>
    </div>
  );
}

export default Home;