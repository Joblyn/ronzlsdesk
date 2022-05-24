import React, { useEffect, useState } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import { getColor } from '../../utils/colors';
import { Button, Form, FormGroup } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import InputField from '../../components/InputField';
import Page from '../../components/Page';
import { bookAppointment } from '../../actions/user/Users';
import { userBookAppointmentWithAdmin } from '../../apiConstants/apiConstants';
import Label from 'reactstrap/lib/Label';
import InputDropdown from '../../components/InputDropdown';
import PopupSuccess from '../../components/popup-success';

export default function CreateAppointment() {
  const primaryColor = getColor('primary');
  const secondaryColor = getColor('secondary');

  const today = new Date();
  const [date, setDate] = useState(today);
  const [time, setTime] = useState({
    start: {
      hour: '00',
      minute: '00',
    },
    end: {
      hour: '00',
      minute: '00',
    },
  });
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();
  const userBookAppointment = useSelector(state => state.userBookAppointment);
  const userData = useSelector(state => state.userData.data);

  const lastWeek = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isInvalid = date === '' || message === '' || time === {};

  const handleSubmit = e => {
    e.preventDefault();
    if (userData.accountOfficer) {
      if (date === today) {
        return alert('Please set a date beyond today.');
      }
      let year = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      let month = m < 10 ? `0${m}` : m;
      let newDate = d.toString().length < 2 ? `0${d}` : d;
      const { start, end } = time;
      const payload = {
        appointmentDate: Date.parse(
          `${year}-${month}-${newDate}T${start.hour}:${start.minute}:00.000Z`,
        ),
        EndDate: Date.parse(
          `${year}-${month}-${newDate}T${end.hour}:${end.minute}:00.000Z`,
        ),
        appointmentMessage: message,
      };
      dispatch(bookAppointment(userBookAppointmentWithAdmin, payload));
    } else {
      setShowPopup(true);
    }
  };

  const hours = Array.from(new Array(25), (val, id) =>
    id < 10 ? `0${id}` : id,
  );
  const hourData = hours.map((hour, id) => (
    <option
      value={hour}
      key={id + 1}
      style={{ width: '2rem', fontSize: '1rem' }}
    >
      {hour}
    </option>
  ));

  const minutes = Array.from(new Array(61), (val, id) =>
    id < 10 ? `0${id}` : id,
  );
  const minutesData = minutes.map((minute, id) => (
    <option
      value={minute}
      key={id + 1}
      style={{ width: '2rem', fontSize: '1rem' }}
    >
      {minute}
    </option>
  ));

  if (userBookAppointment.isSuccessful) {
    alert(
      `Booked an appoinment with account officer on ${date.toDateString()} from ${
        time.start.hour
      }:${time.start.minute} to ${time.end.hour}:${time.end.minute}`,
    );
    window.location.pathname = '/user/view-appointments';
  }

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Create Appointment', active: true }]}
    >
      {showPopup && (
        <PopupSuccess
          button
          majorText="You have not yet been assigned to an admin."
          text="You are unable to book an appointment as you have not yet been assigned to an admin. Please wait untill you have been assigned, or contact the management."
          setShow={setShowPopup}
        />
      )}
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
              onSelect={date => {
                setDate(new Date(date));
              }}
            />
            <div className="m-3">
              <p className="font-medium">Time of Appointment</p>
              <div>
                <p className="mb-0">Start</p>
                <div className="d-flex">
                  <FormGroup className="mr-4 my-0">
                    <Label style={{ fontSize: '1.2rem' }}>Hour:</Label>
                    <InputDropdown
                      dropdownElements={hourData}
                      name="hour"
                      required
                      style={{
                        width: '5rem',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        backgroundColor: 'transparent',
                      }}
                      className="px-2"
                      onChange={({ target }) =>
                        setTime(time => ({
                          ...time,
                          start: {
                            ...time.start,
                            [target.name]: target.value,
                          },
                        }))
                      }
                    />
                  </FormGroup>
                  <FormGroup className="my-0">
                    <Label style={{ fontSize: '1.2rem' }}>Minute:</Label>
                    <InputDropdown
                      dropdownElements={minutesData}
                      name="minute"
                      required
                      style={{
                        width: '5rem',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        backgroundColor: 'transparent',
                      }}
                      className="px-2 mb-2"
                      onChange={({ target }) =>
                        setTime(time => ({
                          ...time,
                          start: {
                            ...time.start,
                            [target.name]: target.value,
                          },
                        }))
                      }
                    />
                  </FormGroup>
                </div>
                <p className="mb-0">End</p>
                <div className="d-flex">
                  <FormGroup className="mr-4 my-0">
                    <Label style={{ fontSize: '1.2rem' }}>Hour:</Label>
                    <InputDropdown
                      dropdownElements={hourData}
                      name="hour"
                      required
                      style={{
                        width: '5rem',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        backgroundColor: 'transparent',
                      }}
                      className="px-2"
                      onChange={({ target }) =>
                        setTime(time => ({
                          ...time,
                          end: {
                            ...time.end,
                            [target.name]: target.value,
                          },
                        }))
                      }
                    />
                  </FormGroup>
                  <FormGroup className="my-0">
                    <Label style={{ fontSize: '1.2rem' }}>Minute:</Label>
                    <InputDropdown
                      dropdownElements={minutesData}
                      name="minute"
                      required
                      style={{
                        width: '5rem',
                        textAlign: 'center',
                        fontSize: '1.5rem',
                        backgroundColor: 'transparent',
                      }}
                      className="px-2"
                      onChange={({ target }) =>
                        setTime(time => ({
                          ...time,
                          end: {
                            ...time.end,
                            [target.name]: target.value,
                          },
                        }))
                      }
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="button mt-3"
            form="appt-form"
            type="submit"
            style={{ fontSize: '1rem' }}
            disabled={isInvalid}
          >
            Book Appointment
          </Button>
        </Form>
      </main>
    </Page>
  );
}
