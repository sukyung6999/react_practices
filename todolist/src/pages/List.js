function List({
  todos
}) {

  localStorage.setItem('todos', JSON.stringify(todos));
  
  return <ul>
    {
      todos.map(todo => <li key={todo.id}>
        <span>유저이름 : {todo.name}</span>
        <span>할일 : {todo.title}</span>
      </li>)
    }
  </ul>
}
export default List;