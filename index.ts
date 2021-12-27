import express from 'express';

const app = express();

app.get('add/:num1/:num2', (req, res)=>{
    const {num1, num2} = req.params;
    const sum = add(Number(num1), Number(num2));
});

app.listen(3000, () => "Application started");