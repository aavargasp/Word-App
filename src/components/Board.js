import React from 'react'
import Square from './Square.js'
import data from '../test-board-2.json'

class Board extends React.Component {

    letters = data.board.slice();
    squares = []

    clearBoard() {
        this.squares.forEach(s => s.reset())
    }

    render() {
        const onLetterClick = this.props.onLetterClick;
        const onSelectedLetterClick = this.props.onSelectedLetterClick;

        const square = Math.sqrt(this.letters.length)

        let table = []
        let position = 0
        for (let i = 0; i < square; i++) {
            let columns = []
            for (let j = 0; j < square; j++) {
                columns.push(this.renderSquare(position, this.letters[position], onLetterClick, onSelectedLetterClick))
                position = position + 1
            }
            table.push(<div className="board-row">{columns}</div>)
        }

        return table
    }

    renderSquare(id, letter, onLetterClick, onSelectedLetterClick) {
        return <Square id={id} ref={this.saveSquare(id)} letter={letter} onLetterClick={onLetterClick} onSelectedLetterClick={onSelectedLetterClick} />;
    }

    saveSquare = (id) => (ref) => {
        ref && this.squares.every(e => e.props.id !== id) && this.squares.push(ref)
    }
}

export default Board
