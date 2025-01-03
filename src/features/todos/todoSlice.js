import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      console.log(id, text);
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: text, form: true };
        }
        return todo;
      });
    },
    markCompleted: (state, action) => {
      state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, markCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;

//slice is responsible for the initial state
//and the reducer function
//reducer is responsible for updating the state
//nanoid is used to generate unique id it is from redux toolkit automatically

//create an initialState
//create a slice for your objects, pass in the initial state, and the reducers
//create each reducers
//export all the reducers as actions
//export the slice.reducer
//go back to your store

//   decreaseItemQuantity(state, action) {
//   const itemIndex = state.cart.findIndex(item => item.pizzaId === action.payload);

//   if (itemIndex !== -1) {
//       const item = state.cart[itemIndex];
//       if (item.quantity === 1) {
//           // Remove item from cart when quantity is 1
//           state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
//       } else {
//           // Otherwise, decrease the quantity
//           state.cart[itemIndex] = {
//               ...item,
//               quantity: item.quantity - 1,
//               totalPrice: item.unitPrice * (item.quantity - 1),
//           };
//       }
//   }
// },
