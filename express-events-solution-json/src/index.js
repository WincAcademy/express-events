import express from "express";
import usersRouter from "./routes/users.js";
import eventsRouter from "./routes/events.js";
import categoriesRouter from "./routes/categories.js";

const app = express();
app.use(express.json());

// Resource routes
app.use("/users", usersRouter);
app.use("/events", eventsRouter);
app.use("/categories", categoriesRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
