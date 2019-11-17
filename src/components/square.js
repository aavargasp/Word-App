import React from 'react'

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false
        };
    }

    render() {

        const letter = this.props.letter

        return (
            <button
                className="square"
                onClick={() => this.props.addLetter(letter)}
            >
                {letter}
            </button>
        );
    }
}

export default Square