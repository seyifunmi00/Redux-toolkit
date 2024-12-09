import {useDispatch} from 'react-redux'import {useState} from "react";import {addTodo} from "../features/todos/todoSlice.js";const AddTodo = () => {    const [input, setInput] = useState('');    const dispatch = useDispatch();    const handleSubmit = (e) => {        e.preventDefault();        dispatch(addTodo(input));        setInput('');    }    return (        <form onSubmit={handleSubmit} className="space-x-3 mt-12 flex items-center w-full">            <input type='text' className='bg-gray-200 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' onChange={(e) => setInput(e.target.value)} value={input} placeholder='Add a todo...'/>            <button className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>               Add Todo            </button>        </form>    );};export default AddTodo;//import use dispatch//import the reducer action you want to use//call the dispatch function (handleSubmit)//thats how to send data.//now how to display the data sent (Todos.jsx)