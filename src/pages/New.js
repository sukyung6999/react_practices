import { useNavigate } from "react-router-dom";

import StyledButton from "../components/StyledButton";
import Header from "../components/Header";
import Form from "../components/User/Form";

function New() {
  const navigate = useNavigate();

  const goToBack = (
    <StyledButton onClick={() => navigate(-1, { replace: true })}>
      뒤로가기
    </StyledButton>
  );

  return (
    <>
      <Header onLeft={goToBack}>할일 만들기</Header>
      <Form />
    </>
  );
}
export default New;
