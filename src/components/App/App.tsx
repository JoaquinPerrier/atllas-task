import type { FC } from "react";
import "./App.css";

import Agents from "../Agents/Agents";
import AgentForm from "../Agents/AgentForm";

const App: FC = () => {
  return (
    <div className="app">
      <Agents />
      <AgentForm />
    </div>
  );
};

export default App;
