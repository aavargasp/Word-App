import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './components/board.js'

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="clear">
          <label className="clear-label">clear word</label>
          <button className="clear-button" type="reset"></button>
        </div>
        <div className="game-board">
          <Board />
        </div>
        <div className="word">F J K</div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
