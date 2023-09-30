/* eslint-disable react/prop-types */
import {
  Input,
  Select,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ChefImg1 from "../assets/restaurant chef B.jpg";
import ChefImg2 from "../assets/Mario and Adrian A.jpg";
import ChefImg3 from "../assets/Mario and Adrian b.jpg";
import { Link } from "react-router-dom";

const ReservationsForm = ({ availableTimes, updateTimes }) => {
  const [guestNum, setGuestNum] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const guestNumCheck = () => {
      if (guestNum < 1 || guestNum > 10) {
        console.log("Please enter 1 to 10 guest numbers.");
        return false;
      }

      return true;
    };

    const dateCheck = () => {
      if (date === "") {
        console.log("Please select a date.");
        return false;
      }

      return true;
    };

    const timeCheck = () => {
      if (time === "") {
        console.log("Please select a time.");
        return false;
      }

      return true;
    };

    const occasionCheck = () => {
      if (occasion === "") {
        console.log("Please select an occasion.");
        return false;
      }

      return true;
    };

    const checkForm = () => {
      let check1 = guestNumCheck();
      let check2 = dateCheck();
      let check3 = timeCheck();
      let check4 = occasionCheck();

      if (
        check1 === false ||
        check2 === false ||
        check3 === false ||
        check4 === false
      ) {
        return false;
      } else {
        return true;
      }
    };

    let isFormValid = checkForm();

    if (isFormValid === true) {
      setFormValid(isFormValid);
    } else {
      setFormValid(isFormValid);
    }
  }, [guestNum, date, time, occasion]);

  return (
    <>
      <div className="reservations-top">
        <h1 className="reservations-header">Reservations</h1>
        <FormControl isRequired>
          <div className="reservations-form">
            <div className="reservations-input">
              <FormLabel htmlFor="res-date">Choose date</FormLabel>
              <Input
                value={date}
                onChange={(event) => setDate(event.target.value)}
                type="date"
                id="res-date"
                data-test-id="res-date"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div className="reservations-input">
              <FormLabel htmlFor="res-time">Choose time</FormLabel>
              <Select
                value={time}
                onChange={(event) => setTime(event.target.value)}
                placeholder="Select a time"
                id="res-time"
                data-test-id="res-time"
                style={{ backgroundColor: "white" }}
              >
                {availableTimes.map((time, idx) => (
                  <option key={idx} value={time}>
                    {time}
                  </option>
                ))}
              </Select>
            </div>
            <div className="reservations-input">
              <FormLabel htmlFor="guests">Number of guests</FormLabel>
              <Input
                value={guestNum}
                onChange={(event) => setGuestNum(event.target.value)}
                placeholder="1 to 10"
                min="1"
                max="10"
                id="guests"
                data-test-id="guests"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div className="reservations-input">
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select
                value={occasion}
                onChange={(event) => setOccasion(event.target.value)}
                placeholder="Select an occasion"
                id="occasion"
                data-test-id="occasion"
                style={{ backgroundColor: "white" }}
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Select>
            </div>
          </div>
          <br />
          <div className="reservations-submit-button">
            <Button
              aria-label="On Click"
              onClick={(e) => {
                e.preventDefault();
                updateTimes(time);
              }}
              type="submit"
              colorScheme="yellow"
              isDisabled={!formValid}
            >
              <Link
                to="/confirmed"
                state={{
                  guestNum: guestNum,
                  date: date,
                  time: time,
                  occasion: occasion,
                }}
              >
                Make Your Reservations
              </Link>
            </Button>
          </div>
        </FormControl>
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
