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

 router.put('/:id', (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            res.status(404);
            res.send({message: 'Product not found'});
        } else{
            console.log(req.body);
            product.set(req.body);
 
            product.save((err, product) => {
                console.log(product);
 
              res.json({content:product});
            });
        }
    })
 })

 router.delete('/:id', (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
       if(err){
          res.json({
             message: err
          })
       }
       else{
          Product.remove({
              _id: req.params.id
          }, (err, user) => {
              if(err) {
                  res.json({message: err})
              }
              else{
                res.status(200).json({
                    message: 'Item deleted successfully'
                })  
              }
          })
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
            quantity: req.body.quantity,
            mainPhoto: req.body.mainPhoto,
            secondaryPhoto: req.body.secondaryPhoto
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