import React from 'react'

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isSelected: false };
        this.handleClick = this.handleClick.bind(this);
    }

    reset() {
        this.setState({ isSelected: false })
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
        if (!this.state.isSelected)
            this.props.onLetterClick(this.props.id, this.props.letter)
        else
            this.props.onSelectedLetterClick(this.props.id, this.props.letter)
        this.setState(state => ({
            isSelected: !state.isSelected
        }));
    }
}

export default Square
