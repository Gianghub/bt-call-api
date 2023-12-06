// lib/store.ts
import { create } from 'zustand';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface State {
    todos: Todo[];
    fetchTodos: () => void; //dung de nhan du lieu
}

export const useStore = create<State>((set) => ({
    todos: [],
    fetchTodos: async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            const todosArray = Array.isArray(data) ? data : [data];
            set({ todos: todosArray });
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    },
}));

//demo count with zustand
interface CounterState{
    count:number;
    increment:()=>void;
    decrement:()=>void;
}
export const useCounterStore = create<CounterState>((set)=>({
    count : 0,
    increment:()=>set((state)=>({count:state.count+1})),
    decrement:()=>set((state)=>({count:state.count-1})),
}));
