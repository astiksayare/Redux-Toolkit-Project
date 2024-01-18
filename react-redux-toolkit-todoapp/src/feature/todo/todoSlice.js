
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1, 
            text: "Hello World"
        }
    ]
}

// Reducer in the redux toolkit

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

            //Pushing data to the state.
            state.todos.push(todo);
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;