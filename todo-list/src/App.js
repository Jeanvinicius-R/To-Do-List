import React, { useState } from 'react'; // Import de React
import TodoList from "./TodoList"; // Import de TodoList (com TodoItem)

// Componente Principal
export default function App() {

  // Variável de estado que guarda todas atividades
  const [todos, setTodos] = useState([]); // [] -> Lista, Array

  const [visivel, setVisivel] = useState(true);

  // Variável de estado - Relativo à tarefa
  const [newTask, setNewTask] = useState(""); // " " -> Tarefa, Texto

  // Variável de estado - Relativo à Data
  const [datadia, setDatadia] = useState(""); // " " -> Tarefa, Texto

  // Variável de estado - Relativo à Hora
  const [hora, setHora] = useState(""); // " " -> Tarefa, Texto

  // Primeira Function:
  // Adiciona Tarefa na Lista
  const addTask = () => {
    if (newTask.trim() === "") return // ".trim" -> "Raspa" os espaços vazios de uma String

    // Criando um Objeto que represente a atividade
    const newTodo = {
      id: Date.now(), // Criação de ID único baseado na hora ATUAL (.now)
      text: newTask,
      date: datadia,
      hora: hora
    }

    setTodos([...todos, newTodo]); // "..." -> Pega todos os elemento dentro do Array 'to-dos' e esparrama dentro do novo array junto de 'newTodo'

    // Limpeza de variáveis de estado:
    setNewTask("");
    setDatadia("");
    setHora("");
  }

  // Função de remoção de tarefas pelo id
  const removeTask = (id) => (
    setTodos(todos.filter((todo) => todo.id !== id)) // Filtra 'to-dos'
  );


  // Função que mostra/esconde a Lista
  const showList = () => {
    setVisivel(!visivel);
  }

  return (
    <div style={styles.container}>
      <h1>Minha To-Do List</h1>
      <div style = {styles.container}>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // "e" é referenciado ao Input/estímulo de evento
          style = {styles.input}
        />
        <button onClick={addTask}>Adicionar</button>
        <button onClick={showList}>Lista</button>
      </div>

      <div marginTop = "20">
        <input
          type = "time"
          placeholder=""
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          style = {styles.inputdh}
        />
        <input
          type = "date"
          placeholder = "Digite/Escolha uma data"
          value = {datadia}
          onChange = {(e) => setDatadia (e.target.value)}
          style = {styles.inputdh}
        />
      </div>

      <div styles = {{
        height: "500px",
        overflowY: "scrool",
        border: "1px solid #ccc",
        padding: "10px",
        marginTop:"20px"
      }}> 
        {  
          visivel && <TodoList todos={todos} removeTask={removeTask} />
        }
      
      </div>

    </div>
  );

};

const styles = {
  container: {
    maxWidth: "600px",
    margins: "50px auto",
    margin: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputdh:{
    padding: "10px",
    width: "39%",
    marginRight: "5px",
    borderRadius: "10px"
  },
  input: {
    padding: "10px",
    width: "70%",
    marginRight: "5px",
  },
  button: {
    padding: "10px 15px",
  }
}