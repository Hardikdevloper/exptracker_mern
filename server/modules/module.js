const mongoose=require('mongoose');

const Schema=mongoose.Schema;

//categories =>fields =>['type:color']

const categories_model=new Schema({
  type:{type:String,default:'Investment'},
  color:{type:String,default:'#FCBE44'}
})

//transactions =>fields =>['name:type','amount','date']
const transaction_model=new Schema({
   name:{type:String,default:"Anonymus"},
   type:{type:String,default:'Investment'},
   amount:{type:Number,default:500},
   date:{type:Date,default:Date.now}
})

const Categories= mongoose.model('categories',categories_model)
const Transaction=mongoose.model('transaction',transaction_model)

exports.default=Transaction;
module.exports={
  Categories,
  Transaction,
}

