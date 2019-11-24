import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyGrid from './MyGrid';
import ImageUpload from './ImageUpload';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render () {
    return (
      <div className="App">
         <Navbar  style={{marginTop: '30px', fontFamily: 'Lato', marginBottom: '30px'}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="abs">
              <Nav.Item>
                <a href="/">
                  <img src="/logo2.png" alt="UNOWbrowser" width='100px;' />
                </a>
              </Nav.Item>
            </div>
            <div className='navbar-nav ml-auto' style={{marginRight: '15%'}}>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com">HOME</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com/onas">O NAS</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com/warsztaty">WARSZTATY</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com/shop">SHOP</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <a href="/">UDREAM</a>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com/start">START</a>
                </Nav.Link>
              </Nav.Item>
            </div>
          </Navbar.Collapse>
        </Navbar>
        <ImageUpload />
        <MyGrid/>
      </div>
    );
  }
 
}

export default App;
