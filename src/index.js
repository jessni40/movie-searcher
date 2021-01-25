// Think of this like the "main function" that starts everything

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SearchMovies from './SearchMovies';


class Main extends React.Component{
  render(){
    return(
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));