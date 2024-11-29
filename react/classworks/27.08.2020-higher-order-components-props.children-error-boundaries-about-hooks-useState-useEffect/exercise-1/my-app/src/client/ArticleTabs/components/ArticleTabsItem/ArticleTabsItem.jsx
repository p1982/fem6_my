import React from 'react'

const ArticleTabsItem = (props) => {
    const {title, description, active, handleClick} = props

    const className = active ? "active" : ""
    const hide = {
        display: 'none'
    }
    
    return(
        <li className={'tab-head-cont', className} onClick={handleClick}>
            <a href="#" >{title}</a>
            <section style={!className ? hide : {}}>
                <p>{description}</p>
            </section>
		</li>
    )
}

export default ArticleTabsItem