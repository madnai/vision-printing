import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyGrid from './MyGrid';
import ImageUpload from './ImageUpload';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <ImageUpload />
        <MyGrid/>
      </div>
    );
  }
 
}

export default App;
