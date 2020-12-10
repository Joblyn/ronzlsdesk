import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';
import { getClient } from '../../actions/admin/clients/Clients';
import { getAllClients } from '../../apiConstants/apiConstants';

const AdminClient = () => {
  const dispatch = useDispatch();
  const adminGetClient = useSelector(state => state.adminGetAllClient);
  
  const handleClick = id => {
    localStorage.setItem('client_id', id);
  };
  
  useEffect(() => {
    dispatch(getClient(getAllClients));
  }, []);
  
  if (adminGetClient.isSuccessful) {
    console.log('Check: ' + adminGetClient.users);
  }

  const getRows = data => {
    let rows = [];
    
    data &&
      data.map((user, index) => (
        rows.push({
          id: index + 1,
          user: user.companyName,
          accountType: user.accountType,
          companyAddress: user.companyAddress,
          phoneNumber: user.phoneNumber,
          email: user.email,
          website: user.websiteUrl,
          view: <Link
              onClick={() => handleClick(user._id)}
              to={`/superadmin/client/details/userId=${user._id}`}
              className="bg-green-700 text-white rounded-full px-2 py-2"
            >
              View Details
            </Link>,
        })
      ));
    return rows;
  };


  if (adminGetClient.users.length === 0) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Clients', active: true }]}
    >
      <div
        style={{
          overflowX: 'auto',
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
              id: 'user',
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
              id: 'view',
              label: 'Actions',
              minWidth: 150,
              align: 'center',
              color: value => 'blue',
            },
          ]}
          rows={getRows(adminGetClient.users)}
        />
      </div>
    </Page>
  );
};

export default AdminClient;

