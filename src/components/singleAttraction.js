import React, { Component } from 'react';
import axios from "axios";
export default class EditAttraction extends Component {
  constructor(props){
    super(props)
    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    // this.onChangeWebsite = this.onChangeWebsite.bind(this);
    // this.onChangeImageURL = this.onChangeImageURL.bind(this);
    // this.onChangeAddress = this.onChangeAddress.bind(this);
    // this.onChangeCity = this.onChangeCity.bind(this);
    // this.onChangeState = this.onChangeState.bind(this);
    // this.onChangeZipcode = this.onChangeZipcode.bind(this);
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
      indoors: false,
      kidFriendly: false
    }
  }
  componentDidMount() {
    axios.get("http://localhost:5000/attractions/" + this.props.match.params.id)
    .then((response) => {
      this.setState({
        name: response.data.name,
        description: response.data.description,
        website: response.data.website,
        imageURL:response.data['image url'],
        location: {
          address: response.data.location.address,
          city: response.data.location.city,
          state:response.data.location.state,
          zipcode: response.data.location['zip code']
        },
        indoors: response.data.indoors,
        kidFriendly: response.data['family friendly']
      })
    })
    .catch((error)=>{
      console.log(error)
    })
    console.log(this.state.name)
  }
  render() {
    return (
      <div>
          <img src={this.state.imageURL} alt=""/>
          <br/>
          {this.state.name}
          <br/>
          {this.state.description}
          <br/>
          <a href={this.state.website}>Website</a>
          <br/>
          {this.state.location.address}
          <br/>
          {this.state.location.city}
          <br/>
          {this.state.location.state}
          <br/>
          {this.state.location.zipcode}
          <p>Family Friendly?</p>
          <br/>
          {this.state.kidFriendly}
      </div>
    )
  }
}