const Footer = () => {
  return (
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
  );
};

export default Footer;
