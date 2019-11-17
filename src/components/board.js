import React from 'react'
import ReactDOM from 'react-dom'
import Square from './square.js'
import data from '../test-board-1.json'

class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    renderTable() {
        const square = Math.sqrt(data.board.length)

        let table = []
        let position = 0
        for (let i = 0; i < square; i++) {
            let columns = []
            for (let j = 0; j < square; j++) {
                columns.push(this.renderSquare(data.board[position]))
                position = position + 1
            }
            table.push(<div className="board-row">{columns}</div>)
        }
        return table
    }

    renderSquare(letter) {
        return <Square value={letter} />;
    }

    render() {
        return (
            <div>
                {this.renderTable()}
            </div>
        );
    }
}

export default Board