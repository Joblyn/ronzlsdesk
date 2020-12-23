import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';

import {
  confirmClientAppointment,
  rejectClientAppointment,
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

  useEffect(() => {
    dispatch(getAppointments(getClientAppointments));
  }, []);

  const onConfirmAppointment = id => {
    let endpoint = confirmClientAppointment + id;
    const payload = {
      appointment_id: id,
    };
    dispatch(confirmAppointment(endpoint, payload));
  };

  const onRejectAppointment = id => {
    let endpoint = rejectClientAppointment + id;
    const payload = {
      appointmen_id: id,
    };
    dispatch(confirmAppointment(endpoint, payload));
  };

  const getRows = appointments => {
    let rows = [];
    appointments &&
      appointments.reverse().map((appointment, i) => {
        let status = 'Pending';
        let disabled = false;
        let color;
        if (appointment.status) {
          disabled = true;
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
        return rows.push({
          id: i + 1,
          client: appointment.client.companyName,
          message: appointment.appointmentMessage,
          dateScheduled: appointment.appointmentDate.slice(0, 10),
          status: <p style={{ color }}>{status}</p>,
          dateCreated: appointment.created_dt.slice(0, 10),
          action: (
            <div className="d-flex justify-content-around">
              <Button
                className="bg-green-700 text-white rounded-full m-0 p-1"
                size="sm"
                disabled={disabled}
                style={{ fontSize: '.9rem', minWidth: '90px' }}
                onClick={() => onConfirmAppointment(appointment._id)}
              >
                Confirm
              </Button>
              <Button
                color="danger"
                size="sm"
                className="bg-green-700 text-white rounded-full m-0 p-1"
                disabled={disabled}
                style={{ fontSize: '.9rem', minWidth: '90px' }}
                onClick={() => onRejectAppointment(appointment._id)}
              >
                Reject
              </Button>
            </div>
          ),
        });
      });
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
          search
          searchType="client"
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
              fontSize: '1.2rem!important',
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
              minWidth: 150,
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
