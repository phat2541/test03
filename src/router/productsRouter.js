const express = require('express');
const productRouter = express.Router();
const products = require("../data/products.json");

const app = express();

productRouter.route("/").get((req,res) =>{
    res.render("products",{
        products,
            
        }
    );
});

productRouter.route("/:id").get((req, res) =>{
    const id = req.params.id;
    res.render("product",{
        product: products[id],

    });
});

module.exports = productsRouter;
