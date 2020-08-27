import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Single Exercise Component
const Attraction = (props) => {
    return (
      <tr>
        <td>{props.attractions.name}</td>
        <td>{props.attractions.description}</td>
        <td>{props.attractions.website}</td>
        {/* <td>{props.exercise.date.substring(0,10)}</td>
        <td>
          <Link to={"/edit/" + props.exercise._id}>edit</Link>|{" "}
          <a 
          href="#"
          onClick={() =>{props.deleteExercise(props.exercise._id)}}
          >
            delete
          </a>
        </td> */}
      </tr>
    )
  }
// ExerciseList Component
export default class Attractions extends Component {
  constructor(props){
    super(props)
    // this.deleteExercise = this.deleteExercise.bind(this)
    this.state={
      attractions: []
    };
  }
  componentDidMount(){
    axios.get('http://localhost:5000/attractions/')
      .then(response => {
        this.setState({
          attractions: response.data
        })
        console.log('this is the class project')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  attractionsList(){
    return this.state.attractions.map((currentAttraction) =>{
      return <Attraction 
        exercise = {currentAttraction}
        key={currentAttraction._id}
      />
    })
  }
  render() {
    return (
      <div>
        <h3>Attractions</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Website</th>
              {/* <th>Date</th>
              <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {this.attractionsList()}
          </tbody>
        </table>
      </div>
    )
  }
}