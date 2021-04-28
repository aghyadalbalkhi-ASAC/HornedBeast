import React, { Component } from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import SelectedBeast from './components/SelectedBeast'
import data from './data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      show:false,
      selectedBeast:null
    }
  }

  handelSelectedBeast = (beast) =>{
    this.setState({ selectedBeast: beast })
    console.log(beast);
    this.setState({ show: ! this.state.show })
  }

  showHandeler = () =>{
    this.setState({ show: ! this.state.show })
  }


  render(){
      return (
        <div className="App">
          <Header />
            <Main data={data} selectedBeast={this.handelSelectedBeast} />
          <Footer />
          <SelectedBeast showHandeler={this.showHandeler} show={this.state.show} beast={this.state.selectedBeast} />
        </div>
      )
  }
}

export default App;
