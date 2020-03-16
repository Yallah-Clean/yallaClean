var mongoose = require('../config/connection');

var residentRegSchema = {
    name: String,
    phone:String,
    address:String,
    walletAddress:String,
    userAddress:String
}

var schema = mongoose.Schema(residentRegSchema);
var ResidentRegModel = mongoose.model('ResidentReg', schema);

module.exports =  ResidentRegModel;