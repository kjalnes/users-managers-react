import React, { Component} from 'react';
import { render } from 'react-dom';



const root = document.getElementById('root');

class App extends Component{
  constructor(props){
    super();
    this.specialNumber = props.specialNumber; 
  }
  render(){
    return (
      <div className='well'>
        { this.specialNumber }
      </div> 
    );
  }
}


render(<App specialNumber={42}/>, root);
