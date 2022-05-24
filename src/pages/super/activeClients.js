import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Page from '../../components/Page';
import CustomTable from '../../components/table/CustomTable';
import { getClient } from '../../actions/admin/clients/Clients';
import { getAllClients } from '../../apiConstants/apiConstants';
import PageSpinner from '../../components/PageSpinner';
import ExcelTable from '../../components/ExportToExcel';

export default function ActiveClients() {
  const dispatch = useDispatch();
  const adminGetClient = useSelector(state => state.adminGetAllClient);

  useEffect(() => {
    dispatch(getClient(getAllClients));
  }, [dispatch]);

  const viewDetails = id => {
    localStorage.setItem('client_id', id);
  };

  const getRows = data => {
    let rows = [];
    let active = data.filter(client => client.accountStatus === 'active');

    active &&
      active.reverse().map((client, i) => {
        let admin = '- -';
        if (client.accountOfficer) {
          admin = client.accountOfficer.fullName;
        }
        return rows.push({
          id: i + 1,
          client: client.director[0].fullName,
          companyName: client.companyName || '- -',
          accountType: client.accountType,
          admin: admin,
          companyAddress: client.companyAddress,
          phoneNumber: client.phoneNumber,
          email: client.email,
          website: client.websiteUrl,
          actions: (
            <Link
              onClick={() => viewDetails(client._id)}
              to={`/superadmin/client/details/userId=${client._id}`}
              className="button bg-green-700 text-white rounded-full px-2 py-2"
            >
              View Details
            </Link>
          ),
        });
      });
    return rows;
  };

  if (!adminGetClient.isSuccessful) {
    return <PageSpinner />;
  }

  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Clients/Active', active: true }]}
    >
      {adminGetClient.users.filter(cl => cl.accountStatus === 'active')
        .length ? (
        <>
          <ExcelTable
            exportData={adminGetClient.users.filter(
              cl => cl.accountStatus === 'active',
            )}
            id="clients"
            fileName="clientsFile"
            className="m-2"
            exportHead="ACTIVE CLIENTS"
          />
          <div
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
                  id: 'admin',
                  label: 'Admin',
                  minWidth: 150,
                  align: 'center',
                  color: value => 'blue',
                },
                {
                  id: 'actions',
                  label: 'Actions',
                  minWidth: 150,
                  align: 'center',
                  color: value => 'blue',
                },
              ]}
              rows={getRows(adminGetClient.users)}
            />
          </div>
        </>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: '50vh' }}
        >
          <em style={{ fontSize: '1.2rem', opacity: '.75' }}>
            There are no active clients.
          </em>
        </div>
      )}
    </Page>
  );
}
