import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './Components/data'



export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      counter:0,
      data: data
      // this.previous = this.previous.bind(this)
    }

    
    
  }

  previous = ()=>{
    if(this.state.counter === 0){
      this.setState({
        counter:24
      })
    } else {

      this.setState({
        counter: this.state.counter -1
      })
    }
  }

  counter = ()=>{
    if(this.state.counter === 24){
      this.setState({
        counter:0
      })
    } else {

      this.setState({
        counter: this.state.counter + 1
      })
    }

  }




  render() {
    const {data, counter} = this.state
    return (
      
      <div className="App">
          <header><div>Home</div></header>
          <div className="box1">
            <div className="counter">{counter +1}/25</div>
            <div className="name">{data[counter].name.first} {data[counter].name.last}</div>
            <div className="info">From: {data[counter].city}, {data[counter].country}</div>
            <div className="info">Job Title: {data[counter].title}</div>
            <div className="info">Employer: {data[counter].employer}</div>
            <div className="movies">Favorite Movies:</div>
            <div className="bullets">1. {data[counter].favoriteMovies[0]}</div>
            <div className="bullets">2. {data[counter].favoriteMovies[1]}</div>
            <div className="bullets">3. {data[counter].favoriteMovies[2]}</div>

          </div>
            <section className="buttons">
              <button className="button2" onClick={this.previous}>Previous</button>
              <div className="button">Edit</div>
              <div className="button">Delete</div>
              <div className="button">New</div>
              <button className="button2" onClick={this.counter}>Next</button>

            </section>
      </div>
    );
  }
}



