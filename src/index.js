import React from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBk2uu1qE6ZAdX8l1EkRZwgwtwImDo81i8';

const App = ()  => {
  return <div>
    <SearchBar />
  </div>;
};
ReactDOM.render(<App />, document.querySelector('.eliseo'));
//ReactDOM.render(<App />, document.querySelector('.eliseo'));
