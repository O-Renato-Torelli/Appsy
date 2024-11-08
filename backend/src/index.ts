import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor rodando!');
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
