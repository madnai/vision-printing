import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyGrid from './MyGrid.jsx';
import ImageUpload from './ImageUpload';

class App extends React.Component {

  state = { message: []}

  callbackFunction = (childData) => {
    this.setState({message: childData})
}
  render () {
    return (
      <div className="App">
        <ImageUpload parentCallback = {this.callbackFunction} />
       
        <MyGrid photos={this.state.message} />
      </div>
    );
  }
 
}

export default App;
