import { Input, Select, Button } from "@chakra-ui/react";
import { useState } from "react";
import ChefImg1 from "../assets/restaurant chef B.jpg";
import ChefImg2 from "../assets/Mario and Adrian A.jpg";
import ChefImg3 from "../assets/Mario and Adrian b.jpg";

const ReservationsForm = () => {
  const [guestNum, setGuestNum] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occassion, setOccassion] = useState("");
  const availableTimes = [
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  return (
    <>
      <div className="reservations-top">
        <h1 className="reservations-header">Reservations</h1>
        <form>
          <div className="reservations-form">
            <div className="reservations-input">
              <label htmlFor="res-date">Choose date</label>
              <Input
                value={date}
                onChange={(event) => setDate(event.target.value)}
                type="date"
                id="res-date"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div className="reservations-input">
              <label htmlFor="res-time">Choose time</label>
              <Select
                value={time}
                onChange={(event) => setTime(event.target.value)}
                placeholder="Select a time"
                id="res-time"
                style={{ backgroundColor: "white" }}
              >
                {availableTimes.map((time, idx) => (
                  <option key={idx} value={time}>
                    {time}
                  </option>
                ))}

                {/* <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option> */}
              </Select>
            </div>
            <div className="reservations-input">
              <label htmlFor="guests">Number of guests</label>
              <Input
                value={guestNum}
                onChange={(event) => setGuestNum(event.target.value)}
                placeholder="1 to 10"
                min="1"
                max="10"
                id="guests"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div className="reservations-input">
              <label htmlFor="occasion">Occasion</label>
              <Select
                value={occassion}
                onChange={(event) => setOccassion(event.target.value)}
                placeholder="Select an occasion"
                id="occasion"
                style={{ backgroundColor: "white" }}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Select>
            </div>
          </div>
          <br />
          <div className="reservations-submit-button">
            <Button type="submit" colorScheme="yellow">
              Make Your reservation
            </Button>
          </div>
        </form>
      </div>

      <div className="reservations-bottom">
        <div className="image-container">
          <img src={ChefImg1} alt="Cheg Image 1" width={400} />
        </div>
        <div className="image-container">
          <img src={ChefImg2} alt="Cheg Image 2" width={400} />
        </div>
        <div className="image-container">
          <img src={ChefImg3} alt="Cheg Image 3" width={400} />
        </div>
      </div>
    </>
  );
};

export default ReservationsForm;
