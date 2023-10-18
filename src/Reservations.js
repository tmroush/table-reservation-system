
import { useReducer } from 'react';
import BookingForm from './BookingForm.js';
import { fetchAPI, submitAPI } from './dataGenerator.js';
import { useNavigate } from "react-router-dom";


const updateTimes = (availableTimes, date) => {
    return fetchAPI(new Date(date));
}

const initializeTimes = () => {
    const todaysDate = new Date().toISOString().split('T')[0];
    return fetchAPI(new Date(todaysDate));
}

function Reservations() {

    const navigate = useNavigate();

    const submitData = formData => {
        if (submitAPI(formData)) {
            navigate('/ConfirmBooking');
       };
    }

    const [ availableTimes, dispatch ] = useReducer(updateTimes, [], initializeTimes);

    return (
        <div className="reservations">
            <h1>Reserve a Table</h1>
            <BookingForm availableTimes={availableTimes} dispatcher={dispatch} submitAction={submitData }/>
        </div>
    )
}

export default Reservations;