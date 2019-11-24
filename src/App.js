import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyGrid from './MyGrid';
import ImageUpload from './ImageUpload';
import MainNavbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <MainNavbar />
        <ImageUpload />
        <MyGrid/>
      </div>
    );
  }
 
}

export default App;
