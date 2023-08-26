import React, { useState, useEffect } from "react";
import './paggination/paggination.css'
export default function Pagginatioin() {
  const [todos, setTodos] = useState([]);
const [todosPerPage,setTodosPerPage]=useState(10)
const [totalTodos,setTotalTodos]=useState(0)
const [noOfPages,setNoOfPages]=useState(20)
const [pagesArray,setPagesArray]=useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTodos(data);
        setTotalTodos(data.length)
        
        // console.log(pagesArray)
      });
  }, []);
const displayTodos=(value)=>{
  // value means todos page page are selected in option 
  setTodosPerPage(value)
  setNoOfPages(Math.ceil(totalTodos/value))
  const pages=new Array(noOfPages)
  setPagesArray(pages)
  console.log(pagesArray)
}

  return (
    <section className="paggination">
<p>todo per page {todosPerPage} {'totolTodos > :'+totalTodos} {'NO OF Pages :'+noOfPages}</p>
        <select name="" onChange={(e)=>displayTodos(e.target.value)} id="">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
     

{
  todos.map((data)=>{
    return (
      <div className="todo" key={data.id}>
  <div className="todo-title">{data.title}</div>
  <div className="todo-status">{(data.completed)?"Done":"Pending"}</div>
</div>
    )
  })
}
    </section>
  )
}
