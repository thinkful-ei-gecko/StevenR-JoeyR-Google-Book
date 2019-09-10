import React from 'react';


export default class Form extends React.Component {
handleSubmit =(event)=>{
event.preventDefault();
this.props.handleSearch(event.target.searchInput.value)
}
    render() {
        return(

        <form onSubmit={this.handleSubmit}>
            <label htmlFor="searchInput">
                Search Here:
            </label>
            <input type="text"
            action="submit"
            placeholder="Booktitle here" 
            name="searchInput"
            id="searchInput"
            ></input>
            <button type="submit">Search</button>
        </form>
        
    )}


}