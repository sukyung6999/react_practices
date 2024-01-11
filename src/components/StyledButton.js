import Button from '@mui/material/Button';

function StyledButton(props) {
  return (
    <Button type={props.type || "button"} onClick={props.onClick} variant={props.variant || 'contained'}  color='violet' className={props.classNames}>
      {props.children}
    </Button>
  );
}
export default StyledButton;