import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const categories = [
  
  { title: 'Category 1', img: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Category 2', img: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Category 3', img: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { title: 'Category 4', img: 'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

const CategoryCards = () => (
  
  <Container className="my-5">
    <Row>
      {categories.map((category, index) => (
        <Col md={3} key={index}>
          <Card>
            <Card.Img variant="top" src={category.img} />
            <Card.Body>
              <Card.Title>{category.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default CategoryCards;
