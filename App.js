import React, { Component } from 'react';

import classes from '../src/App.module.css';
import MainPage from './Containers/MainPage/MainPage';

class App extends Component{  

  componentDidMount() {
    document.title = "Gif Generator";
  }
  
render() {

    return (
        <div className={classes.App}>
          <MainPage/>
        </div>
  );
  }
}

export default App;
