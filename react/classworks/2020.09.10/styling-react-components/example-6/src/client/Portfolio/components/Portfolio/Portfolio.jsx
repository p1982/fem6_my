import React from 'react';
import styled from "styled-components";
import PortfolioCard from "../PortfolioCard";

const PortfolioList = styled.div`
    display: flex
`;

const Portfolio = ({list})=> {
    const portfolioElements = list.map(item => <PortfolioCard {...item} />);

    return (
        <PortfolioList>
            {portfolioElements}
        </PortfolioList>
    )
}

export default Portfolio;