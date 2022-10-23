import express from "express"

const app = express()

const PORT = 8080

app.get("/", (req, res) => {
  res.status(200).send("Welcome :)")
})

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
})