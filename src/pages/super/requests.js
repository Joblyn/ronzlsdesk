import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';

import { getAllRequests } from '../../actions/admin/clients/Clients';
import { adminGetRequests } from '../../apiConstants/apiConstants';

export default function Requests() {
  const dispatch = useDispatch();
  const adminGetAllRequests = useSelector(state => state.getAllRequests);

  const handleClick2 = id => {
  };
  const onLinkClicked = (e, payload) => {
  };

  useEffect(() => {
    dispatch(getAllRequests(adminGetRequests));
  }, []);

  const getRows = data => {
    let rows = [];
    // console.log('Data: ' + JSON.stringify(data));
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
          view: (<Link
              // to={`/admin/client/details/${user._id}`}
              onClick={() => handleClick2(user._id)}
              to={`/superadmin/client/details/userId=${user._id}`}
              className="bg-green-700 text-white rounded-full px-2 py-2"
            >
              View Document
            </Link>)
          })
        )
      );
    return rows;
  };
  const onActionClicked = (e, payload) => {
    // alert(JSON.stringify(payload));
    console.log(payload);
  };
  if (!adminGetAllRequests.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'All Clients', active: true }]}
    >
      {/* <Modal action="Show"/> */}
      <div style={{ overflowX: 'auto' }}>
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
              label: 'Client',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'requestTitle',
              label: 'Request Title',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'requestDescription',
              label: 'Request Description',
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'documentUploaded',
              label: 'Document Uploaded',
              minWidth: 100,
              color: value => 'blue'
            },
            {
              id:'view',
              label: 'Action',
              minWidth: 100,
              align: 'center',
              color: value => 'blue',
              type: 'link'
            },
            {
              id: 'date',
              label: 'Date Created',
              minWidth: 100,
              color: value => 'black',
            },
          ]}
          rows={getRows(adminGetAllRequests.requests)}
          handleActionClick={onActionClicked}
          handleLinkClick={onLinkClicked}
        />
      </div>
    </Page>
  )
}