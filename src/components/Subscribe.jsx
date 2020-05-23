import React from "react";
import styled from "styled-components";

const arrow = require("images/arrow-right.svg");

const Container = styled.section`
  padding: 4rem 4rem 6rem;
  h3,
  a {
    font-family: "Peace Sans";
    font-weight: normal;
    font-size: 1.8em;
    max-width: 950px;
    margin: 0 auto;
    color: #3c294f;
    text-align: center;
  }
  a {
    text-transform: uppercase;
    display: block;
    padding: 2rem;
    border: 3px solid #3c294f;
    box-shadow: 6px 6px 0 0 #fff, 9px 9px 0 0 #3c295f;
    text-decoration: none;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: center;
    transition: all linear 0.1s;
    span {
      flex: 1 1 100%;
    }
    img {
      margin-left: 1rem;
      width: 60px;
      height: auto;
      transition: all linear 0.1s;
    }
    &:hover,
    &:focus,
    &:active {
      background-color: #f7f7f7;
      box-shadow: 9px 9px 0 0 #3c294f;
      img {
        transform: translate(5px, 0);
      }
    }
  }
  @media (max-width: 1132px) {
    h3,
    a {
      font-size: 1.4em;
    }
  }
  @media (max-width: 550px) {
    padding: 4rem 2rem 6rem;
    h3,
    a {
      font-size: 1.2em;
    }
  }
`;

export default class Subscribe extends React.Component {
  render() {
    return (
      <Container>
        <a
          href="https://institutoupdate.us10.list-manage.com/subscribe?u=5fd1872fc9e6862c76e6066ef&id=09d33d31d3"
          target="_blank"
          rel="external"
        >
          <span>
            Inscreva-se aqui para receber o link da transmissão e mais
            informações sobre Im.pulsa
          </span>
          <img src={arrow.default} />
        </a>
      </Container>
    );
  }
}
