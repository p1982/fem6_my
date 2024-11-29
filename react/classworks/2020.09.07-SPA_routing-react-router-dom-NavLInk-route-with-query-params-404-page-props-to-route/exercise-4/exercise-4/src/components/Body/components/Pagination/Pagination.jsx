import React, {} from "react";
import './Pagination.css'

import {NavLink} from "react-router-dom";

const paginationProps = [{page: 1}, {page: 2}, {page: 3}]

const Pagination = () => {
    const pagination = paginationProps.map(({page}) =>
        <NavLink to={`/workers?page=${page}`} className="page-btn">{page}</NavLink>);
    
        return (
        <div className='page-btn-list'>
            {pagination}
        </div>
    )

}

export default Pagination