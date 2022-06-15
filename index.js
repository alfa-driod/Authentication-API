const express=require('express');
const app =express();
const PORT  =3000 || process.env.PORT;
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose= require('mongoose')
const UserController=require('./controller/user_controller')
mongoose.connect("mongodb+srv://Prince:pharisee@cluster0.q2loh.mongodb.net/login_page?retryWrites=true&w=majority")
.then(function () {
    console.log('Db conected')
})
.catch(function () {
   console.log('DB not connected') 
})


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.post('/signup',UserController.signup),
app.post('/signin',UserController.signin),






app.listen(PORT,function () {
    console.log('server running on PORT')
}) 