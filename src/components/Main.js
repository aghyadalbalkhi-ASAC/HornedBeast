import React , {Component}from 'react';
import data from '../data/data';
import { CardGroup, Card } from 'react-bootstrap';


class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const horns = data.map( (horn) => {
            return(
                <Card>
                    <Card.Img variant="top" src={horn.image_url} />
                    <Card.Body>
                        <Card.Title>{horn.title}</Card.Title>
                        <Card.Text>
                            {horn.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            );
        });
        return(
            <>
        <CardGroup>
                {horns}
        </CardGroup>
            </>
        );
    }
}


export default Main;