import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TodosContext } from "../App";
import UserList from "../components/User/List";
import DefaultButton from "../components/DefaultButton";

function Home() {
  const todos = useContext(TodosContext);

  const navigate = useNavigate();

  return (
    <div>
      <DefaultButton
        onClick={() => {
          navigate("/new");
        }}
      >
        할일 만들기
      </DefaultButton>
      {todos && <UserList todos={todos} />}
    </div>
  );
}
export default Home;
