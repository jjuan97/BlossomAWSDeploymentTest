const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { sequelize, Task } = require("./sequelize/models");
const os = require("os");
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use(cors());

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Hello World!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const task = await Task.create({ title, description, completed });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Task.destroy({ where: { id } });
    if (result) {
      res.status(200).json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      // Skip internal and non-IPv4 addresses
      if (iface.family !== "IPv4" || iface.internal) {
        continue;
      }
      return iface.address;
    }
  }
  return "127.0.0.1"; // Fallback
}

sequelize
  .sync()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log(`Server is running`);
    });
    const localIP = getLocalIP();
    console.log(`Server is running on http://${localIP}:${PORT}`);
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
