import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';

import { getRequests } from '../../actions/user/Users';
import { userGetRequests } from "../../apiConstants/apiConstants";
import Page from 'components/Page';
import CustomTable from '../../components/table/CustomTable';
import PageSpinner from '../../components/PageSpinner';

export default function ViewRequests() {
  const dispatch = useDispatch();
  const getUserRequests = useSelector(state => state.userGetRequests);


  useEffect(() => {
    dispatch(getRequests(userGetRequests));
  }, []);

  if (getUserRequests.isSuccessful) {
    console.log(getUserRequests.requests);
  }

  const getRows = data => {
    let rows = [];

    data && data.reverse().map((request, i) => (
      rows.push({
        id: i + 1,
        requestTitle: request.requestTitle,
        requestDescription: request.requestDescription,
        date: request.created_dt.slice(0,10),
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
      })
    ));
    return rows;
  };

  if (!getUserRequests.isSuccessful) {
    return <PageSpinner />
  }
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'View Requests', active: true }]}
    >
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
              id: 'document',
              align: 'center',
              label: 'Document Uploaded',
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'view',
              label: 'Action',
              minWidth: 100,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'date',
              align: 'center',
              label: 'Date Created',
              minWidth: 100,
              color: value => 'black',
            },
          ]}
          rows={getRows(getUserRequests.requests)}
        />
      </div>
    </Page>
  )
}