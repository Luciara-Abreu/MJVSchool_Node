import { Request, Response, Router } from "express";

const healthRouter = Router();

healthRouter.get('/', (req: Request, res: Response) => {
  const healthCheck = { message: "Aplicação funcionando com sucesso!" };
  res.send(healthCheck);
});

healthRouter.get('/check', (req: Request, res: Response) => {
  const healthCheck = { message: "Aplicação está funcionando normalmente" };
  res.send(healthCheck);
});

export default healthRouter