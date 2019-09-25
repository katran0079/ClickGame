import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };
  //endGame is the function used to effectively end the game. Upon game over, if the score is higher than the current high score, then it becomes the new high score.
  //It also maps over the cards in order to reset the card count.
  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    if (this.state.score == 12) {
      alert(`Congratulations, you got a perfect score of 12! Clever girl!`);
    } else {
      alert(
        `Game over! Click any dinosaur to play again. \nFinalscore: ${this.state.score} out of 12.`
      );
    }
    this.setState({ score: 0 });
    return true;
  };
  //clicking each card adds a point to the clicked object, basically marking it clicked. Upon clicking a previously clicked card, this function shoots out a game over alert.
  clickCount = id => {
    this.state.cards.find((z, i) => {
      if (z.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.endGame();
        }
      }
    });
  };
  // Maps/loops over the cards to create Cards Components for each. Also renders the page.
  render() {
    return (
      <div className="test">
        <Header score={this.state.score} highscore={this.state.highscore}>
          Dinosaur Clicky Game!
        </Header>
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              clickCount={this.clickCount}
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
