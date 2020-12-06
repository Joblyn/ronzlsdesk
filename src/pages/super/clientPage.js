import React, { useEffect } from 'react';
import Page from 'components/Page';
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
// import { getThemeColors } from 'utils/colors';
import CustomTable from '../../components/table/CustomTable';

import {
  getClient,
  getClientDetails,
} from '../../actions/admin/clients/Clients';
import {
  getAllClients,
  getClientDetail,
} from '../../apiConstants/apiConstants';
import { useDispatch, useSelector } from 'react-redux';
// import ExcelTable from '../../components/ExportToExcel';
import Modal from '../../components/Modal';

const AdminClient = () => {
  // const history = useHistory();
  const dispatch = useDispatch();
  const adminGetClient = useSelector(state => state.adminGetAllClient);
  // const { params } = useParams();

  console.log('Payload:' + adminGetClient.users);
  
  const handleClick2 = id => {
    const endpoint = getClientDetail + id; //'5f5265a3d74c2bb6428f73ce';
    dispatch(getClientDetails(endpoint));
  };

  const onLinkClicked = (e, payload) => {
    // console.log(JSON.stringify(payload));
    // history.push('/admin/client/details');
  };
  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClient(getAllClients));
  }, []);

  if (adminGetClient.isSuccessful === true) {
    console.log('Check: ' + adminGetClient.users);
  }

  const getRows = data => {
    let rows = [];
    console.log('Data: ' + JSON.stringify(data));
    //let data = adminGetClient.users && adminGetClient.users;
    data &&
      data.map((user, index) => {
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
              View Details
            </Link>
          ),
        });
        return null
      });
    return rows;
  };
  const onActionClicked = (e, payload) => {
    alert(JSON.stringify(payload));
  };
  if (adminGetClient.users.length === 0) {
    return <PageSpinner />;
  }
  return (
    <Page
      title="Dropdowns"
      breadcrumbs={[{ name: 'All Clients', active: true }]}
    >
      <Modal action="Upload Document"/>
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
              label: 'ID',
              minWidth: 20,
              color: value => 'blue',
            },

            {
              id: 'user',
              label: 'User',
              minWidth: 100,
              color: value => 'blue',
            },
            {
              id: 'accountType',
              label: 'Account Type',
              minWidth: 50,
              color: value => 'blue',
            },
            {
              id: 'companyAddress',
              label: 'Address',
              minWidth: 150,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'phoneNumber',
              label: 'Phone Number',
              minWidth: 50,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'email',
              label: 'Email',
              minWidth: 100,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'website',
              label: 'Website',
              minWidth: 80,
              align: 'center',
              color: value => 'blue',
            },
            {
              id: 'view',
              label: 'Actions',
              minWidth: 150,
              align: 'center',
              color: value => 'blue',
              type: 'link',
            },
          ]}
          rows={getRows(adminGetClient.users)}
          handleActionClick={onActionClicked}
          handleLinkClick={onLinkClicked}
        />
      </div>
    </Page>
  );
};

export default AdminClient;

