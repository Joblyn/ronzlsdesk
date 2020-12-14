import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';

import { getAllRequests } from '../../actions/admin/clients/Clients';
import { adminGetRequests } from '../../apiConstants/apiConstants';

export default function Requests() {
  const dispatch = useDispatch();
  const adminGetAllRequests = useSelector(state => state.getAllRequests);

  useEffect(() => {
    dispatch(getAllRequests(adminGetRequests));
  }, []);

  const getRows = requests => {
    let rows = [];
    requests &&
      requests.reverse().map((request, i) => {
        return rows.push({
          id: i + 1,
          client: request.client.companyName,
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
              href={request.attachedFileUrl}
              target="_blank"
            >
              View File
            </Button>
          ),
        });
      });
    return rows;
  };

  if (!adminGetAllRequests.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'All Clients', active: true }]}
    >
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
        />
      </div>
    </Page>
  );
}
