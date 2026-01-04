import express from 'express';
const app = express();
import { z } from 'zod';
const PORT = process.env.PORT || 3000;
app.use(express.json());
const Schema = z.object({
    a: z.number(),
    b: z.number()
});
app.post("/sum", (req, res) => {
    const parsedData = Schema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(422).json({ error: "Invalid input" });
    }
    const { a, b } = parsedData.data;
    const result = a + b;
    res.json({ result });
});
app.post("/multiply", (req, res) => {
    const parsedData = Schema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(422).json({ error: "Invalid input" });
    }
    const { a, b } = parsedData.data;
    const result = a * b;
    res.json({ result });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export { app };
