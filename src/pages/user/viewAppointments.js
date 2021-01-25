import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAppointments } from '../../actions/user/Users';
import { userGetAppointments } from '../../apiConstants/apiConstants';
import Page from 'components/Page';
import CustomTable from '../../components/table/CustomTable';
import PageSpinner from '../../components/PageSpinner';

export default function ViewAppointments() {
  const dispatch = useDispatch();
  const getUserAppointments = useSelector(state => state.userGetAppointments);

  useEffect(() => {
    dispatch(getAppointments(userGetAppointments));
  }, []);

  const getRows = data => {
    let rows = [];
    data &&
      data.reverse().map((appointment, i) => {
        let status = 'Pending';
        let color;
        if (appointment.status) {
          status =
            appointment.status.charAt(0).toUpperCase() +
            appointment.status.slice(1);
        }
        switch (status) {
          case 'Pending':
            color = 'orange';
            break;
          case 'Confirmed':
            color = 'green';
            break;
          case 'Rejected':
            color = 'red';
            break;
          default:
            color = '';
        }
        let date = new Date(parseInt(appointment.appointmentDate));
        let scheduledDate = date.toDateString();
        let startTime = date.toTimeString();
        let endTime = new Date(parseInt(appointment.EndDate));
        endTime = endTime.toTimeString();
        return rows.push({
          id: i + 1,
          message: appointment.appointmentMessage || '- -',
          dateScheduled: scheduledDate,
          timeStart: startTime.slice(0, 5),
          timeEnd: endTime.slice(0, 5),
          dateCreated: appointment.created_dt.slice(0, 10),
          status: <p style={{color}}>{status}</p>,
        });
      });
    return rows;
  };

  if (!getUserAppointments.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'View Appointments', active: true }]}
    >
      <div style={{ overflowX: 'auto' }}>
        <CustomTable
          pagination
          pagerows
          search
          searchType="message"
          columns={[
            {
              id: 'id',
              label: 'ID',
              align: 'center',
              minWidth: 20,
              color: value => 'blue',
            },
            {
              id: 'message',
              label: 'Appointment Message',
              align: 'center',
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'dateScheduled',
              label: 'Date Scheduled',
              align: 'center',
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'timeStart',
              label: ' Start Time',
              align: 'center',
              minWidth: 100,
              color: value => 'blue'
            },
            {
              id: 'timeEnd',
              label: ' End Time',
              align: 'center',
              minWidth: 100,
              color: value => 'blue'
            },
            {
              id: 'status',
              label: 'Status',
              align: 'center',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'dateCreated',
              label: 'Date Created',
              align: 'center',
              minWidth: 100,
              color: value => 'black',
            },
          ]}
          rows={getRows(getUserAppointments.appointments)}
        />
      </div>
    </Page>
  );
}
