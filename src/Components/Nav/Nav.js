import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import HeaderLink from "./HeaderLink/HeaderLink";

import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";
import styled from "styled-components";


const Image = styled.img`
width: 80px;
height: 25px;
`

function Navigation() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
      <div className="container">
        <Navbar className="w-100" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <Image src={logo} alt="" />
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-justified w-100 nav-fill">
              <Nav.Link className="nav-link" href="/mac">
                About Us
              </Nav.Link>
              <Nav.Link href="/iphone">Our Services</Nav.Link>
              <Nav.Link href="/ipad">Media Center</Nav.Link>
              <Nav.Link href="/watch">Service Excellence</Nav.Link>
              <Nav.Link href="/tv">Contact Us</Nav.Link>
              <Nav.Link href="/support">Support</Nav.Link>
              <Nav.Link href="/search">
                <img src={search} alt="" />
              </Nav.Link>
              <Nav.Link href="/cart">
                <img src={cart} alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
