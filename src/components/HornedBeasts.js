import React , {Component}from 'react';
import { CardGroup, Card } from 'react-bootstrap';

class HornedBeasts extends Component{
        constructor(props){
            super(props);
        }

        render(){
            const horns =this.props.data.map( (horn) => {
                return(
                    <div key ={horn.keyword} className="col-12 col-md-5 m-1">
                        <RenderHornItem horn={horn}/>
                    </div>
                );
            });
            return(
                <>
                    <div className="container">
                        <div className="row">
                            {horns}
                        </div>
                    </div>
                </>
            );
        }
    
}

function RenderHornItem({horn}) {

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
} 

export default HornedBeasts;
