const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/UserApi');
const blogs = require('./routes/api/BlogApi');

const app = express();


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const db = require('./config/keys').mongoURI;

mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err));

app.use('/api/user',users);
app.use('/api/blog',blogs);

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port ${port}`));
