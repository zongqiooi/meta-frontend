/* eslint-disable react/prop-types */
import ReservationsForm from "../components/ReservationsForm";

const ReservationsPage = ({ availableTimes, updateTimes }) => {
  return (
    <>
      <ReservationsForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
      />
    </>
  );
};

export default ReservationsPage;
