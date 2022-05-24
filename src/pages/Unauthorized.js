import React from 'react';

import {
  Row,
  Col,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardSubtitle,
  CardBody,
  CardText,
} from 'reactstrap';

import Page from '../components/Page';

class Unauthorized extends React.Component {
  state = {
    rSelected: null,
    cSelected: [],
  };

  render() {
    return (
      <Page
        className="ButtonPage bg-red-500"
        title="Buttons"
        breadcrumbs={[{ name: 'buttons', active: true }]}
      >
        <Row>Unauthorized</Row>
      </Page>
    );
  }
}

export default Unauthorized;
