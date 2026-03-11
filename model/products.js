import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    altNames:{
        type:[String],
        default:[]
    },
    labelledPrice:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    images:{
        type:[String],
        default:["/default.product.jpg"]
    },
    description:{
        type:String,
       
    },
    stock:{
        type:Number,
        required:true,
        default:0

    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    category:{
        type:String,
        required:true,
        default:"cosmetics"
    }
})

const Product =mongoose.model("products",productschema)
export default Product;