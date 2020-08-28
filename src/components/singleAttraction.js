import React, { Component } from 'react';
import axios from "axios";
export default class EditAttraction extends Component {
  constructor(props){
    super(props)
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    // this.onChangeDuration = this.onChangeDuration.bind(this);
    // this.onChangeDate = this.onChangeDate.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      description: "",
      website: "",
      imageURL:"",
      location: {
        address: "",
        city: "",
        state:"",
        zipcode:""
      },
      indoors: null,
      kidFriendly: null
    }
  }
  componentDidMount() {
    axios.get("http://localhost:5000/attractions/" + this.props.match.params.id)
    .then((response) => {
      this.setState({
        name: response.data.name,
        description: response.data.description,
        website: response.data.website,
        //imageURL:response.data.imageURL,
        location: {
          address: response.data.location.address,
          city: response.data.location.city,
          state:response.data.location.state,
          zipcode: response.data.location.zipcode
        },
        // indoors: response.data.indoors,
        // kidFriendly: response.data.kidFriendly
      })
    })
    .catch((error)=>{
      console.log(error)
    })
    console.log(this.state.name)
  }

// begin form functions: onChange and onSubmit

// onChangeUsername(e){
//   this.setState({
//     username: e.target.value
//   })
// }

// onChangeDescription(e){
//   this.setState({
//     description: e.target.value
//   })
// }

// onChangeDuration(e){
//   this.setState({
//     duration: e.target.value
//   })
// }

// onChangeDate(date){
//   this.setState({
//     date: date
//   })
// }

// onSubmit(e){
//   e.preventDefault();
//   const Attraction = {
//     username : this.state.username,
//     description: this.state.description,
//     duration: this.state.duration,
//     date: this.state.date
//   }
//   console.log(Attraction)

//   axios.post('http://localhost:5000/Attractions/update' + this.props.match.params.id, Attraction)
//     .then((res)=>{
//       console.log(res.data)
//     }).catch((err)=>{console.log(err)})
//     window.location="/"
// }

//end form funtions
  render() {
    return (
      <div>
          {this.state.name}
        {/* <h3>Edit Attraction Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label >Username: </label>
            <select 
              ref="userInput"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user)=>{
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="form-group">
            <label >Description:</label>
            <input
            type="text"
            required
            className="form-control"
            value={this.state.description}
            onChange={this.onChangeDescription}/>
          </div>
          <div className="form-group">
            <label>Duration(in minutes):</label>
              <input
              type="text"
              required
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
          </div>
          <div className="form-group">
              <label>Date:</label>
              <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
              />
          </div>
          <div className="form-group">
            <input
            type="submit"
            value="edit Attraction Log"
            className= "btn btn-primary"
            /> */}
          {/* </div>
        </form> */}
      </div>
    )
  }
}