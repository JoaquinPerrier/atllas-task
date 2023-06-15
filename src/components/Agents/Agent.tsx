import type { FC } from "react";
import { IAgent } from "../../types/Agent";
import { Link, useLocation } from "react-router-dom";

import "./Agent.css";

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
  return (
    <div className="container">
      <header>
        <div className="avatar-holder">
          <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
        </div>
        <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
      </header>
      <div className="body">{agent.aboutMe}</div>
      <footer>
        <div className="full-width-flex-box">
          <div className="one-third-flex-box">
            <span>{agent.address}</span>
          </div>
          <div className="one-third-flex-box">
            <span>Areas of Practice: {agent.practiceAreas}</span>
          </div>
          <div className="one-third-flex-box">
            {useLocation().pathname.split("/")[1] === "agent" ? (
              <Link to={`/`}>
                <button className="button-back">
                  Go back to the main page!
                </button>
              </Link>
            ) : (
              <Link to={`/agent/${agent.id}`}>
                <button className="button-details">View details! </button>
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Agent;
