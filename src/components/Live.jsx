import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

const programacao = require("images/programacao.svg");
const horario = require("images/horario.svg");

const topBorder = require("images/live-top-border.png");
const headerBg = require("images/prog-bg.png");
const plus = require("images/plus.png");
const timeBg = require("images/time-bg.png");

const Container = styled.section`
  background: #3c294f;
  width: 100%;
  padding: 6rem 0 0;
  position: relative;
  padding-top: calc("40px + 2rem");
  &:before {
    content: "";
    background-image: url(${topBorder.default});
    background-position: center;
    position: absolute;
    top: -40px;
    left: 0;
    right: 0;
    height: 40px;
  }
`;

const Content = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  color: #fff;
  align-items: center;
  section {
    flex: 1 1 40%;
    margin: 0 0 6rem 0;
    .video-container {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 56.25%;
      overflow: hidden;
      margin: 0;
      box-shadow: 15px 15px 0 0 #312145;
    }
    .video-container iframe,
    .video-container video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  aside {
    margin: 4rem 0;
    padding: 0 5vw;
    flex: 1 1 10%;
    header {
      font-family: "Morganite", "Impact", "Arial", sans-serif;
      font-weight: 900;
      display: flex;
      flex-wrap: nowrap;
      ${"" /* justify-content: space-between; */}
      width: 100%;
      font-size: 4em;
      margin-bottom: 2rem;
      h3 {
        margin: 0 2rem 0 0;
        font-size: 1.4em;
        padding-top: 0.4rem;
        padding-bottom: 4.5rem;
        position: relative;
        img {
          width: 3em;
        }
        &:before {
          content: url(${plus.default});
          position: absolute;
          left: 0;
          top: -1em;
        }
        &:after {
          content: url(${headerBg.default});
          display: block;
          left: 0;
          bottom: 0;
          position: absolute;
        }
      }
      p {
        margin: 0;
        position: relative;
        > span {
          color: #f20063;
          padding: 1rem 1rem 0.4rem 1rem;
          line-height: 1;
          border: 3px solid #f20063;
          box-shadow: 6px 6px 0 0 #3c294f, 9px 9px 0 0 #f20063;
          display: flex;
          justify-content: space-between;
          align-items: center;
          img {
            width: 2.5em;
            display: block;
            margin: 0 1rem 0.5rem;
          }
          > span {
            display: block;
            margin: 0 1rem;
          }
        }
        &:after {
          content: url(${timeBg.default});
          display: block;
          position: absolute;
          left: 0;
          bottom: 0.4em;
        }
      }
    }
  }
  @media (max-width: 1480px) {
    font-size: 0.8em;
  }
  @media (max-width: 750px) {
    margin: 0 1rem;
  }
  @media (max-width: 630px) {
    section {
      flex: 1 1 100%;
      margin: 0 -1rem;
    }
    aside header {
      flex-wrap: wrap;
      margin-bottom: 4rem;
      h3,
      p {
        padding: 0;
        &:after {
          content: "";
        }
      }
      p {
        font-size: 0.8em;
      }
    }
  }
  @media (min-width: 1480px) {
    margin: 0 4rem;
  }
`;

const Speakers = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  text-transform: uppercase;
  li {
    flex: 1 0 40%;
    margin: 0 1rem 2rem 0;
    h4 {
      font-size: 1.2em;
      font-family: "Peace Sans";
      margin: 0 0 0.5rem;
    }
    p {
      margin: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      h4 {
        color: #f20063;
      }
    }
  }
`;

export default class Live extends React.Component {
  render() {
    return (
      <Container id="live">
        <Content>
          <aside>
            <header>
              <h3>
                {isIOS ? (
                  <img src={programacao.default} alt="Programação" />
                ) : (
                  "Programação"
                )}
              </h3>
              <p>
                <span>
                  {isIOS ? (
                    <img src={horario.default} alt="27/05 12h00" />
                  ) : (
                    <>
                      <span>27/05</span>
                      <span>12h00</span>
                    </>
                  )}
                </span>
              </p>
            </header>
            <Speakers>
              <li>
                <h4>Soninha Francine</h4>
                <p>Vereadora/SP</p>
              </li>
              <li>
                <h4>Thainara Faria</h4>
                <p>Vereadora em Araraquara/SP</p>
              </li>
              <li>
                <h4>Tabata Amaral</h4>
                <p>Deputada Federal/SP</p>
              </li>
              <li>
                <h4>Thais Ferreira</h4>
                <p>Candidata à deputada estadual/RJ em 2018</p>
              </li>
            </Speakers>
          </aside>
          <section>
            {window.videoId ? (
              <YouTube
                videoId={window.videoId}
                containerClassName="video-container"
              />
            ) : (
              <div className="video-container">
                <video
                  type="video/mp4"
                  src="https://impulsa.voto/teaser.mp4"
                  controls
                />
              </div>
            )}
          </section>
        </Content>
      </Container>
    );
  }
}
