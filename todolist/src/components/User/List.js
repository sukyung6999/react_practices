import { useNavigate } from "react-router-dom";
import Button from "../Button";

function List({ todos }) {
  const navigate = useNavigate();

  return (
    <ul>
      {todos.map((todo) => (
          <li key={todo.id}>
            <span>이름 : {todo.name}</span>
            <span>할일 : {todo.title}</span>
            <Button onClick={() => navigate(`/edit/${todo.id}`)}>
              수정하기
            </Button>
          </li>
        ))}
    </ul>
  );
}

export default List;
