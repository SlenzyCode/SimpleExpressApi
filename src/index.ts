import express, { Request, Response } from 'express';
import { web } from "./config.json";
import chalk from "chalk";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/message", (req: Request, res: Response) => {
    res.send("Merhaba, dünya!");
});

app.post("/api/post", (req: Request, res: Response) => {
    const { name, surname, age } = req.body;
    if (!name || !surname || !age) return res.status(400).json({ code: 400, message: "Lütfen bütün bilgileri doldurun." });
    return res.json({
        message: {
            name,
            surname,
            age
        }
    });
});

app.listen(web.port, () => {
    console.log(chalk.bgGreen("Apiler başarıyla yüklendi"));
});