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

  if(getUserAppointments.isSuccessful) {
    console.log('Check: ' + getUserAppointments.appointments);
  }

  const getRows = data => {
    let rows = [];

    data && data.map((appointment, i) => (
      rows.push({
        id: i + 1,
      })
    ));
    return rows;
  }

  if(!getUserAppointments.isSuccessful) {
    return <PageSpinner />
  }
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'View Appointments', active: true }]} 
    >
    <div style={{overflowX:'auto'}}>
     <CustomTable
        pagination
        pagerows
        columns={[
          {
            id: 'id',
            label: 'ID',
            minWidth: 20,
            color: value => 'blue',
          },
          {
            id: 'message',
            label: 'Appointment Message',
            minWidth: 150,
            color: value => 'blue',
          },
          {
            id: 'dateScheduled',
            label: 'Appointment Date',
            minWidth: 150,
            color: value => 'blue',
          },
          {
            id: 'status',
            label: 'Status',
            minWidth: 100,
            color: value => 'blue',
          },
          {
            id: 'dateCreated',
            label: 'Date Created',
            minWidth: 100,
            color: value => 'black',
          },
        ]}
        rows={getRows(getUserAppointments.appointments)}
      /> 
      </div>
    </Page>
  )
}