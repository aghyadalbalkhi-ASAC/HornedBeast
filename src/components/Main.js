import React , {Component}from 'react';
import data from '../data/data';
import HornedBeasts from './HornedBeasts';



class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                {this.state.data.map(beast => {
                    return (

                            <HornedBeasts
                            title={beast.title}
                            description={beast.description}
                            imageUrl={beast.image_url}
                        
                        />
                        
                    )
                    })}
                </div>
            </div>
        )
      };
    }


export default Main;