import React from 'react';
import { AnnouncementCard, } from 'components/Card';
import Page from 'components/Page';
import { Link } from "react-router-dom";
import {
  Col,
  Row,
} from 'reactstrap';

class DashboardAdmin extends React.Component {

  render() {

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3" >
          <Link to="/superadmin/admins" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none'}}>
            <AnnouncementCard
              color="gradient-secondary"
              text="Admins"
              buttonProps={{
                children: 'View',
              }}
              style={{ height: 'fit-content', width: '100%', maxWidth: '500px',cursor: 'pointer', fontSize: '1.2rem'}}
            />
          </Link>
          </Col>
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3">
            <Link to="/superadmin/client" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none', fontSize: '1.2rem'}}>
              <AnnouncementCard
                color="gradient-secondary"
                text="Clients"
                buttonProps={{
                  children: 'View',
                }}
              />
            </Link>
          </Col>
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3">
            <Link to="/superadmin/requests" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none', fontSize: '1.2rem'}}>
              <AnnouncementCard
                color="gradient-secondary"
                text="Client Requests"
                buttonProps={{
                  children: 'View',
                }}
              />
            </Link>
          </Col>
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3">
            <Link to="/superadmin/appointments" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none', fontSize: '1.2rem'}}>
              <AnnouncementCard
                color="gradient-secondary"
                text="Client Appointments"
                buttonProps={{
                  children: 'View',
                }}
              />
            </Link>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardAdmin;
