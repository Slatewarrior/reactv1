import React, {Component} from "react";

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term : 'dddd' }
  }
  render() {
    return (
      <div>
        <input onChange={  event => this.setState({ term : event.target.value}) } 
        value = {this.state.term}
        />
        Value of input {this.state.term}
      </div>
    );
  } 
}

export default SearchBar;