import express from 'express';
import { add, multiply, sub } from './calc-functions';

const app = express();

app.get('add/:num1/:num2', (req, res)=>{
    const {num1, num2} = req.params;
    const sum = add(Number(num1), Number(num2));
    res.send(sum);
});

app.get('sub/:num1/:num2', (req, res)=>{
    const {num1, num2} = req.params;
    const dif = sub(Number(num1), Number(num2));
    res.send(dif);
})

app.get('multiply/:num1/:num2', (req, res)=>{
    const {num1, num2} = req.params;
    const prod = multiply(Number(num1), Number(num2));
    res.send(prod);
})

app.listen(3000, () => "Application started");