import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';
import { getClient } from '../../actions/admin/clients/Clients';
import {
  addUserToAdmin,
  baseUrl,
  getAllClients,
  superAdminGetAllAdmins,
  uploadBulkUsers,
} from '../../apiConstants/apiConstants';
import { Button } from 'reactstrap';
import { Form, Label } from 'reactstrap';
import InputField from '../../components/InputField';
import {
  getAllAdmins,
  superAdminAddClientToAdmin,
} from '../../actions/admin/authAction/Users';

import ExcelTable from '../../components/ExportToExcel';
import nProgress from 'nprogress';

const AdminClient = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState({});
  const [client, setclient] = useState({});
  const adminGetClient = useSelector(state => state.adminGetAllClient);
  const admins = useSelector(state => state.superAdminGetAllAdmins.admins);
  const AddClientToAdmin = useSelector(state => state.superAdminAddClientToAdmin);

  useEffect(() => {
    dispatch(getClient(getAllClients));
  }, []);

  useEffect(() => {
    if (AddClientToAdmin.isSuccessful) {
      alert(`Added ${client.name} to Account Officer- ${selectedAdmin.name}`);
      setShowModal(false);
      window.location.reload();
    }
  }, [AddClientToAdmin]);

  const viewDetails = id => {
    localStorage.setItem('client_id', id);
  };
  
  const handleClick = (id, name) => {
    setclient({ id, name });
    setShowModal(true);
    dispatch(getAllAdmins(superAdminGetAllAdmins));
  };

  const handleSelect = (id, name) => {
    setSelectedAdmin({ id, name });
  };

  const assignAdmin = () => {
    const endpoint = addUserToAdmin + selectedAdmin.id;
    const payload = { users: [client.id] };
    dispatch(superAdminAddClientToAdmin(endpoint, payload));
  };
  
  const getRows = data => {
    let rows = [];
    data &&
    data.reverse().map((user, index) => {
        let admin;
        let status;
        let color;
        if (user.accountOfficer) {
          admin = user.accountOfficer.fullName;
        }
        if (user.accountStatus) {
          status =
          user.accountStatus.charAt(0).toUpperCase() +
          user.accountStatus.slice(1);
        }
        switch (status) {
          case 'Prospect':
            color = 'orange';
            break;
          case 'Active':
            color = 'green';
            break;
          case 'Inactive':
            color = 'red';
            break;
            default:
              color = '';
            }
            return rows.push({
              id: index + 1,
          client: user.companyName,
          accountType: user.accountType,
          admin: admin || '- -',
          companyAddress: user.companyAddress,
          phoneNumber: user.phoneNumber,
          status: <p style={{ color }}>{status}</p>,
          email: user.email,
          website: user.websiteUrl,
          actions: (
            <div className="d-flex justify-content-around">
              <Link
                onClick={() => viewDetails(user._id)}
                to={`/superadmin/client/details/userId=${user._id}`}
                className="button bg-green-700 text-white rounded-full px-2 py-2"
                style={{ minWidth: '110px' }}
              >
                View Details
              </Link>
              <Button
                color="secondary"
                size="sm"
                className="p-1"
                style={{ fontSize: '.9rem', minWidth: '110px' }}
                onClick={() => handleClick(user._id, user.companyName)}
                disabled={user.accountOfficer ? true : false}
              >
                Assign Admin
              </Button>
            </div>
          ),
        });
      });
    return rows;
  };

  const handleUpload = target => {
    if (target.files) {
      if (target.files.length !== 0) {
        const formData = new FormData();
        formData.append('BulkExcel', target.files[0]);
        const endpoint = baseUrl + uploadBulkUsers;
        const token = localStorage.getItem('jwtToken');
        const bearerToken = 'Bearer ' + token;
        nProgress.start();
        fetch(endpoint, {
          method: 'POST',
          body: formData,
          credentials: 'same-origin',
          headers: new Headers({
            Authorization: bearerToken,
          }),
        })
          .then(res => res.json())
          .then(data => {
            alert('Users added successfully!');
            nProgress.done();
            nProgress.remove();
          })
          .catch(err => {
            alert('Opps, An error occurred, please try again!');
            console.error();
            nProgress.done();
            nProgress.remove();
          });
      }
    }
  };

  if (adminGetClient.users.length === 0) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Clients', active: true }]}
    >
      <div className="d-flex align-items-center cursor-pointer">
        <Button
          color="success"
          className="m-2 position-relative"
          style={{
            borderRadius: '0',
          }}
        >
          IMPORT CLIENTS
          <InputField
            className="position-absolute left-0 top-0 opacity-0 z-10 w-100 h-100"
            type="file"
            onChange={({ target }) => handleUpload(target)}
            style={{
              cursor: 'pointer!important',
            }}
          />
        </Button>
        <ExcelTable
          exportData={adminGetClient.users}
          id="clients"
          fileName="clientsFile"
          className="m-2"
          exportHead="ALL CLIENTS"
        />
      </div>
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
              id: 'admin',
              label: 'Admin',
              minWidth: 150,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'actions',
              label: 'Actions',
              minWidth: 'fit-content',
              align: 'center',
              color: value => 'blue',
            },
          ]}
          rows={getRows(adminGetClient.users)}
        />

        {showModal && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-center p-4 border-b border-solid border-gray-300 rounded-t">
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: 'rgba(0,0,0,.7)' }}
                    >
                      Select Admin to assign
                    </h3>
                  </div>
                  <div
                    className="relative p-0 flex-auto"
                    style={{ color: 'black' }}
                  >
                    {admins.length !== 0 && (
                      <Form
                        className="p-0 overflow-y-auto"
                        style={{ maxHeight: '300px' }}
                      >
                        {admins.map((admin, i) => (
                          <div
                            className="border-b border-solid border-gray-300 cursor-pointer"
                            key={`admin-${i + 1}`}
                          >
                            <InputField
                              className="m-3"
                              type="radio"
                              id={admin.fullName + i + 1}
                              name="admins"
                              value={admin._id}
                              onChange={() =>
                                handleSelect(admin._id, admin.fullName)
                              }
                            />
                            <Label
                              className="cursor-pointer"
                              for={admin.fullName + i + 1}
                            >
                              {admin.fullName}
                            </Label>
                          </div>
                        ))}
                      </Form>
                    )}
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    {selectedAdmin.id && (
                      <button
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 assign"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                        onClick={assignAdmin}
                      >
                        Assign
                      </button>
                    )}
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </div>
    </Page>
  );
};

export default AdminClient;
