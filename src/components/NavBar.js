import {useState,useEffect} from "react";
import {NavBar, Component} from "react-bootstrap"
import linkedin from 'src/images/linkedin.svg'
import github from 'src/images/github.svg'

export const NavBar = () => {
  const [activateLink, setActiveLink] = useState('home');
  const [scroll, setScroll] = useState('false');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScroll(true);
      }else{
        setScroll(false);
      }
    }
  
    window.addEventListener('scrolled', onScroll);
    return () => window.removeEventListener("scrolled", onScroll);
    }, [])

    return (
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src = {''} alt = 'logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className= {activateLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> clickedActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#projects" className= {activateLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> clickedActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#skills" className= {activateLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> clickedActiveLink('skills')}>Skills</Nav.Link>
            </Nav>
            <span className = "navbar-text">
              <div className = "social-icon">
                <a href="#linked-in"><img src={'src/images/linkedin.svg'} alt="linked-in" /></a>
                <a href="#github"><img src={'src/images/github.svg'} alt="github" /></a>
              </div>
              <button className ="social-button" onClick={() => console.log("clicked")}><span>Let's Connect</span></button>
              </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}