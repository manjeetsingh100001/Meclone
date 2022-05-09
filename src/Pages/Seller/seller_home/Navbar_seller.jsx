 import React from 'react'
// import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import {Link} from 'react-router-dom';

import './Navbar_seller.css'


export default function Navbar1() {


//   const Navigate=useNavigate()

// const handleLogin=()=>{
// Navigate("")
 
// }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Meesho</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Sell Online</Nav.Link>
              <Nav.Link href="#action2">How it works</Nav.Link>
              <Nav.Link href="#action3">Pricing & Commission</Nav.Link>
              <Nav.Link href="#action4">Shipping & Returns</Nav.Link>
              <Nav.Link href="#action5">Grow Business</Nav.Link>
            </Nav>

            <Link style={{textDecoration: 'none'}} to={`/sellerLogin`}>
              <Button variant="outline-success">Login</Button></Link>
              <Link style={{textDecoration: 'none'}} to={`/sellerData`}> 
            <Button variant="outline-success">Start Selling</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  );
}
