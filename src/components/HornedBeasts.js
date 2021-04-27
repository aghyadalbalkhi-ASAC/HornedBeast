import React , {Component}from 'react';
import {Button, Card } from 'react-bootstrap';

class HornedBeasts extends Component{

    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }
    
    handleVotes = () => this.setState({ votes: this.state.votes + 1 })

    render() {
        return (
          // Lab 02
        <div className="col-12 col-md-3 m-1" id="spc-col-3">
            <Card style={{ width: '18rem' , margin:'1rem'}}>
                <Card.Img variant="top" src={this.props.imageUrl} alt='' title={this.props.title} style={{ width: '18rem' }}/>
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                    {this.props.description}
                    <p>Votes for {this.props.title} : {this.state.votes}</p>
                </Card.Text>
                <Button onClick={this.handleVotes} variant="primary">Vote</Button>
                </Card.Body>
            </Card>
        </div>
    
          // Lab 01
          // <div>
          //   <h2>{this.props.title}</h2>
          //   <p>Votes for {this.props.title} : {this.state.votes}</p>
          //   <img onClick={this.handleVotes} src={this.props.imageUrl} alt='' title={this.props.title} width='200pz' />
          //   <p>{this.props.description}</p>
          // </div>
        )
      }
    
}


export default HornedBeasts;
