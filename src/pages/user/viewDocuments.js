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

  if(userGetDocumentsSentByUser.isSuccessful || userGetDocumentsSentByAdmin.isSuccessful) {
    console.log((userGetDocumentsSentByUser.documents || userGetDocumentsSentByAdmin.documents)) 
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

  if (!(userGetDocumentsSentByUser.isSuccessful || userGetDocumentsSentByAdmin.isSuccessful)) {
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
    <div style={{overflowX: 'auto'}}> 
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
            label: 'Document Uploaded',
            minWidth: 150,
            color: value => 'blue',
          },
          {
            id: 'date',
            align: 'center',
            label: 'Date Uploaded',
            minWidth: 100,
            color: value => 'black',
          },
        ]}
        rows={getRows(userGetDocumentsSentByUser.documents || userGetDocumentsSentByAdmin.documents)}
      /> 
    </div>
    </Page>
  )
}