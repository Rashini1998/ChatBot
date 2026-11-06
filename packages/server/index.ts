import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config(); // should be the first line to load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
   res.send('Hello, World!');
});
app.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello from the Backend API!' });
});

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
