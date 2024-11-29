import React, { Component } from 'react'
import withTabs from '../../../../shared/HOC/withTabs'
import ArticleTabsItem from '../ArticleTabsItem/ArticleTabsItem'

const ArticleTabs = (props) => {
    const {state: {list}, handleOpen} = props;
    const articleElements = list.map((item, idx) => 
    <ArticleTabsItem 
        {...item} 
        handleClick={() => handleOpen(idx)}
    />)
    return(
        <div className="container-tab">
            <ul className="accordion-tabs">
                {articleElements}
            </ul>
        </div>
    )
}

export default withTabs(ArticleTabs)