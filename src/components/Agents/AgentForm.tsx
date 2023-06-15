import type { FC } from "react";
import styles from "./AgentForm.module.css";
// import { IAgent } from "../../types/Agent";

const AgentForm: FC<{}> = () => {
  return (
    <div className={styles.container}>
      <h2>Add a new agent!</h2>
      <form action="">
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" />

        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" />

        <label htmlFor="photoUrl">Photo URL:</label>
        <input type="text" id="photoUrl" />

        <label htmlFor="agentLicence">Agent licence:</label>
        <input type="text" id="agentLicence" />

        <label htmlFor="address">Adress:</label>
        <input type="text" id="address" />

        <label htmlFor="practiceAreas">Practice area:</label>
        <input type="text" id="practiceAreas" />

        <label htmlFor="aboutMe">About me:</label>
        <input type="text" id="aboutMe" />

        <button>Add!</button>
      </form>
    </div>
  );
};

export default AgentForm;
