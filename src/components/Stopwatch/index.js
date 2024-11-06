// Write your code here
import React, { Component } from 'react';
import './index.css';

class Stopwatch extends Component {
  state = { timeElapsedInSeconds: 0, isRunning: false };

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  startTimer = () => {
    this.timerId = setInterval(this.incrementTimeElapsedInSeconds, 1000);
    this.setState({ isRunning: true });
  };

  stopTimer = () => {
    clearInterval(this.timerId);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    clearInterval(this.timerId);
    this.setState({ timeElapsedInSeconds: 0, isRunning: false });
  };

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }));
  };

  renderSeconds = () => {
    const { timeElapsedInSeconds } = this.state;
    const seconds = Math.floor(timeElapsedInSeconds % 60);
    return seconds > 9 ? seconds : `0${seconds}`;
  };

  renderMinutes = () => {
    const { timeElapsedInSeconds } = this.state;
    const minutes = Math.floor(timeElapsedInSeconds / 60);
    return minutes > 9 ? minutes : `0${minutes}`;
  };

  render() {
    const { isRunning } = this.state;
    return (
      <div className="stopwatch-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="stopwatch-display-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
            className="stopwatch-image"
          />
          <h1 className="stopwatch-time">
            {this.renderMinutes()}:{this.renderSeconds()}
          </h1>
        </div>
        <div className="stopwatch-buttons-container">
          <button
            className="start-button"
            onClick={this.startTimer}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className="stop-button"
            onClick={this.stopTimer}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button className="reset-button" onClick={this.resetTimer}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
