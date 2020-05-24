import React from "react";
import styled, { css } from "styled-components";
import { Parallax, Background } from "react-parallax";

const logo = require("images/impulsa.svg");
const title = require("images/title.svg");
const bgImage = require("images/header-bg.jpg");
const hands = require("images/bg-hands.png");
const bgElements = require("images/header-elements.png");
const scroll = require("images/scroll-down.svg");

const Container = styled.header`
  background: url(${bgImage.default});
  background-position: center;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    margin: 0;
    img {
      display: block;
      margin: 5vh auto;
      width: 100px;
      height: auto;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  color: #fff;
  font-family: "Peace Sans";
  text-transform: uppercase;
  padding-top: 40vh;
  padding-bottom: 5em;
  position: relative;
  z-index: 10;
  h2 {
    font-size: 10vw;
    margin: 0;
    span {
      display: block;
      transform: scale(1, 1.4);
    }
    img {
      width: 30vw;
    }
  }
  p {
    max-width: 25vw;
    margin: 0 auto;
    font-size: 1.5vw;
  }
  a {
    display: block;
    margin: 2rem 0;
    img {
      width: 50px;
    }
  }
  @media (max-width: 900px) {
    padding-top: 35vh;
    h2 {
      font-size: 30vw;
      img {
        width: 80vw;
      }
    }
    p {
      font-size: 5vw;
      max-width: 80vw;
    }
  }
`;

const ParallaxContainer = styled.div`
  position: absolute;
  max-width: 1268px;
  top: 15vw;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100vw;
  margin: 0 auto;
  pointer-events: none;
  .hands {
    top: 5vw;
  }
  .elements {
    top: 0;
    height: auto !important;
  }
  @media (max-width: 1200px) {
    top: 20vw;
    width: 120vw;
    left: -10vw;
    max-width: none;
    transform: translate(0, 0);
  }
  @media (max-width: 800px) {
    top: 30vw;
    width: 200vw;
    left: -50vw;
    .hands {
      top: 10vw;
    }
    .elements {
      width: 200vw !important;
      top: 15vw;
    }
  }
  @media (min-width: 1300px) {
    .elements {
      top: 0;
    }
  }
`;

const parallaxStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "visible",
  width: "auto",
  height: "auto",
};

export default class Header extends React.Component {
  _handleClick = (ev) => {
    ev.preventDefault();
    let element = document.getElementById("live");
    element.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <Container>
        <ParallaxContainer>
          <Parallax
            style={parallaxStyle}
            bgClassName="hands"
            bgImage={hands.default}
            strength={300}
          />
          <Parallax
            style={parallaxStyle}
            bgClassName="elements"
            bgImageStyle={{
            }}
            bgImage={bgElements.default}
            strength={-300}
          />
        </ParallaxContainer>
        <h1>
          <img src={logo.default} alt="Impulsa" />
        </h1>
        <Content>
          <h2>
            {isIOS ? (
              <img src={title.default} alt="Te quero eleita" />
            ) : (
              <span>Te quero eleita</span>
            )}
          </h2>
          <p>Por que é preciso eleger mais mulheres agora?</p>
          <a href="#" onClick={this._handleClick}>
            <img src={scroll.default} />
          </a>
        </Content>
      </Container>
    );
  }
}
