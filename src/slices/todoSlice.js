import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name : 'todo',
  initialState : {
    value : []
  },
  reducers: {
      addTodo : (state, action) => {
        state.value = [...state.value, { name :action.payload, id: state.value.length === 0 ? 1 : state.value[state.value.length - 1].id + 1, completed: false}]
      },
      deleteTodo: (state, action) => {
        state.value = state.value.filter(todo => todo.id !== action.payload)
      },
      updateTodo: (state, action) => {
        const todoIndex = state.value.findIndex(todo => todo.id === action.payload.id)
        state.value[todoIndex].name = action.payload.name
      },
      CompletedTodo: (state, action) => {
        // console.log(action.payload)
        const todoIndex = state.value.findIndex(todo => todo.id === action.payload.id)
        state.value[todoIndex].completed = action.payload.completed
      }
  }
})

export default todoSlice.reducer


export const {addTodo, deleteTodo, updateTodo, CompletedTodo} = todoSlice.actions