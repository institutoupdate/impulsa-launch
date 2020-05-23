import React from "react";

import "normalize.css";
import "styles/main.less";

import Header from "components/Header.jsx";
import Live from "components/Live.jsx";
import Speakers from "components/Speakers.jsx";
import Subscribe from "components/Subscribe.jsx";
import Footer from "components/Footer.jsx";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Live />
        <Speakers />
        <Subscribe />
        <Footer />
      </>
    );
  }
}
