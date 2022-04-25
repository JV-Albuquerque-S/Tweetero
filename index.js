import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const login = []

app.post("/sign-up", (req, res) => {
    const conta = req.body;
    login.push(conta);
    res.send("OK");
})



app.listen(5000, () => {
    console.log("teste")
});