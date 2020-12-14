import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';

import {
  confirmClientAppointment,
  getClientAppointments,
} from '../../apiConstants/apiConstants';
import {
  confirmAppointment,
  getAppointments,
} from '../../actions/admin/clients/Clients';
import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';

export default function AdminAppointments() {
  const dispatch = useDispatch();
  const adminGetAppointments = useSelector(state => state.adminGetAppointments);
  // const adminConfirmAppointment = useSelector(
    // state => state.adminConfirmAppointment,
  // );

  useEffect(() => {
    dispatch(getAppointments(getClientAppointments));
  }, []);

  const onConfirmAppointment = id => {
    let endpoint = confirmClientAppointment + id;
    const payload = {
      appointment_id: id,
    };
    console.log(endpoint);
    dispatch(confirmAppointment(endpoint, payload));
  };

  const getRows = appointments => {
    let rows = [];
    console.log(appointments);
    appointments &&
      appointments.reverse().map((appointment, i) =>
        rows.push({
          id: i + 1,
          client: appointment.client.companyName,
          message: appointment.appointmentMessage,
          dateScheduled: appointment.appointmentDate,
          dateCreated: appointment.created_dt,
          action: (
            <Button
              className="bg-green-700 text-white rounded-full m-0"
              onClick={() => onConfirmAppointment(appointment._id)}
            >
              Confirm
            </Button>
          ),
        }),
      );
    return rows;
  };

  if (!adminGetAppointments.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Appointments', active: true }]}
    >
      <div style={{ overflowX: 'auto' }}>
        <CustomTable
          pagination
          pagerows
          columns={[
            {
              id: 'id',
              label: 'ID',
              align: 'center',
              minWidth: 20,
              color: value => 'blue',
            },
            {
              id: 'client',
              label: 'Client',
              align: 'center',
              minWidth: 150,
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
              minWidth: 100,
              color: value => 'blue',
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
              align: 'center',
              label: 'Date Created',
              minWidth: 100,
              color: value => 'black',
            },
            {
              id: 'action',
              label: 'Actions',
              minWidth: 100,
              align: 'center',
              color: value => 'green',
            },
          ]}
          rows={getRows(adminGetAppointments.appointments)}
        />
      </div>
    </Page>
  );
}
