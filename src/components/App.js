import React from 'react'
import Board from './Board.js'
import data from '../test-board-2.json'

class App extends React.Component {

    state = {
        word: []
    };

    addLetter = letter => {
        var newLettersArray = this.state.word.slice();
        newLettersArray.push(letter);
        this.setState({word: newLettersArray});
    }

    render() {

        //Load array from JSON File
        const letters = data.board.slice();

        return (
            <div className="App">
                <div className="clear">
                    <label className="clear-label">clear word</label>
                    <button className="clear-button" type="reset"></button>
                </div>
                <Board
                    lettersData={letters}
                    addLetter={this.addLetter}
                />
                <div className="word">{this.state.word.join('')}</div>
            </div>
        )
    }
}

export default App