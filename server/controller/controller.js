

const model = require('../modules/module')

//post : http://localhost:8080/api/categories
async function create_Categories(req,res){
  const Create=new model.Categories({
    type:"Investment",
    color:"#FCBE44"
  })

 await Create.save(function(err){
    if(!err) return res.json(Create)
    return res.status(400).json({message:`Error while creating categories ${err}`})
  })
}

//post : http://localhost:8080/api/categories
async function get_Categories(req,res){ 
  let data=await model.Categories.find({})

  // let filter =await data.map(v=>Object.assign({},{type:v.type,color:v.color}))
  return res.json(data);
}
//post : http://localhost:8080/api/transaction
async function create_transaction(req,res){
  if(!req.body) return res.status(400).json("Post http data not provided")
  let {name,type,amount}=req.body;

  const create=await new model.Transaction({
    name,type,amount,date:new Date()
  })
  create.save(function(err){
    if(!err) return res.json(create)
    return res.status(400).json({message:`Error while creating transaction ${err}`})
  })
}

//get : http://localhost:8080/api/transaction
async function get_transaction(req,res){
  let data = await model.Transaction.find({});
  return res.json(data);
}

//delete : http://localhost:8080/api/transaction
async function delete_transaction(req,res){
  console.log(req.body)
   if(!req.body.id) return res.status(400).json({message:'Request body not found'});
   await model.Transaction.deleteOne({_id:req.body.id},function(err){
    if(!err) return res.json("record deleted..");
   }).clone().catch(function(err){
     res.json("Error while deleting Transaction Record")
   })
}

//get : http://localhost:8080/api/labels
async function get_labels(req,res){  
   model.Transaction.aggregate([
    {
      $lookup:{ 
            from:'categories',
            localField: 'type',
            foreignField: 'type',
            as:'categories_info'
          }      
    },    
    {
     $unwind: {path: "$categories_info",
      preserveNullAndEmptyArrays: true}
    }
  ])

  .then(result=>{   
    let data=result.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categories_info?.["color"]}));
    res.json(data);
  }).
  catch(error=>{
    res.status(400).json(error,"Lookup collection error")
  })
}
module.exports={create_Categories,get_Categories,create_transaction,get_transaction,delete_transaction,get_labels}