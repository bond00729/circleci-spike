const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world! Im not even sure that this is necessary for my circle ci spike');
});

app.listen(4000, () => console.log('circleci-spike app listening on port 4000!'));