// import logo from "./logo.svg";
import "./App.css";

import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";

import MainFeed from "./components/MainFeed";

function App() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome to the news-feed</h1>
      </Jumbotron>
      <MainFeed />
    </Container>
  );
}

export default App;
