import React, { useState, useEffect } from 'react';
import { fetchAgents } from './services/apiServices';

const AgentsList = () => {
  const [agents, setAgents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAgents()
      .then(data => setAgents(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Agents List</h1>
      <ul>
        {agents.map(agent => (
          <li key={agent.id}>{agent.name} - {agent.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default AgentsList;