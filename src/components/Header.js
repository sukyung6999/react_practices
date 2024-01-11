import './Header.css';

function Header(props) {
  return <header className="header">
    {props.onLeft}
    {props.children}
  </header>
}
export default Header;