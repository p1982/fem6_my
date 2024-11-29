import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Cards extends Component {

    static defaultProps = {
        products: []
    }

    static PropTypes = {
        products: PropTypes.arrayOf(PropTypes.string)
    }

    render() {
        const {products} = this.props
        const newArr = products.map((item) => <span className={flag}>{item}</span>)
        return(
            <>
                {newArr}
            </>
        )
    }
}



export default Cards