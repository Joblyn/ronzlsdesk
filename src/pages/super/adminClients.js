import React, { useEffect, useState } from 'react';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';
import { Link } from 'react-router-dom';

export default function AdminClients(props) {
  const { adminId, clients } = props.location.state;

  const viewDetails = id => {
    localStorage.setItem('client_id', id);
  };

  const getRows = clients => {
    let rows = [];

    clients &&
      clients.map((client, i) =>
        rows.push({
          id: i + 1,
          client: client.companyName,
          accountType: client.accountType,
          companyAddress: client.companyAddress,
          phoneNumber: client.phoneNumber,
          email: client.email,
          website: client.websiteUrl,
          action: (
            <Link
              onClick={() => viewDetails(client._id)}
              to={`/superadmin/${adminId}/clients/${client._id}`}
              className="button bg-green-700 text-white rounded-full px-2 py-2"
            >
              View Details
            </Link>
          ),
        }),
      );
    return rows;
  };

  if (clients === null) {
    return <PageSpinner />;
  }

  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Admin/Clients', active: true }]}
    >
      <div
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
      >
        <CustomTable
          pagination
          pagerows
          columns={[
            {
              id: 'id',
              align: 'center',
              label: 'ID',
              minWidth: 20,
              color: value => 'blue',
            },
            {
              id: 'client',
              align: 'center',
              label: 'Client',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'accountType',
              align: 'center',
              label: 'Account Type',
              minWidth: 50,
              color: value => 'blue',
            },
            {
              id: 'companyAddress',
              label: 'Address',
              minWidth: 150,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'phoneNumber',
              label: 'Phone Number',
              minWidth: 50,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'email',
              label: 'Email',
              minWidth: 100,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'website',
              label: 'Website',
              minWidth: 80,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'action',
              label: 'Action',
              minWidth: 150,
              align: 'center',
              color: value => 'blue',
            },
          ]}
          rows={getRows(clients)}
        />
      </div>
    </Page>
  );
}
