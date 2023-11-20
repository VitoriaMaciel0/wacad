import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface HistoryItem {
  text: string;
  completedAt: string;
}

interface TodoState {
  list: Todo[];
  history: HistoryItem[];
}

const initialState: TodoState = {
  list: [],
  history: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter(todo => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      const todo = state.list.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = true;
        state.history.push({ text: todo.text, completedAt: new Date().toLocaleString() });
      }
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
