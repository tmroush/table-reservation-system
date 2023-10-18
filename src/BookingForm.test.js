import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking form', () => {

    const availableTimes = ['12:00', '12:30'];
    const dispatcher = jest.fn();
    const submitData = jest.fn();
    const testDate = new Date().toISOString().split('T')[0];

    test('Check that all elements have their default values', () => {
        render(
            <BookingForm availableTimes={availableTimes} dispatcher={dispatcher} />
        );

        const dateInput = screen.getByLabelText(/Choose date/);
        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute('type', 'date');
        expect(dateInput).toHaveAttribute('id', 'res-date');
        expect(dateInput).toHaveAttribute('name', 'res-date');
        expect(dateInput).toHaveValue(testDate);

        const timeInput = screen.getByLabelText(/Choose time/);
        expect(timeInput).toBeInTheDocument();
        expect(timeInput).toHaveAttribute('id', 'res-time');
        // probably need to add code here to check for the values of the selector

        const guestsInput = screen.getByLabelText(/Number of guests/);
        expect(guestsInput).toBeInTheDocument();
        expect(guestsInput).toHaveAttribute('type', 'number');
        expect(guestsInput).toHaveAttribute('id', 'guests');
        expect(guestsInput).toHaveValue(2);

        const occasionInput = screen.getByLabelText(/Occasion/);
        expect(occasionInput).toHaveAttribute('id', 'occasion');
        expect(occasionInput).toHaveValue('none');

        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
        expect(submitButton).toHaveAttribute('type', 'submit');

    });

    test('Check that default values work', () => {
        render(
            <BookingForm availableTimes={availableTimes} dispatcher={dispatcher} submitAction={submitData} />
        );

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(submitData).toHaveBeenCalledWith({
            date: testDate,
            time: availableTimes[0],
            guests: "2",
            occasion: 'none',
        });
    });

})