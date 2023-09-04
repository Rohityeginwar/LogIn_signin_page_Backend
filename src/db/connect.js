let mongoose = require('mongoose')


main().catch((err)=>console.log(err))


async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/Registration" ,{
    useNewUrlParser:true,
    useUniFiedTopology:true,
   })
    console.log('connection done')
}



