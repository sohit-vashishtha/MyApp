import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardCard from '../components/DashboardCard';

const DashboardPage = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col sm={12} md={6} lg={3}>
          <DashboardCard title="Total Clients" value="200" />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <DashboardCard title="Ongoing Projects" value="8" />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <DashboardCard title="New Invoices" value="12" />
        </Col>
        <Col sm={12} md={6} lg={3}>
          <DashboardCard title="Total Revenue" value="$5,000" />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
