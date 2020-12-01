import React from 'react';

import Page from 'components/Page';

export default function ViewAppointments() {
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'View Appointments', active: true }]} 
    >
      
    </Page>
  )
}