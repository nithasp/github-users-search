import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <div className="wrap-navbar">
        <Link to="/">
          <h1>Search Github Users</h1>
        </Link>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #fff;
  .wrap-navbar {
    width: 93vw;
    margin: 0 auto;
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
  }

  h1 {
    font-size: 35px;
    letter-spacing: 1px;
  }
  a {
    position: relative;
  }
  a:after {
    content: "";
    position: absolute;
    bottom: 2px;
    width: 0%;
    height: 2px;
    background: black;
    transition: 0.3s;
  }
  a:hover:after {
    width: 100%;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 6vw;
    }
  }
`;
export default Navbar;
