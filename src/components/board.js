import React from 'react'
import Square from './Square.js'

class Board extends React.Component {

    renderTable() {
        //Ask for data passed via props
        const { lettersData, addLetter } = this.props;

        //Need to know the size of the grid
        const square = Math.sqrt(lettersData.length)

        //Build the board based on the number of letters
        let table = []
        let position = 0
        for (let i = 0; i < square; i++) {
            let columns = []
            for (let j = 0; j < square; j++) {
                columns.push(this.renderSquare(lettersData[position], addLetter))
                position = position + 1
            }
            table.push(<div className="board-row">{columns}</div>)
        }
        return table
    }

    renderSquare(letter, addLetter) {
        return <Square letter={letter} addLetter={addLetter} />;
    }

    render() {
        return (
            this.renderTable()
        );
    }
}

export default Board