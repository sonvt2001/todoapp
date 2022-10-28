import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import './App.css';

const App = () => {

  const initiaState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState(initiaState);
  const [editTodo, setEditTodo] = useState(null);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const[openModal, setOpenModal] = useState(false)
  return (
      

        <div className="container">
            
            <div className="PopUp">
                <h1>MY PROFILE</h1>
                <button className="openModalBtn" 
                onClick={() =>{setOpenModal(true);}}>Mở</button>
                {openModal && <Modal closeModal={setOpenModal}/>}
            </div>
            <div className = "app-wrapper">
              <div>
                <Header/>
              </div>
            <div>
                <Form
                input = {input}
                setInput = {setInput}
                todos = {todos}
                setTodos = {setTodos}
                editTodo = {editTodo}
                setEditTodo ={setEditTodo}
                />
            </div> 
            <div>
                <TodoList 
                todos = {todos}
              
                setTodos = {setTodos} 
                setEditTodo={setEditTodo}
                />
            </div> 
      </div>
    </div>
 

  );
};

export default App;
