var mongoose = require('../config/connection');

var CollectorRegSchema = {
    name: String,
    phone:String,
    address:String,
    imageUrl:String,
    nationalId:String,
    walletAddress:String,
    userAddress:String
}

var schema = mongoose.Schema(CollectorRegSchema);
var CollectorRegModel = mongoose.model('CollectorReg', schema);

module.exports =  CollectorRegModel;