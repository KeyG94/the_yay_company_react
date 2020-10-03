import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardBody() { 

    return (
        <Card.Body style={{ border='none'}}>
            <Card.Title>Nunc porttitor vel</Card.Title>
            <Card.Text>
            Nunc malesuada eget est fringilla dapibus.
            </Card.Text>
            <Button variant="primary" className="btn btn-custom_cards">More</Button>
            
        </Card.Body>
    )
}

export default CardBody;
