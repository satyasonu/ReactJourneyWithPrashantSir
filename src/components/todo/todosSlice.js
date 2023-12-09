import { createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value : []
  },
  reducers: {
      addTodo : (state, action) => {
        state.value = [...state.value, {name: action.payload, id : state.value.length === 0 ? 0 : state.value[state.value.length -1].id + 1, completed: false}]
        // console.log(state.value)
      },
      deleteTodo : (state, action) => {
        state.value = state.value.filter((todo) => todo.id !== action.payload)
      },
      toggleTodo : (state,action) => {
        const todo = state.value.find((todo) => todo.id === action.payload)
        if (todo){
          todo.completed = !todo.completed
        }
      }
  }
})

export default todoSlice.reducer;

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions