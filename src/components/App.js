import React from 'react'
import Board from './Board.js'
import dictionary from '../dictionary.json'

class App extends React.Component {

    wordsDictionary = dictionary.words.slice()
    result = "invalid"

    constructor() {
        super()
        this.state = {
            wordArray: []
        }

        this.onClearClick = this.onClearClick.bind(this)
        this.onLetterClick = this.onLetterClick.bind(this)
        this.onSelectedLetterClick = this.onSelectedLetterClick.bind(this);
    }

    render() {

        this.checkDictionary(this.state.wordArray)
        console.log("Current Word: ", this.state.wordArray)

        return (
            <div className="app-container">
                <div className="board-container">
                    <Board
                        onLetterClick={this.onLetterClick}
                        onSelectedLetterClick={this.onSelectedLetterClick}
                    />
                </div>
                <div className="clear-container">
                    <label className="clear-label">clear word</label>
                    <button className="clear-button" type="reset" onClick={this.onClearClick}></button>
                </div>
                <div className="empty-container"></div>
                <div className="word-container">
                    <label className="word">{this.renderWord()}</label>
                    <label className="word-result">{this.result}</label>
                </div>
            </div>
        )
    }

    renderWord() {
        let formedWord = ""
        this.state.wordArray.forEach(element => {
            formedWord = formedWord.concat(element.letter)
        });
        return formedWord
    }

    onClearClick() {
        this.setState({
            wordArray: []
        })
        this.result = "invalid"
    }

    onLetterClick(id, letter) {
        const squareClicked = { id, letter }
        console.log("Selected Square: " + id + ", " + letter)
        this.setState({
            wordArray: this.state.wordArray.concat([squareClicked])
        })
    }

    onSelectedLetterClick(id, letter) {
        console.log("Unselected Square: " + id + ", " + letter)
        this.setState({
            wordArray: this.state.wordArray.filter(item => !(item.id === id && item.letter === letter))
        })
    }

    checkDictionary() {

        const currentWord = this.renderWord();

        const exists = this.wordsDictionary.some(
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