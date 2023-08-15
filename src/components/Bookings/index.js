import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import BookingForm from './BookingForm';
import img1 from "../../Assets/restaurant chef B.jpg";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const [
    availableTimes,
    dispatchOnDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate("/confirmedbooking");
  };
  console.log(availableTimes);
  return (
    <>
    <h1 className='page-title'>Reservation</h1>
    <div className="bookings">
      <div className="bookings">
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
          className="reservation-form"
        />
      </div>
      <div className="image-container">
        <img src={img1} alt="this is a test image" height={45} />
      </div>
    </div>
    </>
  );
};

export default Bookings;
