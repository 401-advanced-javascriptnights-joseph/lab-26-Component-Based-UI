import React from "react";

import "./app.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Words from "./components/words/words";
import Counter from "./components/counter/counter";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Words />
        <br />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
