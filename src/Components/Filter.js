import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
                <div className="filter-sort">
                    Order{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Price: Low to High</option>
                        <option value="highest">Price: High to Low</option>
                    </select>
                </div>
                <div className="filter-size" value={this.props.size} onChange={this.props.filterProducts}>
                    Filter
                    <select>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
            </div>
        )
    }
}
