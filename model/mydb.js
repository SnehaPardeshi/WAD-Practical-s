const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var mydbSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    tech:{
        type:String,
        required:true
    },
    sub:{
        type:String,
        required:true,
        default:false,
    }
},
{
    timestamps:true,
}
);

//Export the model
module.exports = mongoose.model('Mydb', mydbSchema);