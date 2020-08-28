// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// // ExerciseList Component
// export default class Attractions extends Component {
//   constructor(props){
//     super(props)
//     // this.deleteExercise = this.deleteExercise.bind(this)
//     this.state={
//       attractions: [],
//       dynamic: ''
//     };
//   }
//   componentDidMount(){
//     axios.get('http://localhost:5000/attractions/')
//       .then(response => {
//         let argument = response.data
//         for (let i = 0; i < argument.length; i++){
//           let name = "<div><p>" + argument[i].name;
//           let description = argument[i].description;
//           let website = argument[i].website + "</p></div>";
//           console.log('J LOOP:','name:', name ,'description:', description, 'site:',website)
//           let concatThis = name + description + website
      
//         this.setState({
//           attractions: description
//         })}
//         console.log('this is the class project:', this.state)
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }

//   // componentDidMount(){
//   //   axios.get('http://localhost:5000/attractions/')
//   //     .then(response => {
//   //       this.setState({
//   //         attractions: response.data
//   //       })
//   //       console.log('this is the class project')
//   //     })
//   //     .catch((error) => {
//   //       console.log(error)
//   //     })
//   // }

//   // componentDidUpdate(){
//   //   let argument = this.state.attractions
//   //   let postHTML = ''
//   //   for (let i = 0; i < argument.length; i++){
//   //       let name = "<div><p>" + argument[i].name;
//   //       let description = argument[i].description;
//   //       let website = argument[i].website + "</p></div>";
//   //       console.log('J LOOP:','name:', name ,'description:', description, 'site:',website)
//   //       let concatThis = name + description + website
//   //   }
//   //   document.getElementById('post').innerHTML = postHTML
//   // }


//   render() {
//     return (
//       <div>
//         <h1>hello world</h1>
//           {this.state.attractions}
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Single Exercise Component
const Attraction = (props) => {
  return (
    <tr>
      <td>{props.attraction.name}</td>
      <td>{props.attraction.description}</td>
      <td><a href= {props.attraction.website} >Website</a></td>
      <td>
        <Link to={"/attractions/" + props.attraction._id}>learn more</Link>|{" "}
        <a 
        href="#"
        onClick={() =>{props.deleteAttraction(props.attraction._id)}}
        >
          delete
        </a>
      </td>
    </tr>
  )
}
// ExerciseList Component
export default class ExercisesList extends Component {
  constructor(props){
    super(props)
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
  deleteExercise(id) {  
    axios.delete('http://localhost:5000/exercises/'+id)  
    .then(res => console.log(res.data)); 
  //   this.setState({  
  //   exercises: this.state.exercises.filter(exercise => exercise._id !== id)  
  // })  
}
  exerciseList(){
    return this.state.attractions.map((currentAttraction) =>{
      return <Attraction 
        attraction = {currentAttraction}
        deleteAttraction ={this.deleteAttraction}
        key={currentAttraction._id}
      />
    })
  }
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}