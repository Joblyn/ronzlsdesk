import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';
import { getAllRequests } from '../../actions/admin/clients/Clients';
import { adminGetRequests } from '../../apiConstants/apiConstants';

export default function AdminRequests() {
  const dispatch = useDispatch();
  const adminGetAllRequests = useSelector(state => state.getAllRequests);

  useEffect(() => {
    dispatch(getAllRequests(adminGetRequests));
  }, []);

  const handleClick = () => {
    // function to show document 
  };

  const getRows = requests => {
    let rows = [];
    requests && requests.map((request, i) => (
      rows.push({
        id: i+1,
        // other data
        view: (<Link
          onClick={handleClick}
          to="#"
          className="bg-green-700 text-white rounded-full px-2 py-2"
        >
          View Document
        </Link>)      
      })
    ));
    return rows; 
  }

  const onLinkClicked = (e, payload) => {}

  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };

  if(!adminGetAllRequests.isSuccessful) {
    return <PageSpinner />
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Requests', active: true }]}
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
              color: value => 'blue'
            },
            {
              id:'view',
              align: 'center',
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
          rows={getRows(adminGetAllRequests.requests)}
          handleActionClick={onActionClicked}
          handleLinkClick={onLinkClicked}
        />
      </div>
    </Page>
  )
}