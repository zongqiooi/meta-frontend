import Logo from "../assets/Logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="nav-flex-container">
      <img src={Logo} alt="Little Lemon Restaurant Logo" />
      <Nav />
    </header>
  );
};

export default Header;
