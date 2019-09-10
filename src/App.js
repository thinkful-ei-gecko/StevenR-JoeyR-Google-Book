import React from 'react';
import Form from './components/Form';
import FilterBar from './components/FilterBar'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchBooks: 'joey+romo',
      filterPrice: 'ebooks',
      filterPrintType: 'all',
    }
  }
  search(searchBooks){
    return searchBooks.split(' ').join('+');
  }
  filter(){
    return `&filter=${this.state.filterPrice}&printType=${this.state.filterPrintType}`
  }
  handleSearch =(input)=> {
    this.setState({
      searchBooks: input,

    }, this.getBooks)

  }
  handlePriceFilter =(input)=>{
    console.log(input)
    this.setState({
      books: [],
      filterPrice: input
    }, this.getBooks)
  }

  handlePrintTypeFilter =(input)=>{
    console.log(input)
    this.setState({
      books: [],
      filterPrintType: input
    }, this.getBooks)
    
  }

  setUrl(url){
  
    return `${url}?q=${this.search(this.state.searchBooks)}${this.filter()}`
  }
  getBooks() {
    const url = 'https://www.googleapis.com/books/v1/volumes'
    console.log(this.setUrl(url))
    
     
    
    fetch(this.setUrl(url), {method: 'GET'})
      .then(res => {
        if(res.ok){
          return res.json()
        }
      })
      // .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items
        })
      }).catch(error => console.log(error))
  
    
    
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
