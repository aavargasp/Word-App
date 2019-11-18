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
    }

    render() {
        return (
            <div className="App">
                <div className="clear">
                    <label className="clear-label">clear word</label>
                    <button className="clear-button" type="reset" onClick={this.onClearClick}></button>
                </div>
                <Board
                    onLetterClick={this.onLetterClick}
                />
                <div className="word">
                    <label>{this.state.currentWord.join('')}.......</label>
                    <label>{this.result}</label>
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
            const newArray = prevState.currentWord.push(letter);
            console.log("Current Word: ", prevState.currentWord)
            this.checkDictionary(prevState.currentWord.join(''))
            return newArray
        })
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