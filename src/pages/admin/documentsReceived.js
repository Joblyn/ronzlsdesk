import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { adminGetDocumentsReceivedFromUser } from '../../apiConstants/apiConstants';
import { getDocumentsReceivedFromUser } from '../../actions/admin/clients/Clients';
import Page from 'components/Page';
import CustomTable from '../../components/table/CustomTable';
import PageSpinner from '../../components/PageSpinner';
import Modal from '../../components/Modal';
import { Button } from 'reactstrap';

export default function AdminReceivedDocumnents() {
  const dispatch = useDispatch();
  const adminGetReceivedDocuments = useSelector(
    state => state.adminGetReceivedDocuments,
  );

  useEffect(() => {
    dispatch(getDocumentsReceivedFromUser(adminGetDocumentsReceivedFromUser));
  }, []);

  const getRows = documents => {
    let rows = [];
    console.log(documents);
    documents &&
      documents.reverse().map((document, i) =>
        rows.push({
          id: i + 1,
          docName: document.docName,
          date: document.created_dt,
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
          ),
        }),
      );
    return rows;
  };

  if (!adminGetReceivedDocuments.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Documents', active: true }]}
    >
      <div className="d-flex  align-items-center flex-row-reverse justify-content-between mb-2">
        <div style={{ textAlign: 'end' }}>
          <Modal color="#fff" action="Upload Document" />
        </div>
        <div className="links">
          <Link className="active m-0" to="/admin/documents/sent">
            View sent documents
          </Link>
        </div>
      </div>
      <div
        style={{
          overflowX: 'auto',
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
              id: 'client',
              label: 'client',
              align: 'center',
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'docName',
              align: 'center',
              label: 'Document Received',
              minWidth: 150,
              color: value => 'blue',
            },
            {
              id: 'date',
              align: 'center',
              label: 'Date Received',
              minWidth: 100,
              color: value => 'black',
            },
            {
              id: 'view',
              align: 'center',
              label: 'Action',
              minWidth: 100,
            },
          ]}
          rows={getRows(adminGetReceivedDocuments.documents)}
        />
      </div>
    </Page>
  );
}
