import React from 'react'

export default class FilterBar extends React.Component {
    handlePrintFilter = (event) => {
        this.props.handlePrintTypeFilter(event.target.printFilter.value)
    }
    handleBookFilter = (event) => {
        this.props.handlePriceFilter(event.target.bookFilter.value)
    }

    render() {
        return (
            <div>
            <form onChange={this.handlePrintFilter}>
                <label htmlFor="printFilter">Print Type:</label>
                <select 
                name="printFilter" 
                id="printFilter">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
            </form>
            <form onChange={this.handleBookFilter}>
                <label htmlFor="bookFilter">Book Type:</label>
                <select 
                name="bookFilter" 
                id="bookFilter">
                    <option value="free-ebooks">Free</option>
                    <option value="paid-ebooks">Paid</option>
                </select>
            </form>
            </div>
        )
    }
}