const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

router.get('/', (req, res, next) => {
    Product.find({}, (err, products) => {
       console.log(products)
       res.json(products)
    })
})

router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
       if(err){
          res.json({
             message: err
          })
       }
       else{
          res.json({content:product})
       }
    })
 })


router.post('/add', (req, res, next) => {
    console.log(req.body);
    if(!req.body.itemName || !req.body.description || !req.body.price || !req.body.quantity){
        res.json({
            success: false, 
            message: 'Please enter all required fields'
        })
    }
    else{
        let newProduct = new Product({
            itemName : req.body.itemName,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity
        });
        newProduct.save((err) => {
            if(err){
                console.log(err);
                res.status(409);
                res.json({
                    message: err
                })
            }
            else{
                res.status(201);
                res.json({
                    content: newProduct
                })
            }
        });
    }
})





module.exports = router;