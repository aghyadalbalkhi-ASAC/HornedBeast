import React , {Component}from 'react';

import HornedBeasts from './HornedBeasts';
import {CardColumns} from 'react-bootstrap';
import SelectForm from './SelectForm';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            selectedViewData:this.props.data
        }
    }

    selectHorns = (hornsNum) =>{

            if (hornsNum !=="All"){
            hornsNum =  parseInt(hornsNum);
            const selectedData =this.state.data.filter((horn) =>{
                    return horn.horns === hornsNum;
                
            })
            this.setState({selectedViewData:selectedData});
        } else{
            this.setState({selectedViewData:this.state.data});
        }
    }

    render() {

        const beasts = this.state.selectedViewData.map((beast , index) => {
            return (
                    <HornedBeasts
                    key = {index}
                    title={beast.title}
                    description={beast.description}
                    imageUrl={beast.image_url}
                    selectedBeast = {this.props.selectedBeast}
                />
            )
            })
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <SelectForm selectHorns={this.selectHorns} />
                </div>
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