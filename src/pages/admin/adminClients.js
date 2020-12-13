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
    dispatch(adminGetClients(getClientsUnderAdmin))
  }, []);

  if (getClientsForAdmin.isSuccessful) {
    console.log(getClientsForAdmin.clients);
  }

  const handleClick = id => {
    localStorage.setItem('client_id', id);
  }

  const getRows = data => {
    let rows = [];
    data &&
      data.reverse().map((client, i) => (
        rows.push({
          id: i + 1,
          user: client.companyName,
          accountType: client.accountType,
          companyAddress: client.companyAddress,
          phoneNumber: client.phoneNumber,
          email: client.email,
          website: client.websiteUrl,
          view: <Link
              onClick={() => handleClick(client._id)}
              to={`/admin/client/details/userID=${client._id}`}
              className="bg-green-700 text-white rounded-full px-2 py-2"
            >
              View Details
            </Link>
        })
      ));
    return rows;
  }

  if (!getClientsForAdmin.isSuccessful) {
    return <PageSpinner />
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Clients', active: true }]}
    >
      <div
        style={{
          overflowX: 'auto'
        }}
      >
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
  )
}