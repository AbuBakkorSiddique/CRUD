const mongoose= require('mongoose') ; 



const InsertSchema=mongoose.Schema({

    ProductName:{type:String},
    ProductCode:{type:String},
    
    ProductImage:{type:String},
    ProductPrice:{type:String},
    ProductQuantity:{type:String},
    TotalPrice : {type:String},
    CreateDate:{type:Date,default:Date.now()},
    UpdateDate:{type:Date,default:Date.now()}




},
{versionKey:false}

)



const InsertMOdel = mongoose.model("insertData",InsertSchema)

module.exports= InsertMOdel ; 