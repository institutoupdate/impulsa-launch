import React from "react";
import styled from "styled-components";

const bottomBorder = require("images/speakers-bottom-border.png");

const speakers = {
  thais: require("images/speakers/thais.jpg"),
  thainara: require("images/speakers/thainara.jpg"),
  tabata: require("images/speakers/tabata.jpg"),
  soninha: require("images/speakers/soninha.jpg"),
};

const Container = styled.div`
  background: #efb737;
  padding: 4rem 0;
  margin-bottom: 6rem;
  position: relative;
  &:after {
    content: "";
    height: 40px;
    background-image: url(${bottomBorder.default});
    background-position: center;
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
  }
`;

const Content = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const Speaker = styled.article`
  flex: 1 1 40%;
  margin: 0 2rem;
  figure {
    margin: 2rem;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
  header {
    color: #3c294f;
    margin: 3em;
    font-size: 1.2em;
  }
  @media (max-width: 950px) {
    flex: 1 1 100%;
    font-size: 0.9em;
  }
  @media (max-width: 550px) {
    margin: 0;
    header {
      margin: 2rem;
    }
  }
  @media (max-width: 400px) {
    font-size: 0.8em;
  }
`;

export default class Speakers extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Speaker>
            <figure>
              <img src={speakers.soninha.default} alt="Soninha Francine" />
            </figure>
            <header>
              <h4>Soninha Francine</h4>
              <p>
                SONINHA FRANCINE É PROFESSORA, JORNALISTA E POLÍTICA. ATUALMENTE
                É VEREADORA DE SÃO PAULO. EM 2008 E 2012 DISPUTOU A PREFEITURA.
                FOI SUBPREFEITA DA LAPA E SECRETÁRIA MUNICIPAL DE ASSISTÊNCIA E
                DESENVOLVIMENTO SOCIAL, ENTRE OUTRAS FUNÇÕES PÚBLICAS.
              </p>
            </header>
          </Speaker>
          <Speaker>
            <figure>
              <img src={speakers.tabata.default} alt="Tabata Amaral" />
            </figure>
            <header>
              <h4>TABATA AMARAL</h4>
              <p>
                TABATA AMARAL TEM 26 ANOS E FOI A 6ª DEPUTADA FEDERAL MAIS
                VOTADA DO ESTADO DE SÃO PAULO, ELEITA COM 264.450 VOTOS. NASCIDA
                E CRIADA NA VILA MISSIONÁRIA, NA PERIFERIA DE SÃO PAULO, FOI
                CAMPEÃ DE OLIMPÍADAS DE CIÊNCIAS E, A PARTIR DAÍ, GANHOU BOLSA
                EM ESCOLA PARTICULAR E DEPOIS EM HARVARD, ONDE SE FORMOU EM
                CIÊNCIA POLÍTICA E ASTROFÍSICA. FOI COFUNDADORA DO MAPA DA
                EDUCAÇÃO E DO MOVIMENTO ACREDITO. SUAS PRINCIPAIS BANDEIRAS NO
                MANDATO SÃO A EDUCAÇÃO, DIREITO DAS MULHERES, RENOVAÇÃO POLÍTICA
                E FUTURO SUSTENTÁVEL.
              </p>
            </header>
          </Speaker>
          <Speaker>
            <figure>
              <img src={speakers.thainara.default} alt="Thainara Faria" />
            </figure>
            <header>
              <h4>THAINARA FARIA</h4>
              <p>
                THAINARA FARIA TEM 25 ANOS. É ADVOGADA E PÓS GRADUANDA EM
                DIREITO CONSTITUCIONAL. A PRIMEIRA MULHER NEGRA A ASSUMIR UMA
                CADEIRA NO LEGISLATIVO MUNICIPAL. ENQUANTO VEREADORA FOI
                PRESIDENTA DA PROCURADORIA ESPECIAL DA MULHER, DA ESCOLA DO
                LEGISLATIVO E FOI MEMBRO DA COMISSÃO DE JUSTIÇA, LEGISLAÇÃO E
                REDAÇÃO, NA CÂMARA MUNICIPAL DE ARARAQUARA. SEU MANDATO DEFENDE
                OS DIREITOS DAS MULHERES, NEGROS, COMUNIDADE LGBT E JUVENTUDE.
                ATUA TAMBÉM NA PROTEÇÃO E PROMOÇÃO DOS DIREITOS DA CRIANÇA E DO
                ADOLESCENTE.
              </p>
            </header>
          </Speaker>
          <Speaker>
            <figure>
              <img src={speakers.thais.default} alt="Thais Ferreira" />
            </figure>
            <header>
              <h4>THAIS FERREIRA</h4>
              <p>
                PRETA, MULHER, MÃE E ATIVISTA. CRIA DA PERIFERIA DO RIO DE
                JANEIRO, LÍDER COMUNITÁRIA HÁ 14 ANOS. ESPECIALISTA EM SAÚDE DA
                MULHER E PRIMEIRA INFÂNCIA. É PARTE DO COLETIVO MASSA/RJ,
                COLABORADORA DO ODARAH CULTURA E MISSÃO. CO-IDEALIZADORA DO
                MOVIMENTO SEGURA A CURVA DAS MÃES.
              </p>
            </header>
          </Speaker>
        </Content>
      </Container>
    );
  }
}
