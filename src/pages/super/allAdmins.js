import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row, Card, CardImg, CardBody, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  superAdminGetAllAdmins,
  getAllClients,
  addUserToAdmin,
} from '../../apiConstants/apiConstants';
import {
  getAllAdmins,
  superAdminAddClientToAdmin,
} from '../../actions/admin/authAction/Users';
import { getClient } from '../../actions/admin/clients/Clients';
import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import Portrait from '../../portrait.png';

export default function allAdmins() {
  const dispatch = useDispatch();
  const AllAdmins = useSelector(state => state.superAdminGetAllAdmins);
  const AllClients = useSelector(state => state.adminGetAllClient);
  const AddClientToAdmin = useSelector(
    state => state.superAdminAddClientToAdmin,
  );
  const [admins, setAdmins] = useState([]);

  const [admin, setAdmin] = useState();
  const [client, setClient] = useState();

  useEffect(() => {
    dispatch(getAllAdmins(superAdminGetAllAdmins));
    dispatch(getClient(getAllClients));
  }, []);

  useEffect(() => {
    if (AllAdmins.isSuccessful && AllClients.isSuccessful) {
      setAdmins(AllAdmins.admins);
      setAdmin(AllAdmins.admins[1]._id);
      console.log(AllClients.users);
      setClient(AllClients.users[1]._id);
    }
  }, [AllAdmins, AllClients]);
  console.log(admins);

  useEffect(() => {
    if (AddClientToAdmin.isSuccessful) {
      console.log(AddClientToAdmin.result);
    }
  }, [AddClientToAdmin]);

  const addClient = () => {
    const endpoint = `${addUserToAdmin}${client}/${admin}`;
    console.log(endpoint);
    const payload = {
      admin_id: admin,
      user_id: client,
    };
    console.log(payload);
    dispatch(superAdminAddClientToAdmin(endpoint, payload));
  };
  console.log(addClient);

  if (!admins.length) {
    return <PageSpinner />;
  }

  return (
    <Page title="Dropdowns" breadcrumbs={[{ name: 'Admins', active: true }]}>
      <Row className="admin-grid p-3">
        {admins.map((admin, i) => (
          <Card
            className="d-flex justify-content-center align-items-center text-center pt-2 box-border"
            key={`admin-${i}`}
          >
            <CardImg
              src={Portrait}
              style={{ width: '150px', height: 'auto', borderRadius: '50%', border:'1px solid #45b649'}}
              className="p-1"
            />
            <CardBody className="px-0 w-100">
              <CardText>{admin.fullName}</CardText>
              <CardText>{admin.email}</CardText>
              <CardText>{admin.phoneNumber}</CardText>
              <Button color="success" className="m-1">
                <Link to="/admin/clients" className="link text-decoration-none" style={{color: 'inherit'}}>Assign Client</Link>
              </Button>
              <Button outline color="success" className="m-1">
                <Link to="/admin/clients" className="link text-decoration-none" style={{color: 'inherit'}}>View Clients</Link>
              </Button>
            </CardBody>
          </Card>
        ))}
      </Row>
    </Page>
  );
}
