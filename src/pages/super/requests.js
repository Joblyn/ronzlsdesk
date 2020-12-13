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

  const handleClick2 = id => {};
  const onLinkClicked = (e, payload) => {};

  useEffect(() => {
    dispatch(getAllRequests(adminGetRequests));
  }, []);

  const getRows = requests => {
    let rows = [];
    requests &&
      requests.reverse().map((request, i) => {
        return rows.push({
          id: i + 1,
          requestTitle: request.requestTitle,
          requestDescription: request.requestDescription,
          date: request.created_dt,
          document: request.attachedFileName || '- -',
          view: (
            <Link
              to="#"
              onClick={() => handleClick2(request._id)}
              className="bg-green-700 text-white rounded-full px-2 py-2"
            >
              View File
            </Link>
          ),
        });
      });
    return rows;
  };
  const onActionClicked = (e, payload) => {
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
              id: 'requestTitle',
              label: 'Request Title',
              align: 'center',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'requestDescription',
              label: 'Request Description',
              align: 'center',
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'document',
              label: 'Document Uploaded',
              align: 'center',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'view',
              label: 'Action',
              minWidth: 150,
              align: 'center',
              color: value => 'blue',
              type: 'link',
            },
            {
              id: 'date',
              label: 'Date Created',
              align: 'center',
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
  );
}
