import React from 'react';
import { Link } from "react-router-dom";
import {
  Col,
  Row,
} from 'reactstrap';

import { AnnouncementCard } from 'components/Card';
import Page from 'components/Page';

class DashboardPage extends React.Component {
  render() {

    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
        <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3">
            <Link to="/user/profile" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none', fontSize: '1.2rem'}}>
              <AnnouncementCard
                color="gradient-secondary"
                text="Profile"
                buttonProps={{
                  children: 'View',
                }}
              />
            </Link>
          </Col>
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3" >
          <Link to="/user/view-appointments" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none'}}>
            <AnnouncementCard
              color="gradient-secondary"
              text="Appointments"
              buttonProps={{
                children: 'View',
              }}
              style={{ height: 'fit-content', width: '100%', maxWidth: '500px',cursor: 'pointer', fontSize: '1.2rem'}}
            />
          </Link>
          </Col>
          <Col lg="12" md="12" sm="12" xs="12" className="d-flex align-items-center justify-content-center mb-3">
            <Link to="/user/documents/received" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none', fontSize: '1.2rem'}}>
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
            <Link to="/user/requests" style={{ height: 'fit-content', width: '100%', maxWidth: '500px', cursor: 'pointer', textDecoration: 'none', fontSize: '1.2rem'}}>
              <AnnouncementCard
                color="gradient-secondary"
                text="Requests"
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
export default DashboardPage;
