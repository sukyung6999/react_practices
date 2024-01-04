import './App.css';

import { createContext, useEffect, useReducer } from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {v4} from 'uuid';

import Home from './pages/Home';
import New from './pages/New';
import Detail from './pages/Detail';
import Update from './pages/Update';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      newState = [action.data, ...state];
      break;
    case 'UPDATE':
      newState = state.map((item) => item.id === action.updateId ? {...action.updatedTodo} : item);
      break;
    case 'DELETE':
      newState = state.filter((item) => item.id !== action.deleteId);
      break;
    default: 
      return state;
  }
  localStorage.setItem('todos', JSON.stringify(newState));
  return newState;
}

export const TodosContext = createContext();
export const DispatchesContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const initialData = JSON.parse(localStorage.getItem('todos'));
    dispatch({type: 'INITIAL', data: initialData})
  }, [])

  const onCreate = (name, title) => {
    dispatch({type: 'CREATE', data: {
      id: v4(),
      name,
      title
    }})
  }

  const onUpdate = (updateId, updatedTodo) => {
    dispatch({type: 'UPDATE', updateId, updatedTodo})
  }

  const onDelete = (updateId, deleteId) => {
    dispatch({type: 'DELETE', deleteId})
  }

  return (
    <div className="App">
      <TodosContext.Provider value={todos}>
        <DispatchesContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home/>}></Route>
              <Route path={'/new'} element={<New/>}></Route>
              <Route path={'/detail'} element={<Detail/>}></Route>
              <Route path={'/update'} element={<Update/>}></Route>
            </Routes>
          </BrowserRouter>
        </DispatchesContext.Provider>
      </TodosContext.Provider>
    </div>
  );
}

export default App;
