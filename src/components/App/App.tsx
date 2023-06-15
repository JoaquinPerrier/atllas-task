import type { FC } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Agents from "../Agents/Agents";
import AgentForm from "../Agents/AgentForm";

const App: FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Agents />
              <AgentForm />
            </>
          }
        />

        <Route path="/agent/:id" element={<Agents />} />
      </Routes>
    </div>
  );
};

export default App;
