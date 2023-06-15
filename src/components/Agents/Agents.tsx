import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Agents.css";

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [loading, setLoading] = useState(true);

  let { id }: any = useParams();
  let agentFound;
  if (id || !loading) {
    agentFound = agents[id - 1];
  }

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
    }
    fetchInitialData();
    setLoading(false);
  }, []);

  return (
    <div className="agents">
      {agentFound ? (
        <Agent key={agentFound.id} agent={agentFound} />
      ) : (
        agents.map((agent) => <Agent key={agent.id} agent={agent} />)
      )}
    </div>
  );
};

export default Agents;
