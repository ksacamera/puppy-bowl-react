import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreatePlayerForm = () => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPlayer = { name, owner, team };

    fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-fsa-et-web-ft-sf/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Player created:", data);
      })
      .catch((error) => {
        console.error("Error creating player:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Player</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="owner">Owner:</label>
        <input type="text" id="owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
      </div>
      <div>
        <label htmlFor="team">Team:</label>
        <input type="text" id="team" value={team} onChange={(e) => setTeam(e.target.value)} />
      </div>
      <button type="submit">Create Player</button>
      <Link to="/">Cancel</Link>
    </form>
  );
};

export default CreatePlayerForm;
