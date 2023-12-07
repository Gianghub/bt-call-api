// lib/store.ts
import { create } from 'zustand';
import axios from 'axios';
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface State {
    todos: Todo[];
    loading : boolean;
    erorr : boolean;
}
interface Action{
    fetchTodos: () => void;
}
export const useTodo = create<State & Action>((set) => ({
    todos: [],
    loading:true,
    erorr : false,
    fetchTodos: async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            const data = await response.data;
            const todosArray = Array.isArray(data) ? data : [data];
            set({ todos: todosArray,loading:false });
        } catch (error) {
            set({erorr:true,loading:false})
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
