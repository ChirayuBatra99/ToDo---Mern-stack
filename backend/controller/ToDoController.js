const ToDoModel= require("../models/ToDoModel");

module.exports.getToDos= async(req,res)=>{
    const toDos= await ToDoModel.find();
    res.send(toDos);
}

module.exports.saveToDo= (req, res)=>{
    const {toDo}= req.body

    ToDoModel.create({toDo})
    .then((data)=>{
        console.log("saved successfully")
        res.status(201).send(data)
    })
    .catch((error)=>{
    
        console.log("hiccc",error.message);
        res.send("byee");
    });
}

module.exports.updateToDo=(req,res)=>{
    const {toDo}= req.body;
    const {id}= req.params;

    ToDoModel.findByIdAndUpdate(id,{toDo})
    .then(()=>{
        console.log("updated successfully")
        res.send("updated successfully");
    })
    .catch((error)=>{
        console.log("hi",error.message);
    });
}

module.exports.deleteToDo=(req,res)=>{
    const {id}= req.params;

    ToDoModel.findByIdAndDelete(id)
    .then(()=>{
        console.log("deleted successfully")
        res.send("deleted successfully");

    })
    .catch((error)=>{
    
        console.log("hi",error.message);
    });
}


