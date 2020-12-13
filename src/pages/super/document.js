import Page from 'components/Page';
import React, { useEffect, 
  // useRef 
} from 'react';
import { Link } from 'react-router-dom';
import PageSpinner from '../../components/PageSpinner';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// import {
  // Button,
  // Card,
  // CardBody,
  // CardHeader,
  // Col,
  // DropdownItem,
  // DropdownMenu,
  // DropdownToggle,
  // Row,
  // UncontrolledButtonDropdown,
// } from 'reactstrap';
import CustomTable from '../../components/table/CustomTable';

import {
  getAllDocuments,
} from '../../actions/admin/clients/Clients';
import {
  adminGetDocuments
} from '../../apiConstants/apiConstants';
import { useDispatch, useSelector } from 'react-redux';
// import ExcelTable from '../../components/ExportToExcel';
import Modal from '../../components/Modal';

const Documents = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const adminGetAllDocuments = useSelector(state => state.getAllDocuments);

  const handleClick2 = id => {
  };

  const onLinkClicked = (e, payload) => {
  };
  useEffect(() => {
    dispatch(getAllDocuments(adminGetDocuments));
  }, []);

  if (adminGetAllDocuments.isSuccessful) {
    console.log('Check: ' + adminGetAllDocuments.documents);
  }

  const getRows = data => {
    let rows = [];
    console.log('Data: ' + JSON.stringify(data));
    // let data = adminGetAllDocuments.users && adminGetAllDocuments.users;
    data &&
      data.reverse().map((user, index) => {
        rows.push({
          id: index + 1,
          user: user.companyName,
          accountType: user.accountType,
          companyAddress: user.companyAddress,
          phoneNumber: user.phoneNumber,
          email: user.email,
          website: user.websiteUrl,
          view: (
            <Link
              // to={`/admin/client/details/${user._id}`}
              onClick={() => handleClick2(user._id)}
              to={`/superadmin/client/details/userId=${user._id}`}
              className="bg-green-700 text-white rounded-full px-2 py-2"
            >
              View Document
            </Link>
          )
        });
        return null
      });
    return rows;
  };
  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  if (!adminGetAllDocuments.isSuccessful) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'Documents', active: true }]}
    >
      <Modal action="Show"/>
      <div style={{
        overflowX: 'auto'
      }}>
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
            id: 'user',
            align: 'center',
            label: 'User',
            minWidth: 100,
            color: value => 'blue',
          },
          {
            id:'documnet',
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
            type: 'link',
          },
        ]}
        rows={getRows(adminGetAllDocuments.documents)}
        handleActionClick={onActionClicked}
        handleLinkClick={onLinkClicked}
      /> 
      </div>    
    </Page>
  );
}
export default Documents;
