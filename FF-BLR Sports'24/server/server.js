const express = require("express");
const cors = require("cors");
const fs = require("fs").promises;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/save-data", async (req, res) => {
  try {
    for (let i = 0; i <= 8; i++) {
      const receivedData = req.body.data[i];
      await fs.writeFile(`data${i}.json`, JSON.stringify(receivedData));
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.get("/data0.json", async (req, res) => {
  try {
    const filePath = "./data0.json";
    const data1Content = await fs.readFile(filePath, "utf-8");

    res.json(JSON.parse(data1Content));
  } catch (error) {
    console.error("Error serving data0.json:", error);
    res.status(500).json({ error: "Failed to serve data0.json" });
  }
});

app.get("/data1.json", async (req, res) => {
  try {
    const filePath = "./data1.json";
    const data1Content = await fs.readFile(filePath, "utf-8");
    res.json(JSON.parse(data1Content));
  } catch (error) {
    console.error("Error serving data1.json:", error);
    res.status(500).json({ error: "Failed to serve data1.json" });
  }
});
app.get("/data2.json", async (req, res) => {
  try {
    const filePath = "./data2.json";
    const data1Content = await fs.readFile(filePath, "utf-8");

    res.json(JSON.parse(data1Content));
  } catch (error) {
    console.error("Error serving data2.json:", error);
    res.status(500).json({ error: "Failed to serve data2.json" });
  }
});
app.get("/data3.json", async (req, res) => {
  try {
    const filePath = "./data3.json";
    const data1Content = await fs.readFile(filePath, "utf-8");
    res.json(JSON.parse(data1Content));
  } catch (error) {
    console.error("Error serving data3.json:", error);
    res.status(500).json({ error: "Failed to serve data3.json" });
  }
});
app.get("/data4.json", async (req, res) => {
  try {
    const filePath = "./data4.json";
    const data1Content = await fs.readFile(filePath, "utf-8");
    res.json(JSON.parse(data1Content));
  } catch (error) {
    console.error("Error serving data4.json:", error);
    res.status(500).json({ error: "Failed to serve data4.json" });
  }
});
app.get("/data5.json", async (req, res) => {
  try {
    const filePath = "./data5.json";
    const data1Content = await fs.readFile(filePath, "utf-8");
    res.json(JSON.parse(data1Content));
  } catch (error) {
    console.error("Error serving data5.json:", error);
    res.status(500).json({ error: "Failed to serve data5.json" });
  }
});
app.get("/data6.json", async (req, res) => {
  try {
    const filePath = "./data6.json";
    const data1Content = await fs.readFile(filePath, "utf-8");
    res.json(JSON.parse(data1Content));
  } catch (error) {
    console.error("Error serving data6.json:", error);
    res.status(500).json({ error: "Failed to serve data6.json" });
  }
});
app.get("/data7.json", async (req, res) => {
  try {
    const filePath = "./data7.json";
    const data1Content = await fs.readFile(filePath, "utf-8");
    res.json(JSON.parse(data1Content));
  } catch (error) {
    console.error("Error serving data7.json:", error);
    res.status(500).json({ error: "Failed to serve data7.json" });
  }
});
app.get("/data8.json", async (req, res) => {
  try {
    const filePath = "./data8.json";
    const data1Content = await fs.readFile(filePath, "utf-8");
    res.json(JSON.parse(data1Content));
  } catch (error) {
    console.error("Error serving data8.json:", error);
    res.status(500).json({ error: "Failed to serve data8.json" });
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port 8080.`);
});
