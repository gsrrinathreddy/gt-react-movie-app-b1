import React from 'react'
import {Card} from 'react-bootstrap';
export default function Post(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.url} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                   {props.body}
                    </Card.Text>
                  
                </Card.Body>
            </Card>
        </div>
    )
}

