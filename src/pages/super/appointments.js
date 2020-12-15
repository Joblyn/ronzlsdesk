import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAppointments } from '../../actions/admin/clients/Clients';
import {
  getClientAppointments,
} from '../../apiConstants/apiConstants';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';

export default function Appointments() {
  const dispatch = useDispatch();
  const adminGetAppointments = useSelector(state => state.adminGetAppointments);

  useEffect(() => {
    dispatch(getAppointments(getClientAppointments));
  }, []);

  useEffect(() => {
    if (adminGetAppointments.isSuccessful) {
      console.log(adminGetAppointments.appointments);
    }
  }, [adminGetAppointments]);

  const getRows = appointments => {
    let rows = [];
    appointments &&
      appointments.reverse().map((appointment, i) =>{
        let status;
        let date;
        if(appointment.status) {
          status = appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1); 
        }
        if (appointment.appointmentDate) {
          date = appointment.appointmentDate.slice(0, 10);
        }
        return rows.push({
          id: i + 1,
          client: appointment.client.companyName,
          message: appointment.appointmentMessage || '- -',
          dateScheduled: date,
          status: status || 'Pending',
          dateCreated: appointment.created_dt.slice(0, 10),
        })}
      );
    return rows;
  };

  if (!adminGetAppointments.isSuccessful) {
    return <PageSpinner />;
  }
  
  return (
    <>
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
                color: value => 'blue',
              },
            ]}
            rows={getRows(adminGetAppointments.appointments)}
          />
        </div>
      </Page>
    </>
  );
}
