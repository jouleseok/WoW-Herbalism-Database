import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.get('/', (request, response) => {
    response.json({info: 'Node.js, Express, and Postgres API'})
});

app.listen(port, ()=> {
    console.log(`App running on port ${port}.`)
});