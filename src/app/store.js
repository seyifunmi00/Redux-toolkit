import {configureStore} from "@reduxjs/toolkit";

//coming back

import todoSlice from "../features/todos/todoSlice.js";

export const store = configureStore({
    reducer: {

        //AFTER
        todos: todoSlice,
    },

});


//First Step create a store
//Second create the reducers in the features folder in the name of the app and create the slice



//coming back from the slice
//Wrap the entire app with the provider go to main.jsx



//use Dispatch uses the reducer to talk to the store
//Go to where you want to use the reducers (AddTodo.jsx)