import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      selected: []
    }
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=joey')
      .then(response => response.json())
      .then( data => {
        this.setState({
          books: [data]
          
        });
        console.log(this.state.books)
      })
  }
  setSelected(selected) {
    this.setState([
      selected
    ]);
    
    
  }

  render() {
    return(<section>
      {/* < Form 
        books={this.state.books}
        search={this.state.selected}
      /> */}
      <section>
        <div>{this.state.books}</div>
        
      </section>
      
    </section>)
  }
}



export default App;
