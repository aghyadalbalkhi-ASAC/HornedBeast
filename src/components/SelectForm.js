import React, { Component } from 'react';
import {Form} from 'react-bootstrap'

class SelectForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hornsNum:''
        }
    }

    handelChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, function() {
            this.props.selectHorns(this.state.hornsNum);
        });

    }
    
    render() {
        return (
            <>
            <Form>
                    <Form.Group controlId="selectedHorns">
                        <Form.Label>Select Horns Number</Form.Label>
                        <Form.Control onChange={this.handelChange} name="hornsNum" as="select" custom>
                        <option>All</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>100</option>
                        </Form.Control>
                    </Form.Group>
            </Form>
            </>
        )
    }
}

export default SelectForm;
