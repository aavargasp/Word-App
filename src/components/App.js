import React from 'react'
import Board from './Board.js'
import dictionary from '../dictionary.json'

class App extends React.Component {

    words = dictionary.words.slice()
    result = "invalid"

    constructor() {
        super()
        this.state = {
            currentWord: []
        }

        this.onLetterClick = this.onLetterClick.bind(this)
        this.onSelectedLetterClick = this.onSelectedLetterClick.bind(this);
    }

    render() {

        this.checkDictionary(this.state.currentWord.join(''))
        console.log("Current Word: ", this.state.currentWord)

        return (
            <div className="app-container">
                <div className="board-container">
                    <Board
                        onLetterClick={this.onLetterClick}
                        onSelectedLetterClick={this.onSelectedLetterClick}
                    />
                </div>
                <div className="tools-container">
                    <div className="clear-container">
                        <label className="clear-label">clear word</label>
                        <button className="clear-button" type="reset" onClick={this.onClearClick}></button>
                    </div>
                    <div className="word-container">
                        <label className="word">{this.state.currentWord.join('')}</label>
                        <label className="word-result">{this.result}</label>
                    </div>
                </div>
            </div>
        )
    }

    onClearClick = () => {
        this.setState({ currentWord: [] });
        this.result = "invalid"
    };

    onLetterClick(letter) {
        this.setState((prevState) => {
            let currentWord = prevState.currentWord.push(letter)
            return currentWord
        })
    }

    onSelectedLetterClick(letter) {
        /* this.setState((prevState) => {
            const newArray = prevState.currentWord.filter(item => item !== letter)
            return newArray
        }) */

        this.setState(prevState => ({
            currentWord: prevState.currentWord.filter(item => item !== letter)
        }));
    }

    checkDictionary(currentWord) {
        const exists = this.words.some(
            function (arrVal) {
                return currentWord === arrVal.toUpperCase();
            });
        if (exists)
            this.result = "valid"
        else
            this.result = "invalid"
    }
}

export default App