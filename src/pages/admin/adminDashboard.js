import React from 'react';
import {
  Col,
  Row,
} from 'reactstrap';
import{ Link } from 'react-router-dom';

import { AnnouncementCard } from 'components/Card';
import Page from 'components/Page';

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
          <Link to="/admin/clients" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none'}}>
            <AnnouncementCard
              color="gradient-secondary"
              text="Clients"
              buttonProps={{
                children: 'View',
              }}
              style={{ height: 'fit-content', width: '100%', maxWidth: '500px',cursor: 'pointer', fontSize: '1.2rem'}}
            />
          </Link>
          </Col>
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3">
            <Link to="/admin/documents" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none', fontSize: '1.2rem'}}>
              <AnnouncementCard
                color="gradient-secondary"
                text="Documents"
                buttonProps={{
                  children: 'View',
                }}
              />
            </Link>
          </Col>
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3">
            <Link to="/admin/requests" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none', fontSize: '1.2rem'}}>
              <AnnouncementCard
                color="gradient-secondary"
                text="Requests"
                buttonProps={{
                  children: 'View',
                }}
              />
            </Link>
          </Col>
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3">
            <Link to="/admin/appointments" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none', fontSize: '1.2rem'}}>
              <AnnouncementCard
                color="gradient-secondary"
                text="Appointments"
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
