const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const PORT=4000;
const mongoose=require('mongoose');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0-q3yot.mongodb.net/Echanelling?retryWrites=true&w=majority", {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log('mongoDB database Connections extablished Successfully')
});

app.listen(PORT, function () {
    console.log("Server is running on PORT: " + PORT);
});

const user = require('./routes/user.serve.route');
const doctor=require('./routes/doctor.serve.route');
const appointment=require('./routes/appoinment.serve.route');

app.use('/api/user',user);
app.use('/api/doctor',doctor);
app.use('/api/appoinment',appointment);