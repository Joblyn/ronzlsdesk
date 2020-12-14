import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Page from 'components/Page';
import CustomTable from '../../components/table/CustomTable';
import PageSpinner from '../../components/PageSpinner';
import { getDocumentsSentToUser } from '../../actions/admin/clients/Clients';
import { adminGetDocumentsSentToUser } from '../../apiConstants/apiConstants';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function AdminSentDocuments() {
  const dispatch = useDispatch();
  const adminGetSentDocuments = useSelector(
    state => state.adminGetSentDocuments,
  );

  useEffect(() => {
    dispatch(getDocumentsSentToUser(adminGetDocumentsSentToUser));
  }, []);

  const getRows = documents => {
    let rows = [];
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
              href={document.attachedFileUrl}
              target="_blank"
            >
              View
            </Button>
          ),
        }),
      );
    return rows;
  };

  if (!adminGetSentDocuments.isSuccessful) {
    return <PageSpinner />;
  }

  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'Documents', active: true }]}
    >
      <div className="links">
        <Link className="active" to="/admin/documents/received">
          View received documents
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
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'docName',
              align: 'center',
              label: 'Document Name',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'date',
              align: 'center',
              label: 'Date',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'view',
              align: 'center',
              label: 'Action',
              minWidth: 100,
            },
          ]}
          rows={getRows(adminGetSentDocuments.documents)}
        />
      </div>
    </Page>
  );
}
