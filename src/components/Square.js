import React from 'react'

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isSelected: false };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {

        let button = <button
            className={this.state.isSelected ? "square-selected" : "square"}
            type="button"
            onClick={this.handleClick}
        >
            {this.props.letter}
        </button>

        return button
    }

    handleClick() {
        if (!this.state.isSelected) {
            this.props.onLetterClick(this.props.letter)
            console.log("Selected letter: " + this.props.letter)
        }
        else {
            this.props.onSelectedLetterClick(this.props.letter)
            console.log("Unselected letter: " + this.props.letter)
        }
        this.setState(state => ({
            isSelected: !state.isSelected
        }));
    }
}

export default Square
