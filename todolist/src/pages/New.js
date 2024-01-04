import { useContext, useRef, useState } from "react";
import Button from "../components/Button";
import { DispatchesContext } from "../App";

function New() {

  const {onCreate} = useContext(DispatchesContext);

  const [userInfo, setUserInfo] = useState({
    name: '',
    title: ''
  });

  }

  const onSubmit = (event) => {
    event.preventDefault();

    console.log('전');
    
    onCreate(userInfo.name, userInfo.title);
    
    console.log('후');

    setUserInfo({
      name: '',
      title: ''
    })
  }
  
  return <form onSubmit={onSubmit}>
    <div>
      <label htmlFor="name">유저이름</label>
      <input type="text" id="name" value={userInfo.name} onChange={inputChangeHandler} autoComplete="off"/>
    </div>
    <div>
      <label htmlFor="title">할일제목</label>
      <input type="text" id="title" value={userInfo.title} onChange={inputChangeHandler} autoComplete="off"/>
    </div>
    {/* <Button type="submit">저장하기</Button> */}
    <button>저장하기</button>
  </form>

}
export default New;