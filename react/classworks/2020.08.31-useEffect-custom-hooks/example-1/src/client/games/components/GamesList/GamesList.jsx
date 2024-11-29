import React, {useState, useEffect} from 'react';
import "./GamesList.css";
import GamesItem from "../GamesItem";

const GamesList = ({title}) => {
    const [games, setGames] = useState([]);

    useEffect(()=> {
        fetch("https://api.rawg.io/api/games?page_size=20&page=1")
        .then(response => response.json())
        .then(({results}) => setGames(results));
    }, [title]);

    const gamesElements = games.map(game => 
        <GamesItem key={game.id} {...game} />);

    return (
        <>
        <h2>{title}</h2>
        <ul className="games-list">
            {gamesElements}
        </ul>
        </>
    )
}

export default GamesList;