import React, {Component} from "react";

class SearchBar extends Component {
  constructor(props){
 //constructor({ onSearchingKey }){ 
    super(props); 
    this.state = { term : '' }
  }
  render() {
    return (
      <div className="search-bar">
        <input 
        onChange={event => this.onInputChange(event.target.value)}
         
        /> 
      </div>
    );
  } 
  onInputChange(term1){
    console.log('onInputChangeEl0' + term1);
    this.setState({ term1 });
    this.props.onSearchingKey(term1);
  }
}

export default SearchBar;
