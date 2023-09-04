let express = require ('express')
let app = express();
require('./db/connect')
const path = require ('path')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const RegisterModel = require('./models/schema')
let port = process.env.PORT || 4554 ;

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.set("view engine" , "hbs")



app.get ('/', (req,res)=>{
    res.render('index')
})

app.get('/register' ,(req,res) => {
 res.render("register")
})

app.post('/register' , async (req,res)=>{
    let password = req.body.password
    let cPassword = req.body.cPassword

        const registerData = new RegisterModel({
         name : req.body.name,
         email : req.body.email,
         password :req.body.password,
         ConfirmPassword:cPassword,
         phone : req.body.phone
        })
        console.log(password.length)
        // await registerData.save()
        // res.render("index")
        // if(password.length >= 5){
        //     await registerData.save()
        //     res.render("index")
        // }
        // else{
        //     res.send("length is less then 5")
        // }
       if(password === cPassword ){
        await registerData.save()
        res.render("index")
       }
       else{
        res.send("type correct confirm password ")
       }
})

app.get('/login' , (req,res) => {
    res.render("login")
})

app.post('/logIn', async (req,res)=>{
    let email = req.body.email;
    let password = req.body.password
    let getData = await RegisterModel.findOne({email:email})
    if(getData.password === password){
        res.render("index")
    }
    else{
        res.send("password or email  is wrong")
    }
})


app.listen(port , ()=>{
    console.log(`server running on port ${port}`)
})