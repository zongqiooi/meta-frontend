import "./App.css";
import Logo from "./assets/Logo.svg";
import HeroImage from "./assets/restauranfood.jpg";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import GreekSalad from "./assets/greek salad.jpg";
import Bruchetta from "./assets/bruchetta.svg";
import LemonDessert from "./assets/lemon dessert.jpg";
import TestimonialUser1 from "./assets/woman.png";
import TestimonialUser2 from "./assets/man.png";
import TestimonialUser3 from "./assets/human.png";
import TestimonialUser4 from "./assets/profile.png";

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
            <h1>Special</h1>
            <button className="online-menu-button">Online Menu</button>
          </div>

          <div className="special-btm-flex-container">
            <article className="special-card">
              <img
                src={GreekSalad}
                alt="Greek Salad"
                width={400}
                height={300}
              />
              <div className="special-card-flex-container">
                <div className="special-card-top-flex-container">
                  <h1>Greek salad</h1>
                  <p>$12.99</p>
                </div>
                <div className="special-card-middle">
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives,
                    and our Chichago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>
                </div>
                <div className="special-card-btm-flex-container">
                  <p>Order a delivery</p>
                  <DeliveryDiningIcon />
                </div>
              </div>
            </article>

            <article className="special-card">
              <img src={Bruchetta} alt="Bruchetta" width={450} height={300} />
              <div className="special-card-flex-container">
                <div className="special-card-top-flex-container">
                  <h1>Bruchetta</h1>
                  <p>$5.99</p>
                </div>
                <div className="special-card-middle">
                  <p>
                    Our Bruschetta is made from grilled bread that has been
                    smeared with garlic and seasoned with salt and olive oil.
                  </p>
                </div>
                <div className="special-card-btm-flex-container">
                  <p>Order a delivery</p>
                  <DeliveryDiningIcon />
                </div>
              </div>
            </article>

            <article className="special-card">
              <img
                src={LemonDessert}
                alt="Lemon Dessert"
                width={400}
                height={300}
              />
              <div className="special-card-flex-container">
                <div className="special-card-top-flex-container">
                  <h1>Lemon Dessert</h1>
                  <p>$5.00</p>
                </div>
                <div className="special-card-middle">
                  <p>
                    This comes straight from grandma&apos;s recipe book, every
                    last ingredient has been sourced and is as authentic as can
                    be imagined.
                  </p>
                </div>
                <div className="special-card-btm-flex-container">
                  <p>Order a delivery</p>
                  <DeliveryDiningIcon />
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="testimonials">
          <h1>Testimonials</h1>
          <div className="testimonials-card-flex-container">
            <article className="testimonials-card">
              <h2>Rating</h2>
              <div className="testimonials-user-info">
                <img
                  src={TestimonialUser1}
                  alt="Testimonial User Image"
                  width={100}
                />
                <h3>Ashleynguci</h3>
              </div>
              <p className="testimonials-text">
                Little Lemon Restaurant exceeded my taste expectations! The
                flavors are phenomenal.
              </p>
            </article>

            <article className="testimonials-card">
              <h2>Rating</h2>
              <div className="testimonials-user-info">
                <img
                  src={TestimonialUser2}
                  alt="Testimonial User Image"
                  width={100}
                />
                <h3>Ashleynguci</h3>
              </div>
              <p className="testimonials-text">
                Delicious dishes and impeccable service - Little Lemon is my
                go-to spot!
              </p>
            </article>

            <article className="testimonials-card">
              <h2>Rating</h2>
              <div className="testimonials-user-info">
                <img
                  src={TestimonialUser3}
                  alt="Testimonial User Image"
                  width={100}
                />
                <h3>Ashleynguci</h3>
              </div>
              <p className="testimonials-text">
                A hidden gem! Little Lemon&apos;s ambiance and food quality are
                top-notch.
              </p>
            </article>

            <article className="testimonials-card">
              <h2>Rating</h2>
              <div className="testimonials-user-info">
                <img
                  src={TestimonialUser4}
                  alt="Testimonial User Image"
                  width={100}
                />
                <h3>Ashleynguci</h3>
              </div>
              <p className="testimonials-text">
                Little Lemon&apos;s menu offers a delightful variety. A
                must-visit for food enthusiasts!
              </p>
            </article>
          </div>
        </section>

        <section id="about">
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
          </div>
        </section>
      </main>
      <footer id="footer">
        <div className="footer-flex-container">
          <div></div>
          <div className="footer-item-flex-container">
            <h2>Navigation</h2>
            <ul className="footer-list">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="footer-item-flex-container">
            <h2>Contact</h2>
            <ul className="footer-list">
              <li>61, Sillicon Valley.</li>
              <li>+60-12 3456789</li>
              <li>littlelemon@restaurant.com</li>
            </ul>
          </div>
          <div className="footer-item-flex-container">
            <h2>Social Media Links</h2>
            <ul className="footer-list">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
