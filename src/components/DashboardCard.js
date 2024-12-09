
import React from 'react';
import { Card } from 'react-bootstrap';

const DashboardCard = ({ title, value }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="display-4">{value}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;
