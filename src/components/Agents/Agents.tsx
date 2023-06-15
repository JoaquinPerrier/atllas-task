import type { FC } from "react";
import { useState, useEffect, useRef } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Agents.css";

const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [loading, setLoading] = useState(true);
  const [practiceArea, setPracticeArea] = useState(null);
  const inputRef = useRef(null);

  let { id }: any = useParams();
  let agentFound;
  if (id || !loading) {
    agentFound = agents[id - 1];
  }

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
      setLoading(false);
    }
    fetchInitialData();
  }, []);

  let categories = agents.map((el) => el.practiceAreas);

  function changeCategory(e: any) {
    setPracticeArea(e.target.value);
    console.log(practiceArea);
  }

  function clearCategory(e: any) {
    setPracticeArea(null);
  }

  return (
    <>
      <div className="category">
        <h5>Practice area:</h5>
        <select onChange={changeCategory} ref={inputRef}>
          {categories ? (
            <>
              <option value=""></option>
              {categories.map((area) => (
                <option value={area} key={0}>
                  {area}
                </option>
              ))}
            </>
          ) : (
            <option value="Default">Default</option>
          )}
        </select>
        <button onClick={clearCategory}>See all agents!</button>
      </div>

      <div className="agents">
        {agentFound ? (
          <Agent key={agentFound.id} agent={agentFound} />
        ) : (
          agents.map((agent: IAgent) => {
            if (practiceArea) {
              if (agent.practiceAreas === practiceArea) {
                return <Agent key={agent.id} agent={agent} />;
              }
            } else {
              return <Agent key={agent.id} agent={agent} />;
            }
            return null;
          })
        )}
      </div>
    </>
  );
};

export default Agents;
