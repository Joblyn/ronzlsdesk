import React from 'react';
import { useSelector } from 'react-redux';

import Page from '../../components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';
import { Link } from 'react-router-dom';

export default function AdminClients(props) {
  const { adminId } = props.match.params;
  const clients = useSelector(state => state.adminClients.clients);
  console.log(clients);

  const viewDetails = id => {
    localStorage.setItem('client_id', id);
  };

  const getRows = clients => {
    let rows = [];

    clients &&
      clients.reverse().map((client, i) =>{
        let status = 'Prospect';
        let color;
        if(client) {
          status =  client.accountStatus && (client.accountStatus.charAt(0).toUpperCase() + client.accountStatus.slice(1));
        }
        switch(status) {
          case 'Prospect':
            color = 'orange';
           break
          case 'Active':
            color = 'green';
            break
          case 'Inactive':
            color = 'red';
            break
          default :
            color = '';
        }
        return client && rows.push({
          id: i + 1,
          client: client.director[0].fullName,
          companyName: client.companyName || '- -',
          accountType: client.accountType,
          companyAddress: client.companyAddress,
          status: <p style={{color}}>{status}</p>,
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
        })}
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
      {clients.length ? <div
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
        }}
      >
        <CustomTable
          pagination
          pagerows
          search
          searchType="client"
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
              id: 'companyName',
              align: 'center',
              label: 'Company Name',
              minWidth: 100,
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
              id: 'status',
              label: 'status',
              minWidth: 100,
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
      </div> : <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: '50vh' }}
        >
          <em style={{ fontSize: '1.2rem', opacity: '.75' }}>
            No clients have been assigned to this admin.
          </em>
        </div>}
    </Page>
  );
}
