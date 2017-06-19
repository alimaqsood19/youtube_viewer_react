import React from 'react'; //required for all JSX
//import React, { Component } from 'react'
//same as var Component = React.Component 

//React State: A plain javascript object that is used to record and react to user events

class SearchBar extends React.Component{ //new class called SearchBar and has access to all the functionality from the
    constructor(props) {
        super(props);
        this.state = {term: ''}; //Setting the state in the constructor to an object
    }
    //Whenever a class based component's state changes it re-renders everything including its children
    //re-reuns the render() function
    //React.component class
    //Every class based component has a render method:
    //Whenever a user interacts with the input, call the event handler
        //whenever we use JSX and JS variables this.onInputChange you need curly braces!
    render() {
        return (
        <div className="search-bar">    
            <input 
                value={this.state.term}
                onChange={(event) => {this.onInputChange(event.target.value)}}/> 
        </div>
        );
    }
// input is a controlled form element controlled component, where its value is provided by this.state.term,
// has its value set by state, its value only ever change when its state changes
// so initially when SearchBar is instantiated in index.js, the initial state of this.state.term is = ''
// when a user enters a new value, the onChange callback is executed where this.state.term is updated to the new inputted
//value, then whenever a change happens, we know it re-renders everything setting the input value to the new this.state.term
//so when a user types something they didnt change the input value, they only triggered an event, and so the event then
//changes the state where when it re-renders the value of the input is then set
   
    onInputChange(term) { //this is called with every change or 'keystroke' 
      this.setState({term: term});
      this.props.onSearchTermChange(term); //this executes the onSearchtermChange function with the term passed in
      //which in index.js calls the function this.videoSearch(term) which sets the state 
    }

}

export default SearchBar;