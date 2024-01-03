import "./App.css";

import { createContext, useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import New from "./pages/New";

export const TodosContext = createContext();

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <TodosContext.Provider value={[todos, setTodos]}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/new" element={<New/>} />
        </Routes>
      </BrowserRouter>
    </TodosContext.Provider>
  );
}

export default App;
