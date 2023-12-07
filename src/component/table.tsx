// components/Table.tsx
import React, { useEffect } from 'react';
import { useTodo } from '../lib/useTodo';

const Table: React.FC = () => {
  const {todos,fetchTodos,loading,erorr} = useTodo();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  
  if(loading) return <p>Loading...</p>
  if(erorr) return <p>Error</p>;
  return (
    <table style={{border:'1px solid white'}}>
      <thead>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? 'Yes' : 'No'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
