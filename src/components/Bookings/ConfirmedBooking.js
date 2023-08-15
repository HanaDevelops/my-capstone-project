import {FiCheckCircle} from "react-icons/fi"

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FiCheckCircle className="checked-icon" size={50}/>
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;
