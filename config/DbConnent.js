let mongoose = require('mongoose');
require('dotenv').config(); 
let DbConnect=() => {
    mongoose.connect("mongodb+srv://AnkitMod:ec9ObUNKLHVqgWge@ankitcluster.e47tu6x.mongodb.net/Todo", {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(() => {
        console.log("DataBase Connected"); 
        
    }
    ).catch((err) => { 
        console.log(err);
        console.error(err.message);
        process.exit(1); 
    }
    )
}


module.exports = DbConnect;





