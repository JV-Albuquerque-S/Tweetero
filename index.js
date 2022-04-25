import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const login = [];
const posts = [];

app.post("/sign-up", (req, res) => {
    const conta = req.body;
    login.push(conta);
    res.send("OK");
})

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    posts.push(tweet);
    res.send("OK");
})

app.get("/tweets", (req, res) => {
    let resposta = [];
    
    res.send(resposta);
})

app.listen(5000, () => {
    console.log("teste")
});