import express, { type Request, type Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

let demoCount = 0;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

app.get('/api/demo', (_req: Request, res: Response) => {
  res.json({ demoCount });
});

app.post('/api/demo', (_req: Request, res: Response) => {
  demoCount += 1;
  console.log(`Demo requests so far: ${demoCount}`);
  res.json({ demoCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
