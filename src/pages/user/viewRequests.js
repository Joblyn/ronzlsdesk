import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  
  if(getUserRequests.isSuccessful){
    console.log('Check: ' + getUserRequests.requests);
  }

  const getRows = data => {
    let rows = [];

    data && data.map((request, i) => (
      rows.push({
        id: i + 1,
      })
    ));
    return rows; 
  };

  if(!getUserRequests.isSuccessful) {
    return <PageSpinner />
  }
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'View Requests', active: true }]} 
    >
    {getUserRequests.requests.length ? 
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
            id: 'document',
            label: 'Document Uploaded',
            minWidth: 150,
            color: value => 'blue',
          },
          {
            id: 'date',
            label: 'Date Created',
            minWidth: 100,
            color: value => 'black',
          },
        ]}
        rows={getRows(getUserRequests.requests)}
      /> 
      : <div className="empty-table">
        <p><em>No requests created</em></p>
      </div>
    }
    </Page>
  )
}