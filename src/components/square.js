import React from 'react'

class Square extends React.Component {

    render() {
        return (
                <button
                    className="square"
                    type="button"
                    onClick={(event) => this.props.onLetterClick(this.props.letter)}
                >
                    {this.props.letter}
                </button>

        );
    }
}

export default Square