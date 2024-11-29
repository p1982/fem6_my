import React from 'react';

import "./List.scss";

import ListItem from "../ListItem";

const List = ({list}) => {
    const listElements = list.map(item => <ListItem {...item} />);

    return (
        <div className="products-list">
            {listElements}
        </div>
    )
}

export default List;