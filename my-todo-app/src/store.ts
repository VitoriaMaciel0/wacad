// src/store.ts
import { configureStore } from '@reduxjs/toolkit';

// Defina a interface Todo aqui
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  timestamp: string;
}

// Simule um reducer fictício para ilustrar a estrutura do estado
const todoReducer = (state: Todo[] = [], action: any) => {
  // Lógica do reducer aqui (pode ser vazia para fins de exemplo)
  return state;
};

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;

// Defina a interface RootState aqui
export interface RootState {
  todo: Todo[];
}
