import React, { Component } from 'react'


export default class FoodBox extends Component {
  state = {
    quantity: 0,
  };

    handleQuantity = (event) => {
      this.setState({quantity: event.target.value})
  }

  render() {
      const { name, calories } = this.props.myFoods
      const { onItemAdd } = this.props

    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.myFoods.image} alt="food" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.myFoods.name}</strong> <br />
                <small>{this.props.myFoods.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={this.handleQuantity}
                  className="input"
                  type="number"
                //   value={this.props.myFoods.quantity}
                />
              </div>
              <div className="control">
                <button
                  onClick={() => {
                    onItemAdd(name, this.state.quantity, calories);
                  }}
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
