import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]) //array of objects 

  return (
    <div className="App">
      <header>
        <h1>To Do App </h1>
      </header>    
      <Form 
            inputText={inputText} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText} 
      />
      <TodoList 
        setTodos={setTodos}
        todos={todos} 
      />
    </div>
  );
}

export default App;
