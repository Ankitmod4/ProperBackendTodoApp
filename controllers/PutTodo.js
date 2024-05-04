//import th model

const todo = require("../Model/Todo");
//define route handler

exports.PutTodo = async(req,res) => {
    try {
        const {id} = req.params;
        const {title,description} = req.body;

        const tod= await todo.findByIdAndUpdate(
            { 
                _id : id,
            },
            {
                title,
                description,
                updateAt : Date.now()
            }
        )
        res.status(200).json({
            success: true,
            data : tod,
            message : "Update Successfully"
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