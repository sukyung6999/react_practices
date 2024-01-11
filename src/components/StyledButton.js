import Button from '@mui/material/Button';

function StyledButton(props) {
  return (
    <button type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default StyledButton;