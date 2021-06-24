import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


export default function NavbarTitle() {
  return (
    <div>
      <Navbar bg = "dark" variant = "dark">
        <Container>
          <Navbar.Brand href="#home">SEA Random Food Recomendation</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              by: <a href="https://www.linkedin.com/in/jonathan-juan-daniel-4934a2197?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BL1PCnMdCQNecY7Pi7OEVBQ%3D%3D">
              Jonathan Juan Daniel</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
