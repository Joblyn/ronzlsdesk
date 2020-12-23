import Page from 'components/Page';
import React, { useEffect, 
  // useRef 
} from 'react';
import { Button } from 'reactstrap';
import PageSpinner from '../../components/PageSpinner';
import CustomTable from '../../components/table/CustomTable';

import {
  getAllDocuments,
} from '../../actions/admin/clients/Clients';
import {
  adminGetDocuments,
} from '../../apiConstants/apiConstants';
import { useDispatch, useSelector } from 'react-redux';

const Documents = () => {
  const dispatch = useDispatch();
  const adminGetAllDocuments = useSelector(state => state.getAllDocuments);

  useEffect(() => {
    dispatch(getAllDocuments(adminGetDocuments));
  }, []);

  if (adminGetAllDocuments.isSuccessful) {
    console.log('Check: ' + adminGetAllDocuments.documents);
  }

  const getRows = data => {
    let rows = [];
    data &&
      data.reverse().map((document, i) => {
        let sender;
        let receiver;
        if (document.sender) {
          sender = document.sender.companyName
        }
        if (document.receiver) {
          receiver = document.receiver.fullName
        }
        return rows.push({
          id: i + 1,
          client: sender || 'null',
          admin: receiver || 'null',
          docName: document.docName,
          date: document.created_dt.slice(0, 10),
          view: (
            <Button
              color="secondary"
              size="sm"
              className="p-1"
              style={{ fontSize: '.9rem', minWidth: '110px' }}
              href={document.docContentUrl}
              target="_blank"
            >
              View
            </Button>
          )
        });
      });
    return rows;
  };

  if (!adminGetAllDocuments.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Documents', active: true }]}
    >
      <div style={{
        overflowX: 'auto'
      }}>
      <CustomTable
        pagination
        pagerows
        search
        searchType="client"
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
            id: 'admin',
            align: 'center',
            label: 'Admin',
            minWidth: 100,
            color: value => 'blue',
          },
          {
            id:'docName',
            align: 'center',
            label: 'Document Name',
            minWidth: 100,
            color: value => 'blue',
          },
          {
            id: 'date',
            align: 'center',
            label: 'Date Uploaded',
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
        ]}
        rows={getRows(adminGetAllDocuments.documents)}
      /> 
      </div>    
    </Page>
  );
}
export default Documents;
