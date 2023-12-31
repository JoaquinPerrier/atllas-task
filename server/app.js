const express = require("express");
const { Agent } = require("./model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/agents", async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

app.post("/agents", async (req, res) => {
  try {
    let {
      firstName,
      lastName,
      photoUrl,
      agentLicence,
      address,
      practiceAreas,
      aboutMe,
    } = req.body;

    if (!firstName || !lastName || !agentLicence || !address) {
      throw Error("Error: missing params");
    }

    await Agent.create({
      firstName,
      lastName,
      photoUrl,
      agentLicence,
      address,
      practiceAreas,
      aboutMe,
    });

    const agents = await Agent.findAll();
    return res.json(agents);
  } catch (err) {
    res.status(501).send({ message: err.message });
  }
});

module.exports = app;
