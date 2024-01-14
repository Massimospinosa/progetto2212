import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const MyNav = () => {
  return (
    <Navbar expand="lg" class="bg-black">
      <Container>
        <Navbar.Brand>
          <img src="/assets/netflix_logo.png" alt="logo sito" width="200" height="110" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-white hover-zoomma">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-white hover-zoomma">
              TV Shows
            </Nav.Link>
            <Nav.Link href="#" className="text-white hover-zoomma">
              Movies
            </Nav.Link>
            <Nav.Link href="#" className="text-white hover-zoomma">
              Recently Added
            </Nav.Link>
            <Nav.Link href="#" className="text-white hover-zoomma">
              My List
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex justify-content-end">
          <i className="text-white m-3">
           
          </i>
          <Button>
            <a href="/page2.html">
              <img src="/assets/avatar.png" className="img-fluid" width="55" height="55" alt="avatar" />
            </a>
          </Button>
          <i className="text-white m-3">
            
          </i>
          <img src="/assets/kids_icon.png" className="d-block" width="60" height="55" alt="kids icon" />
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNav;
