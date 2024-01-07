import {useNavigate, useParams} from 'react-router-dom';

import Button from "../components/Button";
import Header from "../components/Header";
import Form from "../components/User/Form";
import { useContext, useEffect, useState } from 'react';
import { TodosContext } from '../App';

function Edit() {
  const todos = useContext(TodosContext);

  const navigate = useNavigate();
  const {id} = useParams();

  const [originData, setOriginData] = useState([]);

  useEffect(() => {
    const data = todos.filter(todo => todo.id === id);
    setOriginData(...data);
  }, [todos])

  const goToBack = <Button onClick={() => navigate(-1, {replace: true})}>뒤로가기</Button>;

  return <div>
    <Header onLeft={goToBack}>수정하기</Header>
    <Form isEdit={true} originData={originData} />
  </div>
}
export default Edit;