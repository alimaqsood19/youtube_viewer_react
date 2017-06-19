const API_KEY = 'AIzaSyAe1dkMZyjO5TwziV7OAax6fkkNHJX4rKc';
//Create component that produces some HTML
//Then take this component's generated HTML and put it on the DOM

//import React from 'react';
//or the usual way:

import _ from 'lodash';
var ReactDOM = require('react-dom');
import React, { Component } from 'react';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

//This is a component, React renders many components at the same time, JSX is in different components that are 
//responsible for different things in an application
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards'); //since constructor only called the first time, it'll call the function with a
        //default term and will render accordingly
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0] //sets the state for selectedVideo to the first video in array list
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        // debounce: the inner function this.videoSearch(term) is only called once every 300 miliseconds
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo: selectedVideo })}
                    //Passing property onVideoSelect to VideoList, this property is a function that updates the state of
                    //selectedVideo, the function will be passed to VideoList, which will then pass it to VideoListItem 
                    videos={this.state.videos} />
            </div>
        );
    }
}


//SELF closing tag valid JSX if there is nothing within the tag we can write <App />

//when we are creating a component we are creating a class of the component, so we can have many instances of this
//component/class
//so we need to instantiate an instance of our component before passing it to ReactDOM for it to be rendered


//need ReactDOM to render our component to the DOM, React is used to create and manage our components
ReactDOM.render(<App />, document.querySelector('.container')); //Here we specify what instance of the component we 
//want to render, the second argument is where we want the instance to be rendered. At what existing element in our
//index.html file element we want it to be rendered. In this case the root node is the container element