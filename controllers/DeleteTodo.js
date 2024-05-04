//import th model

const todo = require("../Model/Todo");
//define route handler

exports.DeleteTodo = async(req,res) => {
    try {
        const {id} = req.params;
        

        await todo.findByIdAndDelete(id);
             
        res.status(200).json({
            success: true, 
            
            message : "Delete Successfully"
        })
    }
    catch(err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        })
    }
}