import express from "express";

const app = express();

app.use(express.static("../../packages/website/dist"));

app.get("/api", (req, res) => {
  res.send({ message: "Hello World!", state: 200 });
});

app.listen(import.meta.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
