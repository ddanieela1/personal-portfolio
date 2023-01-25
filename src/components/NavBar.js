import {useState} from "react";
import {NavBar, Component} from "react-bootstrap"

export const NavBar = () => {
  const [activateLink, setActiveLink] = useState('home');
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src = {''} alt = 'logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Skills</Nav.Link>
              <Nav.Link href="#link">Project</Nav.Link>
            </Nav>
            <span className = "navbar-text">
              <div className = "social-icon">
                <a href="#"><img src={} alt="" /></a>
              </div>
              <button className ="social-button" onClick={() => console.log("clicked")}><span>Let's Connect</span></button>
              </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}