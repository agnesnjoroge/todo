import TodoItem from "./TodoItem"
function TodoList({todos,toggleTodo,deleteTodos}) {
  
  return(
  <>
    <ul className="list">
    {todos.length===0 && "No todos"}

    {todos.map(todo => {
// eslint-disable-next-line
    return(
   <TodoItem 
   id={todo.id} title={todo.title} completed={todo.completed} key={todo.id} toggleTodo={toggleTodo} deleteTodos={deleteTodos}
   />)
    
  })}
  </ul>
  </>
  )
  }
export default TodoList;