import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

  if(getClientsForAdmin.isSuccessful) {
    console.log(getClientsForAdmin.clients);
  }

  const getRows = data => {
    let rows = [];
    data && 
      data.map((client, i) => (
        rows.push({
          id: i + 1,
        })
      ));

      return rows;
  }

  if(!getClientsForAdmin.isSuccessful) {
    return <PageSpinner />
  } 
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Clients', active: true }]}
    >
    {!getClientsForAdmin.clients.length ? 
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
              minWidth: 20,
              color: value => 'blue',
            },

            {
              id: 'user',
              label: 'User',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'accountType',
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
              id: 'view',
              label: 'Actions',
              minWidth: 150,
              align: 'center',
              color: value => 'blue',
              type: 'link',
            },
          ]}
          rows={getRows(getClientsForAdmin.clients)}
          // handleActionClick={onActionClicked}
          // handleLinkClick={onLinkClicked}
        /> 
      </div> 
      : <div className="empty-table">
        <p><em>No clients have been assigned to you</em></p>
      </div>
    }
    </Page>
  )
}