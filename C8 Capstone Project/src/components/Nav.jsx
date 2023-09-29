import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  return (
    <>
      <nav className="navbar-standard">
        <ul className="links-flex-container">
          <li className="nav-button-home">Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
      <nav className="navbar-hamburger">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            variant="outline"
            icon={<MenuIcon />}
          />
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Menu</MenuItem>
            <MenuItem>Reservations</MenuItem>
            <MenuItem>Order Online</MenuItem>
            <MenuItem>Login</MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </>
  );
};

export default Nav;
