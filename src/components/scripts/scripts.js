import { hot } from 'react-hot-loader'

import React from 'react'
import ReactDom from 'react-dom'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 2
        }
    }

    climb = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div onClick={this.climb}>
                <h1>
                    Counts {this.state.count}
                </h1>
            </div>
        )
    }
}

hot(module)(Counter)

ReactDom.render(<Counter />, document.querySelector('#root'))
