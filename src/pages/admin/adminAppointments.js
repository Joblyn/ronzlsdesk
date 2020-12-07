import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Button } from "reactstrap";

import { confirmClientAppointment, getClientAppointments } from '../../apiConstants/apiConstants';
import { confirmAppointment, getAppointments } from '../../actions/admin/clients/Clients';
import Page from 'components/Page'; 
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';

export default function AdminAppointments() {
  const dispatch = useDispatch();
  const adminGetAppointments = useSelector(state => state.adminGetAppointments);
  const adminConfirmAppointment = useSelector(state => state.adminConfirmAppointment);

  useEffect(() => {
    dispatch(getAppointments(getClientAppointments))
  }, []);

  // action to confirm appointment
  const onConfirmAppointment = () =>  {
    let appointmentId = '';
    let endpoint = confirmClientAppointment + appointmentId;
    dispatch(confirmAppointment(endpoint, appointmentId));
  };

  if(adminConfirmAppointment.isSuccessful){
    console.log(adminConfirmAppointment.result);
  }

  // const rows = [
  //   {
  //     id: 1,
  //     user: 'Job',
  //     message: "Job's Appointment",
  //     dateScheduled: '20-12-2020',
  //     status: 'pending',
  //     dateCreated: '07-12-2020',
  //     action: <Button className="bg-green-700 text-white rounded-full m-0">Confirm</Button>,
  //   }
  // ];

  const getRows = appointments => {
    let rows = [];
    appointments && appointments.map((appointment, i) => (
      rows.push({
      id: i + 1,
      })
    ));
    return rows;
  };

  if(!adminGetAppointments.isSuccessful) {
    return <PageSpinner />
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
              id: 'user',
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
              color: value => 'blue'
            },
            {
              id: 'dateCreated',
              align: 'center',
              label: 'Date Created',
              minWidth: 100,
              color: value => 'black',
            },
            //action to confirm appointment if not confirmed
            {
              id:'action',
              label: 'Actions',
              minWidth: 100,
              align: 'center',
              color: value => 'green',
              type: 'link'
            },
          ]}
          rows={getRows(adminGetAppointments.appointments)}
          handleLinkClick={onConfirmAppointment}
        />
      </div>
    </Page>
  )
}