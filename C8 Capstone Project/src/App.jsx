import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ReservationsPage from "./pages/ReservationsPage";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ConfirmedBookingPage from "./pages/ConfirmedBookingPage";

function App() {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    initializeDate();
  }, []);

  const initializeDate = () => {
    setAvailableTimes([
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  };

  const updateTimes = (selectedTime) => {
    let updatedAvailableTimes = [...availableTimes];

    updatedAvailableTimes = updatedAvailableTimes.filter(
      (time) => time !== selectedTime
    );

    setAvailableTimes(updatedAvailableTimes);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/reservations"
          element={
            <ReservationsPage
              availableTimes={availableTimes}
              updateTimes={updateTimes}
            />
          }
        ></Route>
        <Route path="/confirmed" element={<ConfirmedBookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
