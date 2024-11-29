import React, {} from "react";
import './Pagination.css'

const paginationProps = [{page: 1}, {page: 2}, {page: 3}]

const Pagination = ({handleClick}) => {
    const pagination = paginationProps.map(({page}) =>
        <button className="page-btn" onClick={() => handleClick(page)}>{page}</button>)
    return (
        <div className='page-btn-list'>
            {pagination}
        </div>
    )

}

export default Pagination