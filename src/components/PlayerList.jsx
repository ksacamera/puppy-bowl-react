import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlayerDetails from "./PlayerDetails";

const cohortName = "2306-FSA-ET-WEB-FT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const PlayerList = ({ setPlayerDetails }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch(`${API_URL}/players/id`);
        const puppyList = await response.json();
        setPlayers(puppyList.data.players); 
        console.log(puppyList)
      } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
      }
    };
    
    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Puppy Bowl Players</h1>
      <ul>
        {players.map((player) => (
          <React.Fragment key={player.id}>
            <PlayerDetails
              player={player}
              setPlayerDetails={setPlayerDetails}
            />
            <Link to={`/player/${player.id}`}>{player.name}</Link>
          </React.Fragment>
        ))}
      </ul>
      <Link to="/create">Create New Player</Link>
    </div>
  );
};

export default PlayerList;
