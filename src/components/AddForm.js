import React, { Component } from 'react'


export default class AddForm extends Component {
    render() {
        const {onAdd}=this.props
        return (
            <form onSubmit={onAdd}>
              <div className="control">
                    <input name="name" className="input is-focused" type="text" placeholder="Enter Name" />
                    <input name="calories" className="input is-focused" type="number" placeholder="Enter Calories" />
                    <input name="image" className="input is-focused" type="text" placeholder="Add an Image" />
                      <button type="submit" className="button is-primary">Submit</button>

            </div>  
            </form>
        )
    }
}
