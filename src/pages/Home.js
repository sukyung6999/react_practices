import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TodosContext } from "../App";
import Wrapper from "../components/Wrapper";
import UserList from "../components/User/List";
import DefaultButton from "../components/DefaultButton";

function Home() {
  const todos = useContext(TodosContext);

  const navigate = useNavigate();

  return (
    <Wrapper>
      <DefaultButton
        classNames={'btn_add'}
        onClick={() => {
          navigate("/new");
        }}
      >
        할일 만들기
      </DefaultButton>
      {todos && <UserList todos={todos} />}
    </Wrapper>
  );
}
export default Home;
