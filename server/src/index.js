const express=require('express')
const app=express()
const mongoose=require("mongoose")
const route=require('./route/route')
const fetch = require("node-fetch")
const cors=require('cors')
app.use(cors());

mongoose.connect("mongodb+srv://as_21:jJHuyhJjLqbf84lK@cluster0.c3wvalt.mongodb.net/dictionarywebapp",{useNewUrlParser:true})
.then(() => console.log('mongodb running on 27017'))
    .catch(err => console.log(err))

    app.use('/', route);

app.listen(process.env.PORT || 5000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 5000))
});
