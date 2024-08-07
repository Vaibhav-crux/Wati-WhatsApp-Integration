import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(bodyParser.json());

app.use('/api/v1', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
