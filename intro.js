const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World, this is a Node server with Express.')
});

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});