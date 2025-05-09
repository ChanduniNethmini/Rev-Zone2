import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo_Web-revzone_white_without back.webp";
import {
  Navbar,
  Nav as BootstrapNav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { BiSearch, BiCart, BiHeart } from "react-icons/bi";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`main-navbar px-4 py-3 ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="#" className="me-auto">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt="Rev Zone Logo"
          />
        </Navbar.Brand>

        {/* Icons (always visible, on far right) */}
        <div className="d-flex align-items-center gap-3 order-lg-2 text-white">
          <BiSearch size={20} />
          <div className="position-relative">
            <BiCart size={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              2
            </span>
          </div>
          <div className="position-relative">
            <BiHeart size={20} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
              0
            </span>
          </div>
        </div>

        {/* Toggle (mobile menu) */}
        <Navbar.Toggle aria-controls="navbar-nav" className="ms-2 order-lg-3" />

        {/* NavLinks */}
        <Navbar.Collapse id="navbar-nav" className="order-lg-1">
          <BootstrapNav className="me-auto mt-3 mt-lg-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center">
            <BootstrapNav.Link as={NavLink} to="/" end className="mx-lg-2">
              Home
            </BootstrapNav.Link>
            <BootstrapNav.Link as={NavLink} to="/shop" className="mx-lg-2">
              Shop
            </BootstrapNav.Link>

            <NavDropdown title="Categories" id="basic-nav-dropdown" className="mx-lg-2">
              <NavDropdown.Item as={NavLink} to="/categories/brake-levers">
                Brake Levers
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/Grips">
                Grips
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/Spark-Plugs">
                Spark Plugs
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/Lubes-Oils">
                Lubes & Oils
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/Oil-Filters">
                Oil Filters
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/Bolts-Screws">
                Bolts & Screws
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/Blank-Keys">
                Blank Keys
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/Tire-Valves">
                Tire Valves
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/Carbon-Guards">
                Carbon Guards
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/categories/Thermometers">
                Thermometers
              </NavDropdown.Item>
            </NavDropdown>

            <BootstrapNav.Link as={NavLink} to="/About-Us" className="mx-lg-2">
              About Us
            </BootstrapNav.Link>
            <BootstrapNav.Link as={NavLink} to="/Contact-Support" className="mx-lg-2">
              Contact / Support
            </BootstrapNav.Link>
          </BootstrapNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
