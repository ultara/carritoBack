const express = require('express')
const router  = express.Router()

// Models
const Item = require('../models/Item');



// Get items
router.get('/',async (req,res)=>{
    try{
        const itemFromDB = await Item.find();
        console.log(itemFromDB);
        res.json(itemFromDB);
    }catch(err){
        res.json({message: err.message})
    }
}) 

// Create item
router.post('/', async (req, res) =>{
    console.log(req.body);
    const item = new Item({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
    });
    try{
        const newItem = await item.save();
        res.json(newItem)

    }catch(err){
        res.json({message: err.message})
    }
}); 

module.exports = router