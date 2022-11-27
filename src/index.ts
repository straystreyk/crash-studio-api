import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { Controllers } from "./controllers";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;
const DB_CONNECTION_STRING = "mongodb://localhost:27017/crash";

// Controllers
const { getAllProjects } = Controllers;

// Projects
app.get("/v1/projects", getAllProjects);

async function main() {
  try {
    await connect(DB_CONNECTION_STRING);
    console.log(`app connected to ${DB_CONNECTION_STRING}`);

    app.listen(PORT, () => {
      console.log(`Express server started at ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
}

main();
