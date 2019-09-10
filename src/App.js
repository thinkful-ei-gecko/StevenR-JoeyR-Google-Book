import React from 'react';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchBooks: 'joey',
      filter: null,
    }
  }
  search(searchBooks){
    return searchBooks.split(' ').join('+');
  }
  setUrl(url){
  
    return `${url}?q=${this.search(this.state.searchBooks)}`
  }
  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes'
    const options ={
      method: 'GET',
    }
    
    fetch(this.setUrl(url), options)
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items
        })
      })
  
    
    
  }

  render() {
    console.log(this.state.books)
    return(<section>
      
  <div> {this.state.books} </div>
      
    </section>)
  }
}



export default App;
