import Item from "../Models/itemModel.mjs";

const createItem = async(req,res)=>{
try{
    const newItem = await Item.create(req.body)
    res.status(200).json({
        status: 'success',
        data: {newItem}
    })
}catch(e){
    res.status(400).json({message: "Error creating item"});
}
}

const getItems = async(req,res)=>{
    try{
        const items = await Item.find()
        res.status(200).json({
            status: 'success',
            data: {items}
        })
    }catch(e){
        res.status(400).json({message: "Error retrieving all items"});
    }
    }

export{createItem,getItems}