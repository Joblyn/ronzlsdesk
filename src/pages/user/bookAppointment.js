import React, { useEffect, useState } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import { getColor } from 'utils/colors';
import { Button, Form, FormGroup } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import InputField from '../../components/InputField';
import Page from 'components/Page';
import { bookAppointment } from '../../actions/user/Users';
import { userBookAppointmentWithAdmin } from '../../apiConstants/apiConstants';

export default function CreateAppointment() {
  const primaryColor = getColor('primary');
  const secondaryColor = getColor('secondary');
  
  const today = new Date();
  const [date, setDate] = useState(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const userBookAppointment = useSelector(state => state.userBookAppointment);

  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isInvalid = date === '' || message === '';

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      appointmentDate: date,
      appointmentMessage: message
    };
    console.log(payload);
    dispatch(bookAppointment(userBookAppointmentWithAdmin, payload));
  }

  if(userBookAppointment.isSuccessful) {
    alert(`Successfully booked appointment with admin on ${date}`);
    console.log(userBookAppointment.result);
  }

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Create Appointment', active: true }]} 
    >
    <main className="appt-main">
      <Form className="appt-form" id="appt-form" onSubmit={handleSubmit}>
        <div className="calender">
          <InfiniteCalendar
            selected={today}
            minDate={lastWeek}
            width={'100%'}
            height={300}
            theme={{
              accentColor: primaryColor,
              floatingNav: {
                background: secondaryColor,
                chevron: primaryColor,
                color: '#FFF',
              },
              headerColor: primaryColor,
              selectionColor: secondaryColor,
              textColor: {
                active: '#FFF',
                default: '#333',
              },
              todayColor: secondaryColor,
              weekdayColor: primaryColor,
            }}
            onSelect={date => setDate(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)}
          />
        </div>
        <FormGroup className="form-group">
          <InputField 
            required
            type="text"
            name="message"
            placeholder="Appointment Message"
            className="inp mt-2"
            onChange={({ target }) => setMessage(target.value)}
          />
        </FormGroup>
        <Button className="button mt-3" form="appt-form" type="submit" style={{ fontSize: '1rem'}} disabled={isInvalid}>Book Appointment</Button>
      </Form>
    </main>
    </Page>
  )
}