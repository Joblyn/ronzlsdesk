import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Page from 'components/Page';
import CustomTable from '../../components/table/CustomTable';
import { getDocumentSentByAdmin, getDocumentSentByUser } from '../../actions/user/Users';
import { userGetDocumentSentByAdminToUser, userGetDocumentSentByUser } from '../../apiConstants/apiConstants';
import PageSpinner from '../../components/PageSpinner';

export default function ViewDocuments() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState('sent');
  const userGetDocumentsSentByUser = useSelector(state => state.userGetDocumentsSentByUser);
  const userGetDocumentsSentByAdmin = useSelector(state => state.userGetDocumentsSentByAdmin);
 
  const getReceivedDocuments = () => dispatch(getDocumentSentByAdmin(userGetDocumentSentByAdminToUser)); 
  const getSentDocuments = () => dispatch(getDocumentSentByUser(userGetDocumentSentByUser));

  useEffect(() => {
    if(category === 'sent') { getSentDocuments() } 
    else { getReceivedDocuments() }
    
  }, [category]);

  if(userGetDocumentsSentByUser.isSuccessful || userGetDocumentsSentByUser.isSuccessful) {
    console.log((userGetDocumentsSentByUser.documents || userGetDocumentsSentByUser.documents)) 
  }
  
  const getRows = (documents) => {
    let rows = [];

    documents && documents.map((document, i) => (
      rows.push({
        id: i + 1,
      })
    ));
    return rows;
  };

  if (!(userGetDocumentsSentByUser.isSuccessful || userGetDocumentsSentByUser.isSuccessful)) {
    return <PageSpinner />
  }
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'View Documents', active: true }]} 
    >
    <div className="links">
      <Link className={category === 'sent' ? 'active' : ''} to="#" onClick={() => setCategory('sent')}
      >Documents Sent</Link>
      <Link className={category === 'received' ? 'active' : ''} to="#" onClick={() => setCategory('received')}>Documents Recieved</Link>
    </div>
    {userGetDocumentsSentByUser.documents.length ||  userGetDocumentsSentByUser.documents.length ?
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
            id: 'documentName',
            label: 'Document Name',
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
            label: 'Date Uploaded',
            minWidth: 100,
            color: value => 'black',
          },
        ]}
        rows={getRows(userGetDocumentsSentByUser.documents || userGetDocumentsSentByAdmin.documents)}
      /> : <div className="empty-table">
        <p><em>{category === 'sent' ? 'No documents sent to admin' : 'No documents received from admin'}</em></p>
      </div>
    }
    </Page>
  )
}