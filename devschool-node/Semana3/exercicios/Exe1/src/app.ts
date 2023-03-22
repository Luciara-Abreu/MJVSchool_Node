import express from "express";
import cors from "cors";
import RouteHello from "./route/helloRoute";

const app = express();
app.use(cors());
app.use(express.json());

const port = 3003;
app.use(RouteHello);

app.listen(port, () => {
  console.log("");
  console.log("✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨");
  console.log(`✨ 🏆 Server started on port .............. 🏆  3000 🏆   ✨`);
  console.log("✨   --------------------------------------------------   ✨");
  console.log("✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨");
});
