'use client';
import React from 'react';
import { useCounterStore } from '@/lib/useTodo';
import '../ui/couterApp.css'; // Import file CSS

const CounterComponent: React.FC = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="counter-container">
      <h2>Counter</h2>
      <p className="count-display">{count}</p>
      <div className="button-container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterComponent;