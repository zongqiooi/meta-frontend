import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ReservationsPage from "./pages/ReservationsPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/reservations" element={<ReservationsPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
