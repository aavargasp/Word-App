import React from 'react'
import Square from './Square.js'
import data from '../test-board-2.json'

class Board extends React.Component {

    letters = data.board.slice();

    render() {
        //Ask handler passed via props
        const onLetterClick = this.props.onLetterClick;

        //Need to know the size of the grid
        const square = Math.sqrt(this.letters.length)

        //Build the board based on the number of letters
        let table = []
        let position = 0
        for (let i = 0; i < square; i++) {
            let columns = []
            for (let j = 0; j < square; j++) {
                columns.push(this.renderSquare(position, this.letters[position], onLetterClick))
                position = position + 1
            }
            table.push(<div className="board-row">{columns}</div>)
        }
        return table
    }

    renderSquare(id, letter, onLetterClick) {
        return <Square key={id} letter={letter} onLetterClick={onLetterClick} />;
    }
}

export default Board