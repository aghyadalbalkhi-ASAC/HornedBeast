import React, { Component } from 'react'
import {Button, Card ,Modal} from 'react-bootstrap';

class SelectedBeast extends Component {
    
    render() {

        if(this.props.beast === null){
            return <div> </div>
        }else{

        return (


                <Modal show={this.props.show}  centered>
                    <Modal.Header>
                    <Modal.Title>{this.props.beast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 m-1">
                                <Card.Img variant="top" src={this.props.beast.imageUrl} alt='' title={this.props.title} />
                                
                                <Card.Body>
                                <Card.Text>
                                    {this.props.beast.description}
                                </Card.Text>
                                </Card.Body></div>
                            </div>
                        </div>               
                    <Button onClick={()=>this.props.showHandeler()}> Close </Button>
                    </Modal.Body>
                </Modal>
        )
    }
    }
}

export default SelectedBeast
