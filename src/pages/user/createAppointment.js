import React from 'react';

import Page from 'components/Page';

export default function CreateAppointment() {
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Create Appointment', active: true }]} 
    >
      
    </Page>
  )
}