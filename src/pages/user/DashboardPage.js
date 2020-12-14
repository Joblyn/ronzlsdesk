import React from 'react';
import { Link } from "react-router-dom";
import {
  Col,
  Row,
} from 'reactstrap';

import { AnnouncementCard } from 'components/Card';
<<<<<<< HEAD
import Page from 'components/Page';;

class DashboardPage extends React.Component {
=======
import Page from 'components/Page';

>>>>>>> 87431120e1a7bc4273b58bc6897bff64968efef9

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
                text="View Profile"
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
              text="View Appointments"
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
                text="View Documents"
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
                text="View Requests"
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
