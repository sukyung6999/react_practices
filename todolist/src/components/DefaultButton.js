import Button from '@mui/material/Button';

function DefaultButton(props) {
  return (
    <Button type={props.type || "button"} onClick={props.onClick} variant={props.variant || 'contained'} color='violet'>
      {props.children}
    </Button>
  );
}
export default DefaultButton;