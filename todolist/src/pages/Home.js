import { useContext } from "react";
import {useNavigate} from 'react-router-dom';

import { TodosContext } from "../App";
import List from "../components/User/List";
import Button from "../components/Button";

function Home() {
  const todos = useContext(TodosContext);

  const navigate = useNavigate();

  return <div>
    <Button onClick={() => {navigate('/new')}}>할일 만들기</Button>
    <List todos={todos}/>
  </div>
}
export default Home;