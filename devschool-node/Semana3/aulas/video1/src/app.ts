import express from "express";
import { Request, Response, Router } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const healtCheck = { message: "Aplicação funcionando com sucesso!" };
  res.send(healtCheck);
});
app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(" ");
  console.log("Aplication online in port: ", port);
});
