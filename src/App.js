import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json';
import AddForm from './components/AddForm'
import Search from './components/Search'


export default class App extends Component {

  state = {
    showForm: false,
    food: foods,
    filteredFood: foods,
    totalItems: [],
  }

  handleShowForm = () => {
    this.setState({
      showForm: true
    })
  }

  handleAddItem = (name, quantity, calories) => {
    let myItem = { name, quantity, calories}
    
    this.setState({
      totalItems: [...this.state.totalItems, myItem]
    })

  }

  handleAddFood = (event) => {
    event.preventDefault()
    let name = event.target.name.value
    let calories = event.target.calories.value;
    let image = event.target.image.value;
    let newItem = {
      name: name,
      calories: calories,
      image: image
    }
    console.log(newItem)
    this.setState({
      showForm: false,
      food: [...this.state.food, newItem]
      
    })
  }

  handleChange = (event) => {
    let searchText = event.target.value.toLowerCase()
    let filteredList = this.state.food.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(searchText)
    })

    this.setState({
      filteredFood: filteredList
    })
  }


  render() {
    const{showForm,filteredFood, totalItems}=this.state
    return (
      <div>
        <h1>IronNutrition</h1>
        <table>
          <td>
            <Search myChange={this.handleChange} />
            {showForm ? (
              <AddForm onAdd={this.handleAddFood} />
            ) : (
              <button
                onClick={this.handleShowForm}
                className="button is-success"
              >
                Add Food
              </button>
            )}
            {filteredFood.map((element, index) => {
              return (
                <FoodBox
                  key={index}
                  myFoods={element}
                  onItemAdd={this.handleAddItem}
                />
              );
            })}
          </td>
          <td>
            <h1>Today's foods</h1>
            <ul>
              {totalItems.map((singleItem, index) => {
                return (
                  <li key={index}>
                    {singleItem.quantity} {singleItem.name} ={' '}
                    {singleItem.quantity * singleItem.calories} cal
                  </li>
                );
              })}
            </ul>
            <h2>Total: </h2>
          </td>
        </table>
      </div>
    );
  }
}