import React from 'react';
import { Card } from 'react-bootstrap';
import '../How.css'

const CustomCard = ({ howImage, howTitle, howcardheading, HowText }) => {
  return (
    <Card className="custom-card">
      <div className="card-number">
        <h4>{howcardheading}</h4>
      </div>
      <Card.Body className="text-center">
        <img src={howImage} alt="icon" className="card-icon" />
        <Card.Title className="card-title">{howTitle}</Card.Title>
        <Card.Text className="para">{HowText}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export  default CustomCard;

