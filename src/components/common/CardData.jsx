import React, { useState } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
const CardData = ({ item }) => {
  const [image, setImage] = useState(item.previewURL);

  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{item.user}</Card.Title>
          <Card.Img variant="top" src={image} />
          <a href={item.largeImageURL} className="btn btn-primary">
            Large image
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardData;
