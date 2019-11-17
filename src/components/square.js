import React from 'react'
import ReactDom from 'react-dom'

class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false
         };
    }
    
    render() {
      return (
        <button className="square" onClick={() => this.setState({check: !this.state.check})}>
          {this.props.value}
        </button>
      );
    }
  }

export default Square