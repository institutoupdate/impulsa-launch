import React from "react";
import styled from "styled-components";

const impulsa = require("images/impulsa_footer.svg");
const ig = require("images/instagram.svg");
const fb = require("images/facebook.svg");
const credits = require("images/credits.jpg");

const Container = styled.footer`
  background: #1f2124;
  padding: 4rem;
  @media (max-width: 550px) {
    padding: 4rem 2rem;
  }
`;

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  color: #bfbfbf;
`;

const About = styled.div`
  flex: 2 1 auto;
  margin: 0 0 2rem;
  p {
    font-style: italic;
    margin: 0 0 2rem;
    max-width: 500px;
    padding-bottom: 2rem;
    border-bottom: 1px solid #bfbfbf;
  }
  nav {
    display: flex;
    a {
      flex: 0 0 auto;
      margin: 0 1rem 0 0;
      img {
        width: 40px;
        height: auto;
        display: block;
      }
    }
  }
`;
const Credits = styled.div`
  flex: 0 0 auto;
  p {
    color: #f20063;
    font-style: italic;
    margin: 0 0 2rem;
  }
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <About>
            <img src={impulsa.default} alt="Impulsa" />
            <p>
              Nós inspiramos, treinamos e conectamos a próxima geração de
              lideranças femininas na América Latina.
            </p>
            <nav>
              <a
                href="https://www.instagram.com/impulsa.voto/"
                target="_blank"
                rel="external"
              >
                <img src={ig.default} alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/impulsa.voto"
                target="_blank"
                rel="external"
              >
                <img src={fb.default} alt="Facebook" />
              </a>
            </nav>
          </About>
          <Credits>
            <p>Im.pulsa é um projeto das</p>
            <img src={credits.default} />
          </Credits>
        </Content>
      </Container>
    );
  }
}
