import React , {Component}from 'react';
import {Button, Card,Badge } from 'react-bootstrap';

class HornedBeasts extends Component{

    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }
    
    handleVotes = () => this.setState({ votes: this.state.votes + 1 })

    render() {
        const selected = this.props;
        return (
          // Lab 02
                    <Card >
                        <Card.Img  onClick={()=>this.props.selectedBeast(selected)} variant="top" src={this.props.imageUrl} alt='' title={this.props.title}/>
                        <Card.Body>
                        <Card.Title><Badge variant="secondary">{this.props.title}</Badge></Card.Title>
                        <Card.Text>
                            {this.props.description}
                            <p>Votes for {this.props.title} : {this.state.votes}</p>
                        </Card.Text>
                        <Button onClick={this.handleVotes} variant="outline-primary" size="lg" block>Vote</Button>
                        </Card.Body>
                    </Card>
        )
      }
    
}


export default HornedBeasts;
