import React from 'react';

const item = {
    padding: "15px",
    borderRadius: "5px",
    border: "1px solid",
    flex: "0 0 20%",
    margin: "20px",
    textAlign: "center"   
};

const img = {
    marginBottom: "15px",
    maxWidth: "100%",
    height: "auto"
}

const name = {
    fontSize: "18px",
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center"
};

const PortfolioCard = ({src, name})=> {
    return (
        <div style={styles.item}>
            <img style={styles.img} src={src} alt="#"/>
            <h4 style={styles.name}>{name}</h4>
        </div>
    )
};

export default PortfolioCard;