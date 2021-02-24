import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.myChange} type="text" placeholder="Search for food"/>
            </div>
        )
    }
}
