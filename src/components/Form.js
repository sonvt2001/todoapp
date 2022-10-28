import React, {useEffect} from "react";
import {v4 as uuidv4} from "uuid";
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todos) => 
            todos.id === id ? {title, id , completed } : todos
        );
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title);
        } else
        setInput("")
    }, [setInput,editTodo]);
    const onInputChange = (event) => {
        setInput(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const dateValue = new Date();
        const dayValue = dateValue.getDate()
        const monthValue = dateValue.getMonth() + 1
        const yearValue = dateValue.getFullYear()
        
        if(!editTodo){
            setTodos([...todos,{id:uuidv4(), title: input, time: "Date: " + dayValue + "/" + monthValue + "/" + yearValue  , completed: false }]);
            setInput("");
        } else {
            updateTodo(input, editTodo.id,editTodo.completed)
        }
    }
    return (
        <form onSubmit = {onFormSubmit} >
            <input 
            type = "text"
            placeholder ="Enter a Todo..."
            className ="task-input"
            value = {input}
            required
            onChange = {onInputChange}
            />
            <button className="button-add" type ="submit">
                {editTodo ? "OK" : "Add" }
            </button>
        </form>
    );
};
export default Form;