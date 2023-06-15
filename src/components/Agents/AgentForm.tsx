import type { FC } from "react";
import { useState } from "react";
import styles from "./AgentForm.module.css";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import { emptyAgent } from "../utils/emptyAgent";

const AgentForm: FC<{}> = () => {
  const [agent, setAgent] = useState<IAgent>(emptyAgent);

  function handleChange(e: any) {
    const { target } = e;
    const { name, value } = target;

    const newValues = {
      ...agent,
      [name]: value,
    };

    setAgent(newValues);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    async function createNewAgent() {
      await axios
        .post("/agents", agent)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setAgent(emptyAgent);
      alert("SE GUARDO EL NUEVO AGENTE");
    }

    createNewAgent();
  }
  return (
    <div className={styles.container}>
      <h2>Add a new agent!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          value={agent.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          value={agent.lastName}
          onChange={handleChange}
        />

        <label htmlFor="photoUrl">Photo URL:</label>
        <input
          type="text"
          id="photoUrl"
          name="photoUrl"
          value={agent.photoUrl}
          onChange={handleChange}
        />

        <label htmlFor="agentLicence">Agent licence:</label>
        <input
          type="text"
          id="agentLicence"
          name="agentLicence"
          required
          value={agent.agentLicence}
          onChange={handleChange}
        />

        <label htmlFor="address">Adress:</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          value={agent.address}
          onChange={handleChange}
        />

        <label htmlFor="practiceAreas">Practice area:</label>
        <input
          type="text"
          id="practiceAreas"
          name="practiceAreas"
          value={agent.practiceAreas}
          onChange={handleChange}
        />

        <label htmlFor="aboutMe">About me:</label>
        <textarea
          id="aboutMe"
          name="aboutMe"
          value={agent.aboutMe}
          onChange={handleChange}
        />

        <button type="submit">Add!</button>
      </form>
    </div>
  );
};

export default AgentForm;
