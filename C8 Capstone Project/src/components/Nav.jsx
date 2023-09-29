import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar-standard">
        <ul className="links-flex-container">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>About</li>
          <li>Menu</li>
          <li>
            <NavLink
              to="/reservations"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Reservations
            </NavLink>
          </li>
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
