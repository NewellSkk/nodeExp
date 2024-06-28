const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect=(callback)=>{

MongoClient.connect('mongodb+srv://newellsikuku:Newell164*@cluster0.h5ls1r2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(client=>{
    console.log("Connected to DB!");
    callback(client)
})
.catch (err=>{
    console.log(err)
}) ;
}

module.exports = mongoConnect; 