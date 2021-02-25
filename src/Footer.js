import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return <div className="turn">Player: {this.props.turn} Turn</div>
    }
}
