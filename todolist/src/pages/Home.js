import { useEffect, useRef, useState } from "react";

function Home() {

  const completedChangeHandler = (event) => {
    const updateTarget = todos.map(todo => {
      if (+todo.id === +event.target.id) {
        return {
          ...todo,
          completed: event.target.checked
        }
      } else {
        return todo
      }
    });

    setTodos(updateTarget)
  }

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const initialTodos = JSON.parse(localStorage.getItem('todoList'));

    if (initialTodos) {
      setTodos(initialTodos.filter(todo => !todo.completed));
    }
  }, [])


  const addTodosHandler = (event) => {
    event.preventDefault();
    
    if (userInfo.username.length < 3) {
      usernameInput.current.focus();
      return;
    } else if (userInfo.title.length === 0) {
      titleInput.current.focus();
      return;
    } else {
      setTodos(prev => {
        return [
          {
            ...userInfo,
            id: Math.random(),
            completed: false
          },
          ...prev
        ]
      });
  
      setUserInfo({
        username: '',
        title: '',
      })
    }
    
  }
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todos));
  }, [todos]);

  const usernameInput = useRef();
  const titleInput = useRef();

  const [userInfo, setUserInfo] = useState({
    username: '',
    title: '',
  })

  const inputChangeHandler = (event) => {
    setUserInfo(prev => {
      return {
        ...prev,
        [event.target.id]: event.target.value
      }
    })
  }
  return <div>
    <form onSubmit={addTodosHandler}>
      <div>
        <label htmlFor="username">유저이름</label>
        <input ref={usernameInput} type="text" id="username" value={userInfo.username} onChange={inputChangeHandler} />
      </div>
      <div>
        <label htmlFor="title">할일</label>
        <input ref={titleInput} type="text" id="title" value={userInfo.title} onChange={inputChangeHandler} />
      </div>
      <button>할일등록</button>
    </form>
    <ul>
      {
        todos.map(todo => <li key={`key${todo.id}`} className={todo.completed ? 'on' : null}>
          유저 : {todo.username} /
          할일 : {todo.title} /
          <label htmlFor={todo.id}>완료여부</label> : <input id={todo.id} type="checkbox" onChange={completedChangeHandler} /> 
        </li>)
      }
    </ul>
  </div>
}
export default Home;