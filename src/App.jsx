import supabase from "./supabase-client.js";
import {useEffect, useState} from "react";

function App() {
 const [todo, setTodo] = useState('')
 const [newTodo, setNewTodo] = useState("");

 useEffect(() => {
  fetchTodos();
 }, []);

 const fetchTodos = async  () => {
  const { data ,error} = await supabase.from("TodoList").select("*")

  if(error){
   console.log("Couldn't fetch data", error)
  }else{
   setTodo(data)
  }
 }

 const completeTask = async (id, isCompleted) =>{
   const {data, error} = await supabase.from("TodoList").update({isCompleted:!isCompleted}).eq("id" ,id)

  if(error){
   console.log("Couldn't update the given problem", error)
  }else{
   const updatedTodo = todo.map(t => t.id === id ? {...t, isCompleted:!isCompleted}: t)
   setTodo(updatedTodo);
  }

 }

 const deleteTask = async (id) => {
   const {data ,error} = await supabase.from("TodoList").delete().eq("id",id);

  if(error){
   console.log("Couldn't delete the given problem", error)
  }else{
   const updatedTodo = todo.filter(t => t.id !== id)
   setTodo(updatedTodo)
  }

 }


const addTodo = async () => {
 const newTodoData = {
  name: newTodo,
  isCompleted : false
 }
  const { data, error } = await supabase.from("TodoList") .insert([newTodoData]).single()

 if(error){
  console.log("Error Adding to the table ", error)
 }else {
  setTodo((p)=> [...p, data])
  setNewTodo('');
 }
}

  return (
    <>
      <h1>Todo list</h1>
      <div>
        <input type='text' placeholder="New Todo..." value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} />
        <button onClick={addTodo}>Add Todo Item</button>
      </div>

     <ul>
      {todo && todo.map(t => (
       <li key={t.id}> <p>{t.name}</p>
       <button onClick={() => completeTask(t.id, t.isCompleted)}>{t.isCompleted? "Undo": "Complete"}</button>
        <button onClick={() => deleteTask(t.id)}>Delete Task</button>
       </li>
      ))}
     </ul>
    </>
  )
}

export default App
