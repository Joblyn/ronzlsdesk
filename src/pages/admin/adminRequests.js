import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';
import { getAllRequests } from '../../actions/admin/clients/Clients';
import {
  adminGetRequests,
  // getClientsRequests
} from '../../apiConstants/apiConstants';

export default function AdminRequests() {
  const dispatch = useDispatch();
  const adminGetAllRequests = useSelector(state => state.getAllRequests);

  useEffect(() => {
    dispatch(getAllRequests(adminGetRequests));
  }, []);
  console.log(adminGetAllRequests.requests);

  const getRows = requests => {
    let rows = [];
    requests &&
      requests.map((request, i) =>
        rows.push({
          id: i + 1,
          requestTitle: request.requestTitle,
          requestDescription: request.requestDescription,
          date: request.created_dt,
          document: request.attachedFileName || '- -',
          view: (
            <Button
              color="secondary"
              size="sm"
              className="p-1"
              style={{ fontSize: '.9rem', minWidth: '110px' }}
            >
              View File
            </Button>
          ),
        }),
      );
    return rows;
  };

  const onViewDocument = (e, payload) => {
    // function to view document
  };

  if (!adminGetAllRequests.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page title="Dropdowns" breadcrumbs={[{ name: 'Requests', active: true }]}>
      <div style={{ overflowX: 'auto' }}>
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
              id: 'requestTitle',
              align: 'center',
              label: 'Request Title',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'requestDescription',
              align: 'center',
              label: 'Request Description',
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'documentUploaded',
              align: 'center',
              label: 'Document Uploaded',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'date',
              align: 'center',
              label: 'Date Created',
              minWidth: 100,
              color: value => 'black',
            },
            {
              id: 'view',
              align: 'center',
              label: 'Action',
              minWidth: 150,
              type: 'link',
            },
          ]}
          rows={getRows(adminGetAllRequests.requests)}
          handleLinkClick={onViewDocument}
        />
      </div>
    </Page>
  );
}
