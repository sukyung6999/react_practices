import {useNavigate} from 'react-router-dom';

import Button from "../components/Button";
import Header from "../components/Header";
import Form from "../components/User/Form";

function New() {
  const navigate = useNavigate();

  const goToBack = <Button onClick={() => navigate(-1, {replace: true})}>뒤로가기</Button>

  return <>
    <Header onLeft={goToBack} >할일 만들기</Header>
    <Form />
  </>
}
export default New;