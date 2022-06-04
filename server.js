const express = require('express')
const app = express()
const person = require('../models/person');
// Data Base
const DBconnect = require('./DBconnect')
DBconnect();
app.use(express.json())
//app.get("/",(req,res)=>{res.send("HALLO");});

/************************************************************************************/

//Create and Save a Record of a Model:
app.post('/add',async(req,res)=>{
    try {
        const newPerson = new person({
            name: "Mohamed",
            age: 29,
            favoriteFoods: ["pizza","makloub","couscous"]
        });
        let result = await newPerson.save()
        res.send({person: result, msg: 'person created and saved successfully'})  
    } catch (error) {
        
    }
})

/************************************************************************************/

//Create Many Records with model.create()

arrayOfPeople =[{
    name: "Bekham",
    age: 29,
    favoriteFoods: ["kosksi", "pizza", "escalope"],
  },
  {
    name: "Ronaldo",
    age: 21,
    favoriteFoods: ["kosksi", "burritos", "mange tout"],
  },
  {
    name: "Messi",
    age: 31,
    favoriteFoods: ["ma9arouna", "pizza", "djej"],
  },
  {
    name: "Mary",
    age: 65,
    favoriteFoods: ["frit", "kammounia", "escalope"],
  },
  {
    name: "Achraf",
    age: 52,
    favoriteFoods: ["loubya", "merguez", "escalope"],
}]

person.create(arrayOfPeople, (err, data) => {
    err ? console.log(err) : console.log("peoples added");
  });

/************************************************************************************/

//Use model.find() to Search Your Database


/* person.find({ name: 'Messi' },function (err, docs) {
    if (err){console.log(err)}
    else console.log(docs)
  }); */


/************************************************************************************/

//Use model.findOne() to Return a Single Matching Document from Your Database

/* person.findOne({ favoriteFoods: ["frit", "kammounia", "escalope"] }, (err, data) => {
  err ? console.log(err) : console.log(data);
}); */

/************************************************************************************/

//Use model.findById() to Search Your Database By _id

/*Person.findById({ _id: personId }, (err, data) => {
  err ? console.log(err) : console.log(data);
});*/

/************************************************************************************/
//Perform Classic Updates by Running Find, Edit, then Save

/*Person.findByIdAndUpdate(
  { _id: personId },
  { $push: { favoriteFoods: "hamburgers" } },
  (err, data) => {
    err ? console.log(err) : console.log(data);
  }
);*/

/************************************************************************************/
//Perform New Updates on a Document Using model.findOneAndUpdate()

/*Person.findOneAndUpdate({ name: "Ronaldo" },{ $set: { age: 20 }},{new:true},(err, data) => {
    err ? console.log(err) : console.log(data);});*/

/************************************************************************************/
//Delete One Document Using model.findByIdAndRemove

/*Person.findByIdAndRemove({ _id: personId }, (err, data) => {
  err ? console.log(err) : console.log(data);
});*/

/************************************************************************************/
//MongoDB and Mongoose - Delete Many Documents with model.remove()
/*   person.remove({name:"Mary"},function (err, data) {
    if (err){
      console.log(err)
    } else console.log(data)
  });  */

/************************************************************************************/
//Chain Search Query Helpers to Narrow Search Results

/*
Person.find({ favoriteFoods: "burritos" })
  .sort({ name: 1 })
  .limit(2)
  .select({ age: 0 })
  .exec(done=(err, data) => {
    err ? console.log(err) : console.log(data);
  });*/



/************************************************************************************/

app.listen(5000,(err)=>err?console.log(err):console.log('server is running'))