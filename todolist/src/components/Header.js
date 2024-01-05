function Header(props) {
  return <header>
    {props.onLeft}
    {props.children}
  </header>
}
export default Header;