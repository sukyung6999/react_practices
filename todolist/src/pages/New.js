import {useContext, useState} from 'react';

import Button from '../components/Button';

import uuid from 'react-uuid';
import { TodosContext } from '../App';

function New({
  // setTodos
}) {

  const [todos, setTodos] = useContext(TodosContext);

  const [userInfo, setUserInfo] = useState({
    name: '',
    title: ''
  });
  
  const inputChangeHandler = (event) => {
    setUserInfo(prev => {
      return {
        ...prev,
        [event.target.id]: event.target.value
      }
    })
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const newUserInfo = {
      id: uuid(),
      ...userInfo
    }

    setTodos(prev => [...prev, newUserInfo]);

    localStorage.setItem('todos', JSON.stringify(todos));

    setUserInfo({
      name: '',
      title: ''
    })
  }


  return <div>
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="name">유저이름</label>
        <input type="text" id="name" value={userInfo.name} onChange={inputChangeHandler} />
      </div>
      <div>
        <label htmlFor="title">할일제목</label>
        <input type="text" id="title" value={userInfo.title} onChange={inputChangeHandler} />
      </div>
      <Button type="submit">저장하기</Button>
    </form>
  </div>
}
export default New;