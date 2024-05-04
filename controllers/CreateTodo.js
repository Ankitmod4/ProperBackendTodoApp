const todo = require('../Model/Todo');

// define route handler
exports.CreateTodo = async (req,res) => {
    try {
        // extract title and description
        const { title, description } = req.body;
        // create a new todo obj and insert in db
        const response = await todo.create({ title, description });
        // Send a json response with success flag
        res.status(200). json({
            success: true,
            data: response,
            message:"data created successfully",
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