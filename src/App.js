import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import SlideShow from "./components/Landing/SlideShow";
import Footer from "./components/Footer";
import Card from "./components/Landing/Card";
import CardList from "./components/Landing/CardList";


function App() {
  return (
    <div>
      <Nav />
      <SlideShow />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
