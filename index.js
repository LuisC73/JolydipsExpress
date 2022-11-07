import express from "express";
import { pageRoute } from "./router/pageRouter.js";
import { dataBase } from "./config/dataBase.js";
const app = express();
const port = 3000;

try {
  await dataBase.authenticate();
  dataBase.sync();
  console.log(`successful in connection`);
} catch (err) {
  console.log(`Can't connect to database`);
  console.log(`Reason: ${err}`);
}

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");
app.use("/static", express.static("public"));
app.use(pageRoute);

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});
