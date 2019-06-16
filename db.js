const mongoose = require('mongoose');
const config = require('config');

const connString = config.get('dbConfig.connectionString');
mongoose.Promise = global.Promise;
mongoose.connect(connString, {useNewUrlParser: true }, err => {
    if(err)
    {
        console.error(err.stack);
    }
});
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open.');
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected.');
});
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log('Mongoose default connection  was closed.');
        process.exit(0);
    });
});
if(process.env.NODE_ENV == "local"){
    mongoose.set('debug', true);
}
module.exports = mongoose;