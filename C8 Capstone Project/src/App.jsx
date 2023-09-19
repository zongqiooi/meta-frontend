import "./App.css";
import Logo from "./assets/Logo.svg";

function App() {
  return (
    <>
      <header className="nav-flex-container">
        <img src={Logo} alt="Little Lemon Restaurant Logo" />
        <nav>
          <ul className="links-flex-container">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>

      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
