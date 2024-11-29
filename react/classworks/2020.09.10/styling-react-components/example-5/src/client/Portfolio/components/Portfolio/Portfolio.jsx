import React from 'react';
import PortfolioCard from "../PortfolioCard";

const Portfolio = ({list})=> {
    const portfolioElements = list.map(item => <PortfolioCard {...item} />);

    return (
        <div id="portfolio-list" style="display: flex">
            {portfolioElements}
        </div>
    )
}

export default Portfolio;