import "./App.css";
import Logo from "./assets/Logo.svg";
import HeroImage from "./assets/restauranfood.jpg";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import GreekSalad from "./assets/greek salad.jpg";
import Bruchetta from "./assets/bruchetta.svg";
import LemonDessert from "./assets/lemon dessert.jpg";

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

        <section id="special">
          <div className="special-top-flex-container">
            <h1>This weeks specials!</h1>
            <button className="online-menu-button">Online Menu</button>
          </div>

          <div className="special-btm-flex-container">
            <article className="card">
              <img
                src={GreekSalad}
                alt="Greek Salad"
                width={400}
                height={300}
              />
              <div className="card-flex-container">
                <div className="card-top-flex-container">
                  <h1>Greek salad</h1>
                  <p>$12.99</p>
                </div>
                <div className="card-middle">
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives,
                    and our Chichago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>
                </div>
                <div className="card-btm-flex-container">
                  <p>Order a delivery</p>
                  <DeliveryDiningIcon />
                </div>
              </div>
            </article>

            <article className="card">
              <img src={Bruchetta} alt="Bruchetta" width={450} height={300} />
              <div className="card-flex-container">
                <div className="card-top-flex-container">
                  <h1>Bruchetta</h1>
                  <p>$5.99</p>
                </div>
                <div className="card-middle">
                  <p>
                    Our Bruschetta is made from grilled bread that has been
                    smeared with garlic and seasoned with salt and olive oil.
                  </p>
                </div>
                <div className="card-btm-flex-container">
                  <p>Order a delivery</p>
                  <DeliveryDiningIcon />
                </div>
              </div>
            </article>

            <article className="card">
              <img
                src={LemonDessert}
                alt="Lemon Dessert"
                width={400}
                height={300}
              />
              <div className="card-flex-container">
                <div className="card-top-flex-container">
                  <h1>Lemon Dessert</h1>
                  <p>$5.00</p>
                </div>
                <div className="card-middle">
                  <p>
                    This comes straight from grandma&apos;s recipe book, every
                    last ingredient has been sourced and is as authentic as can
                    be imagined.
                  </p>
                </div>
                <div className="card-btm-flex-container">
                  <p>Order a delivery</p>
                  <DeliveryDiningIcon />
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
