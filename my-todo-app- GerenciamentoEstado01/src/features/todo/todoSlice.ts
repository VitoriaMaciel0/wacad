//src//features//todo/TodoSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  timestamp: string;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // Implemente a lógica para adicionar uma nova atividade
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      // Implemente a lógica para remover uma atividade
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      // Implemente a lógica para marcar uma atividade como concluída
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
