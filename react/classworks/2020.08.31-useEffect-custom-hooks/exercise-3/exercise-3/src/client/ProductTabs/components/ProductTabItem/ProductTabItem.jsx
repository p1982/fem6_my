import React from 'react'

const ProductTabItem = ({name, description, active, onClick}) => {
    const activeClass = active ? 'active' : ''
    return(
        <li class="tab-head-cont">
            <a 
            href="#" 
            class="is-active"
            onClick={onClick}
            >{name}</a>
			<section className={activeClass}>
            <p>{description}</p>
			</section>
		</li>
    )
}

export default ProductTabItem