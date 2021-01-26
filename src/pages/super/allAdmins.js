import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Card, CardImg, CardBody, CardText, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { superAdminGetAllAdmins } from '../../apiConstants/apiConstants';
import { getAllAdmins } from '../../actions/admin/authAction/Users';
import { setAdminClients } from '../../actions/admin/clients/Clients';
import Page from 'components/Page';
import PageSpinner from '../../components/PageSpinner';
import Portrait from '../../portrait.png';

export default function allAdmins() {
  const dispatch = useDispatch();
  const AllAdmins = useSelector(state => state.superAdminGetAllAdmins);
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getAllAdmins(superAdminGetAllAdmins));
  }, []);

  useEffect(() => {
    if (AllAdmins.isSuccessful) {
      if(searchTerm) {
        let term = searchTerm.toLowerCase();
        let search = AllAdmins.admins.filter(admin => admin.fullName.toLowerCase().includes(term));
        setAdmins(search);
      } else {
        setAdmins(AllAdmins.admins);
      }
    }
  }, [AllAdmins, searchTerm]);

  const setClients = clients => {
    console.log(clients);
    dispatch(setAdminClients(clients));
  };

  if (!admins.length) {
    return <PageSpinner />;
  }

  return (
      <Page
        title="Dropdowns"
        breadcrumbs={[{ name: 'Admins', active: true }]}
        searchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      >
        <Row className="admin-grid p-3">
          {admins.reverse().map((admin, i) => (
            <Card
              className="d-flex justify-content-center align-items-center text-center pt-2 box-border"
              key={`admin-${i}`}
            >
              <CardImg
                src={Portrait}
                style={{
                  width: '150px',
                  height: 'auto',
                  borderRadius: '50%',
                  border: '1px solid #45b649',
                }}
                className="p-1"
              />
              <CardBody className="px-0 w-100">
                <CardText>{admin.fullName}</CardText>
                <CardText>{admin.email}</CardText>
                <CardText>{admin.phoneNumber}</CardText>
                <Button outline color="success" className="m-1">
                  <Link
                    onClick={() => setClients(admin.users)}
                    to={{
                      pathname: `/superadmin/${admin._id}/clients`,
                    }}
                    className="link text-decoration-none"
                    style={{ color: 'inherit' }}
                  >
                    View Clients
                  </Link>
                </Button>
              </CardBody>
            </Card>
          ))}
        </Row>
      </Page>
  );
}
