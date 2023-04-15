import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000'
}));

//Middlewares
app.use(express.json());

mongoose.connect(
    'mongodb+srv://Denys:130299dddd@fooddeliveryapp.qikgiyt.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => app.listen(5000))
.then(() =>
    console.log('Connected')
)
.catch((err) => console.log(err));