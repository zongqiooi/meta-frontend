import "./App.css";
import Logo from "./assets/Logo.svg";
import HeroImage from "./assets/restauranfood.jpg";

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

      <main>
        <section id="hero">
          <div className="hero-flex-container">
            <div className="left-hero">
              <h1>Little Lemon</h1>
              <h3>Chichago</h3>
              <p>
                We are family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button className="reserve-button">Reserve a Table</button>
            </div>
            <div className="right-hero">
              <img
                src={HeroImage}
                alt="Hero Food Image"
                width={350}
                height={400}
              />
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
