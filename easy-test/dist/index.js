import express from 'express';
import { prisma } from "./db.js";
const app = express();
import { z } from 'zod';
const PORT = process.env.PORT || 3000;
app.use(express.json());
const Schema = z.object({
    a: z.number(),
    b: z.number()
});
app.post("/sum", async (req, res) => {
    const parsedData = Schema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(422).json({ error: "Invalid input" });
    }
    const { a, b } = parsedData.data;
    const result = a + b;
    await prisma.request.create({
        data: {
            a: a,
            b: b,
            result: result,
            type: "Sum"
        }
    });
    res.json({ result });
});
app.post("/multiply", async (req, res) => {
    const parsedData = Schema.safeParse(req.body);
    if (!parsedData.success) {
        return res.status(422).json({ error: "Invalid input" });
    }
    const { a, b } = parsedData.data;
    const result = a * b;
    await prisma.request.create({
        data: {
            a: a,
            b: b,
            result: result,
            type: "Multiply"
        }
    });
    res.json({ result });
});
app.get("/health", (req, res) => {
    res.status(200).json({ status: "Server IS Running" });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export { app };
