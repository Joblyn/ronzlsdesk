import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import Page from 'components/Page';
import CustomTable from '../../components/table/CustomTable';
import { getDocumentSentByAdmin } from '../../actions/user/Users';
import { userGetDocumentSentByAdminToUser } from '../../apiConstants/apiConstants';
import PageSpinner from '../../components/PageSpinner';

export default function ViewReceivedDocuments() {
  const dispatch = useDispatch();
  const userGetDocumentsSentByAdmin = useSelector(
    state => state.userGetDocumentsSentByAdmin,
  );

  useEffect(() => {
    dispatch(getDocumentSentByAdmin(userGetDocumentSentByAdminToUser));
  }, []);

  const getRows = documents => {
    let rows = [];

    documents &&
      documents.reverse().map((document, i) =>
        rows.push({
          id: i + 1,
          docName: document.docName,
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
          date: document.created_dt.slice(0,10),
        }),
      );
    return rows;
  };

  if (!userGetDocumentsSentByAdmin.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page
      className="DashboardPage"
      title="Dashboard"
      breadcrumbs={[{ name: 'View Documents', active: true }]}
    >
      <div className="links">
        <Link className="active" to="/user/documents/sent">
          View sent documents
        </Link>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <CustomTable
          pagination
          pagerows
          search
          searchType="docName"
          columns={[
            {
              id: 'id',
              align: 'center',
              label: 'ID',
              minWidth: 20,
              color: value => 'blue',
            },
            {
              id: 'docName',
              align: 'center',
              label: 'Document Name',
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
              color: value => 'blue',
            },
          ]}
          rows={getRows(userGetDocumentsSentByAdmin.documents)}
        />
      </div>
    </Page>
  );
}
