import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  adminGetDocumentsSentToUser,
  adminGetDocumentsReceivedFromUser
} from '../../apiConstants/apiConstants';
import {
  getDocumentsSentToUser,
  getDocumentsReceivedFromUser
} from '../../actions/admin/clients/Clients';
import Page from 'components/Page';
import CustomTable from '../../components/table/CustomTable';
import PageSpinner from '../../components/PageSpinner';
import Modal from '../../components/Modal';

export default function AdminDocumnents() {
  const [category, setCategory] = useState('sent');
  const dispatch = useDispatch();
  const adminGetSentDocuments = useSelector(state => state.adminGetSentDocuments);
  const adminGetReceivedDocuments = useSelector(state => state.adminGetReceivedDocuments);

  const getSentDocuments = () => dispatch(getDocumentsSentToUser(adminGetDocumentsSentToUser));
  const getReceivedDocuments = () => dispatch(getDocumentsReceivedFromUser(adminGetDocumentsReceivedFromUser));

  useEffect(() => {
    if(category === 'sent') { getSentDocuments() } 
    else { getReceivedDocuments() }; 
  }, []);

  let isSuccessful = adminGetSentDocuments.isSuccessful || adminGetReceivedDocuments.isSuccessful;

  if(isSuccessful) {
    console.log(adminGetSentDocuments.documents || adminGetReceivedDocuments.documents);
  }
  
  const getRows = (documents) => {
    let rows = [];

    documents && documents.map((document, i) => (
      rows.push({
        id: i + 1,
      })
    ));
    return rows;
  }

  if (!isSuccessful) {
    return <PageSpinner />
  }
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Documents', active: true }]} 
    >
    <div style={{textAlign: 'end'}}>
      <Modal color="#fff" action="Upload Document"/>
    </div>
      <div className="links">
        <Link className={category === 'sent' ? 'active' : ''} to="#" onClick={() => setCategory('sent')}
        >Documents Sent</Link>
        <Link className={category === 'received' ? 'active' : ''} to="#" onClick={() => setCategory('received')}>Documents Recieved</Link>
      </div>
      <div
        style={{
          overflowX: 'auto'
        }}
      >
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
              id: 'documentName',
              align: 'center',
              label: 'Document Name',
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'document',
              align: 'center',
              label: `${category === 'sent' ? 'Document Uploaded' : 'Document Received'}`,
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'date',
              align: 'center',
              label: `${category === 'sent' ? 'Date Uploaded' : 'Date Received'}`,
              minWidth: 100,
              color: value => 'black',
            },
          ]}
          rows={getRows(adminGetSentDocuments.documents || adminGetReceivedDocuments.documents)}
        /> 
      </div>
    </Page>
  )
}