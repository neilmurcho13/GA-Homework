import express from 'express';
import router from './config/router.js'
import { port } from './config/environment.js';
import { connectDb } from './db/helpers.js';

const app = express()

app.use(express.json())

app.use('/api', router)


async function startServer() {
    try {
        await connectDb();
        console.log('🤖 Mongoose is connected');
        app.listen(port, () => console.log(`🤖 Listening on Port: ${port}`));
    } catch (err) {
        console.log('🤖 Oh no something went wrong', err);
    }
}

startServer();

// app.get('/', function (req, res) {
//     res.send('Hello World...welcome to SEI')
// })

// app.listen(port, () => {
//         console.log(`movies API at http://http//localhost:${port}`)
//     });

// app.post('/user', function (req, res) {
//     console.log(req.body)
//     res.send('received, thanks!')
// })

// app.get('/', function (req, res) {
//     res.send(new Date().toDateString())
// })