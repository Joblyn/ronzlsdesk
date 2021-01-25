import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Page from 'components/Page';
import CustomTable from '../../components/table/CustomTable';
import { getClientsUnderAdmin } from '../../apiConstants/apiConstants';
import { adminGetClients } from '../../actions/admin/clients/Clients';
import PageSpinner from '../../components/PageSpinner';

export default function AdminClients() {
  const dispatch = useDispatch();
  const getClientsForAdmin = useSelector(state => state.getClientsForAdmin);

  useEffect(() => {
    dispatch(adminGetClients(getClientsUnderAdmin));
  }, []);

  const handleClick = id => {
    localStorage.setItem('client_id', id);
  };

  const getRows = data => {
    let rows = [];
    data &&
      data.reverse().map((client, i) => {
        let status = 'Prospect'; 
        let color;
        if(client.accountStatus) {
          status =
            client.accountStatus.charAt(0).toUpperCase() +
            client.accountStatus.slice(1);
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
        return rows.push({
          id: i + 1,
          client: client.director[0].fullName,
          companyName: client.companyName || '- -',
          accountType: client.accountType,
          companyAddress: client.companyAddress,
          phoneNumber: client.phoneNumber,
          email: client.email,
          website: client.websiteUrl,
          status: <p style={{color}}>{status}</p>,
          view: (
            <Link
              onClick={() => handleClick(client._id)}
              to={`/admin/client/details/userID=${client._id}`}
              className="bg-green-700 text-white rounded-full px-2 py-2"
            >
              View Details
            </Link>
          ),
        });
      });
    return rows;
  };

  if (!getClientsForAdmin.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page title="Dropdowns" breadcrumbs={[{ name: 'Clients', active: true }]}>
      <div
        style={{
          overflowX: 'auto',
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
              label: 'ID',
              align: 'center',
              minWidth: 20,
              color: value => 'blue',
            },
            {
              id: 'client',
              label: 'Client',
              align: 'center',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'accountType',
              label: 'Account Type',
              align: 'center',
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
              label: 'Status',
              minWidth: 100,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'view',
              label: 'Actions',
              minWidth: 150,
              align: 'center',
              color: value => 'blue',
            },
          ]}
          rows={getRows(getClientsForAdmin.clients)}
        />
      </div>
    </Page>
  );
}
