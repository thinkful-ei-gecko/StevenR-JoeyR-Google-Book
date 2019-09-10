import React from 'react';
import Form from './components/Form';
import FilterBar from './components/FilterBar'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchBooks: 'joey+romo',
      filterPrice: null,
      filterPrintType: null,
    }
  }
  search(searchBooks){
    return searchBooks.split(' ').join('+');
  }
  handleSearch =(input)=> {
    this.setState({
      searchBooks: input,

    }, this.componentDidMount)

  }
  handlePriceFilter =(input)=>{
    this.setState({
      filterPrice: input
    }, this.componentDidMount)
  }

  handlePrintTypeFilter =(input)=>{
    this.setState({
      filterPrintType: input
    }, this.componentDidMount)
  }

  setUrl(url){
  
    return `${url}?q=${this.search(this.state.searchBooks)}`
  }
  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes'
    
     
    
    fetch(this.setUrl(url), {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items
        })
      })
  
    
    
  }

  render() {
    const bookHtml = this.state.books.map(book => 
    <div key={book.id}>
    <div>{book.volumeInfo.title}</div>
    <div>{book.volumeInfo.subtitle}</div>
    <div>{book.volumeInfo.authors}</div>
    </div>
    
    );
    return(
    <section>
      
      < Form handleSearch = {this.handleSearch} />
      < FilterBar handlePriceFilter = {this.handlePriceFilter}
      handlePrintTypeFilter = {this.handlePrintTypeFilter} />
      {bookHtml}
    </section>)
  }
}



export default App;
