import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { adminGetDocumentsReceivedFromUser } from '../../apiConstants/apiConstants';
import { getDocumentsReceivedFromUser } from '../../actions/admin/clients/Clients';
import Page from '../../components/Page';
import CustomTable from '../../components/table/CustomTable';
import PageSpinner from '../../components/PageSpinner';
import { Button } from 'reactstrap';

export default function AdminReceivedDocumnents() {
  const dispatch = useDispatch();
  const adminGetReceivedDocuments = useSelector(
    state => state.adminGetReceivedDocuments,
  );

  useEffect(() => {
    dispatch(getDocumentsReceivedFromUser(adminGetDocumentsReceivedFromUser));
  }, [dispatch]);

  const getRows = documents => {
    let rows = [];
    documents &&
      documents.reverse().map((document, i) =>
        rows.push({
          id: i + 1,
          client: document.sender && document.sender.director[0].fullName,
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
      <div className="links">
        <Link className="active m-0" to="/admin/documents/sent">
          View sent documents
        </Link>
      </div>
      <div
        style={{
          overflowX: 'auto',
        }}
      >
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
              label: 'Client',
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
              color: value => 'blue',
            },
            {
              id: 'view',
              align: 'center',
              label: 'Action',
              minWidth: 100,
              color: value => 'black',
            },
          ]}
          rows={getRows(adminGetReceivedDocuments.documents)}
        />
      </div>
    </Page>
  );
}
