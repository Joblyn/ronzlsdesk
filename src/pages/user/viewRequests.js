import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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

  const onLinkClicked = (e, payload) => {}

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };

  const handleClick = () => {
    // function to view document
  }

  const getRows = data => {
    let rows = [];

    data && data.map((request, i) => (
      rows.push({
        id: i + 1,
        // other data
        view: <Link
          onClick={handleClick}
          to="#"
          className="bg-green-700 text-white rounded-full px-2 py-2"
        ></Link>
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
              type: 'link'
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
          handleActionClick={onActionClicked}
          handleLinkClick={onLinkClicked}
        />
      </div>
    </Page>
  )
}