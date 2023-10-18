// Since the fetchAPI and submitAPI methods don't seem to be working,
// This will generate some fake data.

const fetchAPI = date => {
    let result = [];
   
    // even days get hourly start times.
    if (date.getDay() % 2 === 0) {
        result = [ "17:00", "18:00", "19:00", "20:00", "21:00" ]
    } else {
        result = [ "17:30", "18:30", "19:30", "20:30", "21:30" ]
    }
    return result;
}

const submitAPI = formData => true;

export { fetchAPI, submitAPI };