import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { DispatchesContext } from "../../App";

import StyledButton from "../StyledButton";
import Wrapper from "../Wrapper";

function Form({ isEdit, originData }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const { onCreate, onEdit, onDelete } = useContext(DispatchesContext);

  const [userInfo, setUserInfo] = useState({
    name: "",
    title: "",
  });

  const inputChangeHandler = (event) => {
    setUserInfo((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (isEdit) {
      onEdit(id, userInfo);
    } else {
      onCreate(userInfo.name, userInfo.title);
    }

    setUserInfo({
      name: "",
      title: "",
    });

    navigate("/");
  };

  useEffect(() => {
    if (isEdit) {
      setUserInfo(originData);
    }
  }, [isEdit, originData]);

  const onDeleteTodo = () => {
    onDelete(id);

    navigate("/", { replace: true });
  };

  return (
      <Wrapper>
        <Box
         onSubmit={onSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
        }}
        noValidate
        autoComplete="off"
            >
        <div>
          <label htmlFor="name"></label>
          <TextField type="text"
            fullWidth="true"
            id="name"
            value={userInfo.name || ""}
            onChange={inputChangeHandler} label="유저이름" variant="filled" />
        </div>
        <div>
          <TextField type="text"
            fullWidth="true"
            id="title"
            value={userInfo.title || ""}
            onChange={inputChangeHandler} label="할일제목" variant="filled" />
        </div>
        <StyledButton type="submit">저장하기</StyledButton>
        {isEdit && <StyledButton onClick={onDeleteTodo} variant={'outlined'}>삭제하기</StyledButton>}
        </Box>
      </Wrapper>
  );
}
export default Form;
