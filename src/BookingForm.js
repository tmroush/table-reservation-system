import {useReducer} from 'react';
import {useState} from 'react';

const BookingForm = ({availableTimes, dispatcher, submitAction}) => {

    // setting up some variables to use.
    const todaysDate = new Date().toISOString().split('T')[0];
    const minGuests = 1;
    const maxGuests = 10;
    const occasions = ["none", "Birthday", "Anniversary", "Retirement", "Other"]
    
    const [ date, setDate ] = useState(todaysDate);
    const [ time, setTime ] = useState(availableTimes[0]);
    const [ guests, setGuests ] = useState("2");
    const [ occasion, setOccasion ] = useState(occasions[0]);

    const dateChanged = (e) => {
        setDate(e.target.value);
        dispatcher(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        submitAction({ date, time, guests, occasion, });
    }

    return ( 
        <div className="booking-form">
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" 
                       id="res-date" 
                       name="res-date"
                       value={date}
                       onChange={e => dateChanged(e)}
                       />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} required={true} onChange={e => setTime(e.target.Value)}> 
                    {availableTimes.map((t) => <option id="res-time-option" key={t}>{t}</option> )}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" 
                       name="guests"
                       value={guests}
                       onChange={e => setGuests(e.target.value)}
                       placeholder="1" min={minGuests} max={maxGuests} id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} required={true} onChange={e => setOccasion(e.target.value)}>
                    {occasions.map((o) => <option id="occasion-option" key={o}>{o}</option>)}
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </div>
    );
}

export default BookingForm;