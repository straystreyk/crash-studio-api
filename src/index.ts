import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 8080

app.get("/api/v1", (req, res) => {
  res.status(200).send("Welcome :)")
})

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
})