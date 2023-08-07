import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const cohortName = "2306-FSA-ET-WEB-FT-SF";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

const PlayerDetails = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/players/${id}`)
      .then((response) => response.json())
      .then((data) => setPlayer(data))
      .catch((error) => {
        console.error("Error fetching player details:", error);
      });
  }, []);

  const handleDelete = () => {
    fetch(`${API_URL}/players/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        alert(`Puppy successfully cut from the team!`)
      })
      .catch((error) => {
        console.error("Error deleting player:", error);
      });
  };

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <li>
      <img src={player.image} alt={player.name} />
      <p>Owner: {player.owner}</p>
      <p>Team: {player.team}</p>
      <p>Breed: {player.breed}</p>
      </li>
      <button onClick={handleDelete}>Delete Player</button>
      <Link to={`/player/${player.id}`}>{player.name}Back to Player List</Link>

    </div>
  );
};

export default PlayerDetails;
