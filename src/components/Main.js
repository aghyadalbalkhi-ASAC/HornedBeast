import React , {Component}from 'react';
import data from '../data/data';
import HornedBeasts from './HornedBeasts';



class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
             <HornedBeasts data={data}/>
            </>
        );
    }
}


export default Main;