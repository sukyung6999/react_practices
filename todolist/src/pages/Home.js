import { useEffect, useState } from "react";
import New from "./New";
import List from "./List";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const initialData = JSON.parse(localStorage.getItem('todos'));

    setTodos(initialData);
  }, [])

  
  return <div>
    <List todos={todos}/>
  </div>
}
export default Home;