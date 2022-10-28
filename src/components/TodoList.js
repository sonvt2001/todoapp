import React from "react";

const TodoList = ({todos, setTodos, setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id){
                    return {...item, completed: !item.completed};
                }
                return item; 
            })
        );
    };
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todos) => todos.id === id);
        setEditTodo(findTodo);
    }
    const handleDelete =({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    return (
        <div className="list-items"> 
            {todos.map((todo) => (
                    <li key={todo.id}>
                        <div className="item-result">
                            <div className="ds-item">
                                <label for="id"  className = {`list ${todo.completed ? "complete" : ""}`}
                                onChange={(event) => event.preventDefault()}> 
                                    <span className="textCss">
                                        {todo.title}    
                                    </span>
                                    <br/>
                                    <span className="timeCss">
                                        {todo.time}
                                    </span>
                                </label>
                                <input
                                id = {todo.id}
                                hidden
                                />
                            </div>
                               
                            <div className="item-btn">
                                <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                                        <i className="fa fa-check-circle"></i>
                                    </button> 
                                    <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                                        <i className="fa fa-edit"></i>
                                    </button> 
                                    <button className="button-delete task-button" onClick={()=> handleDelete(todo)}>
                                        <i className="fa fa-trash"></i>
                                    </button>   
                            </div>
                            
                        </div>
                            {/* <div className="item-time">
                                <div>
                                    {todo.time}
                                </div>
                            </div> */}
                </li>
            ))}

        </div>
    );
};

export default TodoList;