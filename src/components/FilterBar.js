import React from 'react'

export default class FilterBar extends React.Component {
    handlePrintFilter = (event) => {
        this.props.handlePrintTypeFilter(event.target.value)
    }
    handleBookFilter = (event) => {
        this.props.handlePriceFilter(event.target.value)
    }

    render() {
        return (
            <div>
            <div >
                <label htmlFor="printFilter">Print Type:</label>
                <select onChange={this.handlePrintFilter}
                name="printFilter" 
                id="printFilter">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </div>
            <div >
                <label htmlFor="bookFilter">Book Type:</label>
                <select onChange={this.handleBookFilter}
                name="bookFilter" 
                id="bookFilter">
                    <option value="free-ebooks">Free</option>
                    <option value="paid-ebooks">Paid</option>
                </select>
            </div>
            </div>
        )
    }
}