import Page from 'components/Page';
import React, { useEffect,
  //  useRef 
  } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
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
import { getThemeColors } from 'utils/colors';
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

const colors = getThemeColors();
console.log(colors);
const AdminClient = () => {
  // const excelTable = useRef('');
  // console.log('Data' + data.data);
  const history = useHistory();
  console.log(history)
  const dispatch = useDispatch();
  const adminGetClient = useSelector(state => state.adminGetAllClient);
  const { params } = useParams();
  console.log(params);

  console.log('Payload:' + adminGetClient.users);

  // useEffect(()=> {

  // },[adminGetClient])
  const handleClick2 = id => {
    const endpoint = getClientDetail + id; //'5f5265a3d74c2bb6428f73ce';
    //const endpoint = getClientDetail + userId;
    //console.log('Details; ' + userId);
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
              to={`/admin/client/details/userId=${user._id}`}
              className="bg-green-700 text-white rounded-full px-2 py-2"
            >
              View Details
            </Link>
          ),
        });
        return null;
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
      <Modal />
      {/* <ReactHTMLTableToExcel
        className="btn btn-info"
        table={excelTable}
        filename="fileName"
        sheet="Sheet"
        buttonText="Export To Excel"
      /> */}
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
      {/* <ExcelTable id={excelTable} exportData={adminGetClient.user} /> */}

      {/* <Row
        <Col md={6}>
          <Card>
            <CardHeader>Single button dropdowns</CardHeader>
            <CardBody>
              {colors.map((color, index) => (
                <UncontrolledButtonDropdown key={index}>
                  <DropdownToggle
                    caret
                    color={color}
                    className="text-capitalize m-1"
                  >
                    {color}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              ))}
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Split button dropdowns</CardHeader>
            <CardBody>
              {colors.map((color, index) => (
                <UncontrolledButtonDropdown
                  key={index}
                  className="text-capitalize m-1"
                >
                  <Button color={color}>{color}</Button>
                  <DropdownToggle caret color={color} />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Sizing</CardHeader>
            <CardBody>
              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret size="lg">
                  Large
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret>Normal</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret size="sm">
                  Small
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </CardBody>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <CardHeader>Dropup</CardHeader>
            <CardBody>
              <UncontrolledButtonDropdown direction="up">
                <DropdownToggle caret size="lg">
                  Dropup
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <CardHeader>Alignment</CardHeader>
            <CardBody>
              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret>
                  This dropdown's menu is right-aligned
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>

              <UncontrolledButtonDropdown className="m-1">
                <DropdownToggle caret>
                  This dropdown's menu is left-aligned
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledButtonDropdown>
            </CardBody>
          </Card>
        </Col>
      </Row>
     */}
    </Page>
  );
};

export default AdminClient;

/*

[
          {
            id: 1,
            user: 'Sarah Doe',
            accountType: 'HipHop Class',
            commission: `${4}%`,
            view: (
              <Link
                to="/admin/client/details"
                // to={`/admin/client/details/${id}`}
                className="bg-green-700 text-white rounded-full px-6 py-2"
              >
                View Details
              </Link>
            ),
            total: 44,
          },
          // {
          //   id: 2,
          //   user: 'Sarah Doe',
          //   accountType: 'HipHop Class',
          //   commission: `${4}%`,
          //   view: (
          //     <Link className="bg-green-700 text-white rounded-full px-6 py-2">
          //       View Details
          //     </Link>
          //   ),
          //   total: 44,
          // },
          // {
          //   id: 3,
          //   user: 'Sarah Doe',
          //   accountType: 'HipHop Class',
          //   commission: `${4}%`,
          //   view: (
          //     <Link className="bg-green-700 text-white rounded-full px-6 py-2">
          //       View Details
          //     </Link>
          //   ),
          //   total: 44,
          // },
          // {
          //   id: 4,
          //   user: 'Sarah Doe',
          //   accountType: 'HipHop Class',
          //   commission: `${4}%`,
          //   view: (
          //     <Link className="bg-green-700 text-white rounded-full px-6 py-2">
          //       View Details
          //     </Link>
          //   ),
          //   total: 44,
          // },
          // {
          //   id: 5,
          //   user: 'Sarah Doe',
          //   accountType: 'HipHop Class',
          //   commission: `${4}%`,
          //   view: (
          //     <Link className="bg-green-700 text-white rounded-full px-6 py-2">
          //       View Details
          //     </Link>
          //   ),
          //   total: 44,
          // },
          // {
          //   id: 6,
          //   user: 'Sarah Doe',
          //   accountType: 'HipHop Class',
          //   commission: `${4}%`,
          //   view: (
          //     <Link className="bg-green-700 text-white rounded-full px-6 py-2">
          //       View Details
          //     </Link>
          //   ),
          //   total: 44,
          // },
        ]
*/
