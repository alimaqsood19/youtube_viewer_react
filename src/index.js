const API_KEY = 'AIzaSyAe1dkMZyjO5TwziV7OAax6fkkNHJX4rKc';
//Create component that produces some HTML
//Then take this component's generated HTML and put it on the DOM

//import React from 'react';
//or the usual way:
var React = require('react');
var ReactDOM = require('react-dom');
import SearchBar from './components/search_bar.js';

//This is a component, React renders many components at the same time, JSX is in different components that are 
//responsible for different things in an application
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

//SELF closing tag valid JSX if there is nothing within the tag we can write <App />

//when we are creating a component we are creating a class of the component, so we can have many instances of this
//component/class
//so we need to instantiate an instance of our component before passing it to ReactDOM for it to be rendered


//need ReactDOM to render our component to the DOM, React is used to create and manage our components
ReactDOM.render(<App />, document.querySelector('.container')); //Here we specify what instance of the component we 
//want to render, the second argument is where we want the instance to be rendered. At what existing element in our
//index.html file element we want it to be rendered. In this case the root node is the container element