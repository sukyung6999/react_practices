import { useContext, useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom';

import { DispatchesContext } from "../../App";

import Button from "../Button";

function Form({
  isEdit,
  originData
}) {

  const navigate = useNavigate();
  const {id} = useParams();

  const {onCreate, onEdit, onDelete} = useContext(DispatchesContext);

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
  }

  const onSubmit = (event) => {
    event.preventDefault();
    
    if (isEdit) {
      onEdit(id, userInfo);
    } else {
      onCreate(userInfo.name, userInfo.title);
    }
    
    setUserInfo({
      name: '',
      title: ''
    });

    navigate('/');
  }
  
  useEffect(() => {
    if (isEdit) {
      setUserInfo(originData);
      console.log(originData)
    }

  }, [isEdit, originData]);


  const onDeleteTodo = () => {
    onDelete(id);
    
    navigate('/', {replace: true})
  }

  return <form onSubmit={onSubmit}>
  <div>
    <label htmlFor="name">유저이름</label>
    <input type="text" id="name" value={userInfo.name || ''} onChange={inputChangeHandler}/>
  </div>
  <div>
    <label htmlFor="title">할일제목</label>
    <input type="text" id="title" value={userInfo.title || ''} onChange={inputChangeHandler}/>
  </div>
  <Button type="submit">저장하기</Button>
  {isEdit && <Button onClick={onDeleteTodo}>삭제하기</Button>}
</form>
}
export default Form