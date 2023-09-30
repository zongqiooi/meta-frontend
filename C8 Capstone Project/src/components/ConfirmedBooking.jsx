import {
  Card,
  Heading,
  CardHeader,
  CardFooter,
  CardBody,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  let { state } = useLocation();

  return (
    <>
      <div
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "lightgrey",
        }}
      >
        <Card
          align="center"
          style={{
            maxWidth: "50vw",
            margin: "0 auto",
          }}
        >
          <CardHeader>
            <Heading size="md">
              Thank you! Table is successfully reserved.
            </Heading>
          </CardHeader>
          <CardBody maxH="auto" direction="left">
            <Text as="u">Here is your booking details:</Text>
            <Text>Guest Number: {state.guestNum}</Text>
            <Text>Date: {state.date}</Text>
            <Text>Time: {state.time}</Text>
            <Text>Occasion: {state.occasion}</Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="yellow">
              <Link to="/">Go back to Home Page</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default ConfirmedBooking;
