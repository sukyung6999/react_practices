import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../DefaultButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

function UserList({ todos }) {
  const navigate = useNavigate();

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<span>이름 : {todo.name}</span>}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  <span>할일 : {todo.title}</span>
                </>
              }
            />
            <DefaultButton onClick={() => navigate(`/edit/${todo.id}`)}>수정하기</DefaultButton>
          </ListItem>
          <Divider variant="fullWidth" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}

export default UserList;
