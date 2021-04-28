import React , {Component}from 'react';

import HornedBeasts from './HornedBeasts';
import {CardColumns} from 'react-bootstrap';


class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {

        const beasts = this.state.data.map(beast => {
            return (
                    <HornedBeasts
                    title={beast.title}
                    description={beast.description}
                    imageUrl={beast.image_url}
                    selectedBeast = {this.props.selectedBeast}
                />
            )
            })
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {beasts}
                    </CardColumns>
                </div>
            </div>
        )
      };
    }


export default Main;