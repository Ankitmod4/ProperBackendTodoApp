 const todo = require('../Model/Todo');

// define route handler
exports.GetTodo = async (req,res) => {
    try {
        const data =await todo.find({})
       
        res.status(200). json({
            success: true,
            data: data,
            message:"data provided successfully",
        })
    }
    catch(err){
        console.log(err); 
        res.status(500).json({
            success: false,
            data: "failed",
            message:err.message,
        })
    }
}