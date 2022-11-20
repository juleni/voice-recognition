import React from "react";
import styled from "styled-components";
import { COMMANDS } from "../utils/constants";

function Navigation({ handleNavClick }) {
  return (
    <Nav>
      <NavMenu>
        <a onClick={() => handleNavClick(COMMANDS.HOME)}>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a onClick={() => handleNavClick(COMMANDS.COMMANDS)}>
          <img src="/images/original-icon.svg" />
          <span>COMMANDS</span>
        </a>
        <a onClick={() => handleNavClick(COMMANDS.PICTURES)}>
          <img src="/images/movie-icon.svg" />
          <span>PICTURES</span>
        </a>
        <a onClick={() => handleNavClick(COMMANDS.CANVAS)}>
          <img src="/images/series-icon.svg" />
          <span>CANVAS</span>
        </a>
        <a onClick={() => handleNavClick(COMMANDS.SEARCH)}>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        {/**
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>COMMANDS</span>
        </a>
        */}
      </NavMenu>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  color: white;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #61dafb;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
