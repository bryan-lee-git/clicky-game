import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardBlock from "./components/CardBlock";
import Footer from "./components/Footer";
import images from "./images.json"
import { CSSTransition } from "react-transition-group"
import './App.css';

const characters = images.sort(() => 0.5 - Math.random());

const styles = {
  body: {
    backgroundImage: "url('./img/background.jpg')",
    fontFamily: "'Righteous', cursive",
    minHeight: "100vh",
    margin: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
}

class App extends React.Component {

  state = {
    characters,
    currentScore: 0,
    highScore: 0,
    clicked: [],
    appear: true,
  };

  toggleAppear = () => {
    this.setState({ appear: !this.state.appear });
  }

  shuffleCharacters = () => {
    const characters = images.sort(() => 0.5 - Math.random());
    this.setState({ characters: characters });
  };

  updateScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
    const newScore = this.state.currentScore + 1;
    this.shuffleCharacters();
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore })
    };
  };

  imageClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ clicked: [...this.state.clicked, id] });
      this.updateScore();
    } else {
      this.setState({ currentScore: 0 });
      this.setState({ clicked: [] });
      this.shuffleCharacters();
    };
  };

  render() {
    return (
      <div style={styles.body} className="App">
        { this.state.currentScore === 0 && this.state.highScore !== 0 ? <div className="wobble-score"><Navbar currentScore={this.state.currentScore} highScore={this.state.highScore}/></div> : <div><Navbar currentScore={this.state.currentScore} highScore={this.state.highScore}/></div> }
        <Hero />
        <CSSTransition in={this.state.appear} appear={true} timeout={600} classNames="fade">
          { this.state.currentScore === 0 && this.state.highScore !== 0 ? <div className="wobble"><CardBlock characters={this.state.characters} imageClick={this.imageClick}/></div> : <div><CardBlock characters={this.state.characters} imageClick={this.imageClick}/></div> }
        </CSSTransition>
        <Footer />
      </div>
    );
  };
};

export default App;
