import {styled} from 'styled-components';
const StyledWrapper = styled.div`
width: 640px;
min-width: 320px;
height: 100vh;
margin: 20px auto;
`;
function Wrapper(props) {
  return <StyledWrapper>
    {props.children}
  </StyledWrapper>
}
export default Wrapper;