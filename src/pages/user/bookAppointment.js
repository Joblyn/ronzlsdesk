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
  const [date, setDate] = useState(today);
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
    if (date === today) {
      return alert('Please set a date beyond today.')
    }
    let year = date.getFullYear();
    let m = date.getMonth()+1;
    let d = date.getDate();
    let month = (m < 10) ? `0${m}` : m; 
    let newDate = (d.toString().length < 2) ? `0${d}` : d;
    const payload = {
      appointmentDate: `${year}-${month}-${newDate}`,
      appointmentMessage: message
    };
    // .toDateString()
    dispatch(bookAppointment(userBookAppointmentWithAdmin, payload));
  }

  if(userBookAppointment.isSuccessful) {
    alert(`Booked an appoinment with account officer on ${date.toDateString()}`);
  }

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Create Appointment', active: true }]} 
    >
    <main className="appt-main">
      <Form className="appt-form" id="appt-form" onSubmit={handleSubmit}>
        <FormGroup className="form-group w-100">
          <InputField 
            type="text"
            name="message"
            placeholder="Appointment Message"
            className="mt-2"
            onChange={({ target }) => setMessage(target.value)}
          />
        </FormGroup>
        <div className="calender w-100">
          <InfiniteCalendar
            selected={date}
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
            onSelect={date => setDate(new Date(date))}
          />
        </div>
        <Button className="button mt-3" form="appt-form" type="submit" style={{ fontSize: '1rem'}} disabled={isInvalid}>Book Appointment</Button>
      </Form>
    </main>
    </Page>
  )
}