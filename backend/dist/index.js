import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;
let demoCount = 0;
app.get('/', (_req, res) => {
    res.send('Hello World');
});
app.get('/api/demo', (_req, res) => {
    res.json({ demoCount });
});
app.post('/api/demo', (_req, res) => {
    demoCount += 1;
    console.log(`Demo requests so far: ${demoCount}`);
    res.json({ demoCount });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map