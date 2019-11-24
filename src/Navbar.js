import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserView,
  MobileView
} from "react-device-detect";

const MainNavbar = () => {
    return (
        <>
        <BrowserView>
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
                <span class="nav-link" style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com">HOME</a>
                  </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com/onas">O NAS</a>
                  </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com/warsztaty">WARSZTATY</a>
                  </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com/shop">SHOP</a>
                  </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <a href="/">UDREAM</a>
                  </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '12px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <a href="https://dreamy-rosalind-cbdae7.netlify.com/start">START</a>
                  </span>
              </Nav.Item>
            </div>
          </Navbar.Collapse>
          </Navbar>
        </BrowserView>
        <MobileView>
        <Navbar collapseOnSelect expand="sm" style={{marginTop: '30px', fontFamily: 'Lato', marginBottom: '30px'}}>
        <div className="navbar-header">
          <Navbar.Brand style={{padding: '0px'}} className="abs" href="#home"><a href="/"><img src="/logo2.png" alt="UNOWmobile" width='100px;' /></a></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='navbar-nav ml-auto' style={{marginRight: '15%'}}>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                    <a href="https://dreamy-rosalind-cbdae7.netlify.com">HOME</a>
                </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                    <a href="https://dreamy-rosalind-cbdae7.netlify.com/onas">O NAS</a>
                </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black'}}>
                    <a href="https://dreamy-rosalind-cbdae7.netlify.com/warsztaty">WARSZTATY</a>
                </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                    <a href="https://dreamy-rosalind-cbdae7.netlify.com/shop">SHOP</a>
                </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                  <a href="https://relaxed-yalow-4ffa99.netlify.com/">UDREAM</a>
                </span>
              </Nav.Item>
              <Nav.Item>
                <span class="nav-link" style={{fontSize: '13px', fontWeight: '700', letterSpacing: '0.15em', color: 'black', paddingRight: '0px'}}>
                    <a href="https://dreamy-rosalind-cbdae7.netlify.com/start">START</a>
                </span>
              </Nav.Item>
            </div>
          </Navbar.Collapse>
        </Navbar>
        </MobileView>
        </>

    )
}

export default MainNavbar;