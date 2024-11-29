import React from 'react';
import Button from "../../../../shared/components/Button";

import {Item, Name, Img} from "./styles";

const PortfolioCard = ({src, name})=> {
    return (
        <Item>
            <Img src={src} alt="#" />
            <Name>{name}</Name>
            <Button as="a"></Button>
        </Item>
    )
};

export default PortfolioCard;